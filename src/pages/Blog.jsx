import { useEffect, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import BlogCard from '../components/blog/BlogCard'
import { getPublishedBlogs } from '../services/contentService'

const Blog = () => {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try { setPosts(await getPublishedBlogs()) } catch { setError('Une erreur est survenue lors du chargement des articles.') }
    }
    load()
  }, [])

  return <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937]"><Navbar /><main><section className="px-6 pb-20 pt-32 lg:px-8 lg:pt-40"><div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.3)] lg:p-14"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Blog</p><h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Des contenus à valeur ajoutée pour préparer vos décisions</h1><p className="mt-6 text-lg leading-8 text-[#1F2937]/75">Découvrez les analyses et conseils d’EGYMAR Consulting sur la qualité, l’audit et l’amélioration continue.</p></div><div className="mt-10 grid gap-6 lg:grid-cols-3">{!posts && !error && <p className="text-[#8A4B23]">Chargement...</p>}{error && <p className="text-[#8A4B23]">{error}</p>}{posts?.length === 0 && <p className="text-[#1F2937]/60">Aucun article publié.</p>}{posts?.map((post) => <BlogCard key={post.id || post.slug} post={post} />)}</div></div></section></main><Footer /></div>
}

export default Blog
