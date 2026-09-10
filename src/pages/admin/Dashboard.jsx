import { useEffect, useState } from 'react'
import { FileText, GraduationCap, CheckCircle2 } from 'lucide-react'
import { getAdminBlogs, getAdminFormations } from '../../services/contentService'

const Dashboard = () => {
  const [stats, setStats] = useState(null)
  const [error, setError] = useState('')
  useEffect(() => { Promise.all([getAdminBlogs(), getAdminFormations()]).then(([blogs, formations]) => setStats({ blogs: blogs.length, publishedBlogs: blogs.filter((item) => item.status === 'published').length, formations: formations.length, publishedFormations: formations.filter((item) => item.status === 'published').length })).catch(() => setError('Impossible de charger les statistiques.')) }, [])
  const cards = stats ? [{ label: 'Blogs', value: stats.blogs, icon: FileText }, { label: 'Blogs publiés', value: stats.publishedBlogs, icon: CheckCircle2 }, { label: 'Formations', value: stats.formations, icon: GraduationCap }, { label: 'Formations publiées', value: stats.publishedFormations, icon: CheckCircle2 }] : []
  return <section><p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A4B23]">Administration</p><h1 className="mt-3 text-4xl font-semibold">Tableau de bord</h1><p className="mt-3 text-[#1F2937]/65">Vue d’ensemble de vos contenus.</p>{error && <p className="mt-8 rounded-xl bg-[#8A4B23]/10 p-4 text-[#8A4B23]">{error}</p>}{!stats && !error && <p className="mt-8 text-[#8A4B23]">Chargement...</p>}<div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{cards.map(({ label, value, icon: Icon }) => <div key={label} className="rounded-2xl border border-[#8A4B23]/10 bg-white p-6 shadow-sm"><Icon className="text-[#8A4B23]" size={22} /><p className="mt-6 text-3xl font-semibold">{value}</p><p className="mt-2 text-sm text-[#1F2937]/60">{label}</p></div>)}</div></section>
}
export default Dashboard
