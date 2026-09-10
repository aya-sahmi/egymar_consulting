import { posts as localPosts } from '../data/blog'
import { formations as localFormations } from '../data/formations'
import { formationCatalog } from '../data/formationCatalog'
import { isSupabaseConfigured, supabase } from '../lib/supabase'

export const slugify = (value) => value.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export const normalizeBlog = (post) => ({
  ...post,
  slug: post.slug || slugify(post.title),
  author: post.author || 'EGYMAR Consulting',
  published_at: post.published_at || null,
  date: post.date || (post.published_at ? new Date(post.published_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }) : '')
})

export const normalizeFormation = (formation) => ({
  ...formation,
  slug: formation.slug || slugify(formation.title),
  status: formation.status || 'published',
  format: formation.format || 'Présentiel ou à distance, en intra ou inter-entreprises',
  description: formation.description || formation.objective || ''
})

const publishedQuery = (table) => supabase.from(table).select('*').eq('status', 'published').order('created_at', { ascending: false })

export async function getPublishedBlogs() {
  if (!isSupabaseConfigured) return localPosts.map(normalizeBlog)
  const { data, error } = await publishedQuery('blogs')
  if (error) return localPosts.map(normalizeBlog)
  return (data || []).map(normalizeBlog)
}

export async function getBlogBySlug(slug) {
  if (!isSupabaseConfigured) return localPosts.map(normalizeBlog).find((post) => post.slug === slug) || null
  const { data, error } = await supabase.from('blogs').select('*').eq('slug', slug).eq('status', 'published').single()
  if (error) return localPosts.map(normalizeBlog).find((post) => post.slug === slug) || null
  return data ? normalizeBlog(data) : null
}

export async function getPublishedFormations() {
  if (!isSupabaseConfigured) return [...formationCatalog, ...localFormations.map((formation) => ({ ...formation, status: 'published' }))].map(normalizeFormation)
  const { data, error } = await publishedQuery('formations')
  if (error) return [...formationCatalog, ...localFormations.map((formation) => ({ ...formation, status: 'published' }))].map(normalizeFormation)
  return (data || []).map(normalizeFormation)
}

export async function getFormationBySlug(slug) {
  if (!isSupabaseConfigured) return getPublishedFormations().then((items) => items.find((formation) => formation.slug === slug) || null)
  const { data, error } = await supabase.from('formations').select('*').eq('slug', slug).eq('status', 'published').single()
  if (error || !data) return getPublishedFormations().then((items) => items.find((formation) => formation.slug === slug) || null)
  return data ? normalizeFormation(data) : null
}

export function richContentToHtml(content) {
  if (Array.isArray(content)) return content.map((item) => typeof item === 'string' && /^\s*</.test(item) ? item : `<p>${item}</p>`).join('')
  if (content && typeof content === 'object' && Array.isArray(content.blocks)) return content.blocks.map((block) => `<${block.type || 'p'}>${block.text || ''}</${block.type || 'p'}>`).join('')
  return content || ''
}

export async function getAdminBlogs() {
  const { data, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false })
  if (error) throw error
  return data || []
}

export async function getAdminFormations() {
  const { data, error } = await supabase.from('formations').select('*').order('created_at', { ascending: false })
  if (error) throw error
  return data || []
}

export async function saveBlog(values, id) {
  const payload = { ...values, slug: values.slug || slugify(values.title), published_at: values.status === 'published' ? (values.published_at || new Date().toISOString()) : null }
  const query = id ? supabase.from('blogs').update(payload).eq('id', id) : supabase.from('blogs').insert(payload)
  const { data, error } = await query.select().single()
  if (error) throw error
  return data
}

export async function saveFormation(values, id) {
  const payload = { ...values, slug: values.slug || slugify(values.title) }
  const query = id ? supabase.from('formations').update(payload).eq('id', id) : supabase.from('formations').insert(payload)
  const { data, error } = await query.select().single()
  if (error) throw error
  return data
}

export async function deleteContent(table, id) {
  const { error } = await supabase.from(table).delete().eq('id', id)
  if (error) throw error
}

export async function uploadImage(file, bucket) {
  const path = `${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '-')}`
  const { error } = await supabase.storage.from(bucket).upload(path, file, { upsert: false, contentType: file.type })
  if (error) throw error
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl
}

export async function saveContactMessage(values) {
  if (!isSupabaseConfigured) throw new Error('Le formulaire de contact nécessite la configuration Supabase.')
  const { error } = await supabase.from('contact_messages').insert(values)
  if (error) throw error
}
