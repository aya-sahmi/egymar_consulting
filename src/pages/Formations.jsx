import { useEffect, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { getPublishedFormations } from '../services/contentService'
import { formationCategories } from '../data/formationCatalog'
import { Link } from 'react-router-dom'

const Formations = () => {
  const [formations, setFormations] = useState(null)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Toutes')

  useEffect(() => {
    const load = async () => {
      try { setFormations(await getPublishedFormations()) } catch { setError('Une erreur est survenue lors du chargement des formations.') }
    }
    load()
  }, [])

  const filteredFormations = useMemo(() => {
    if (!formations) return []
    const query = search.trim().toLowerCase()
    return formations.filter((formation) => {
      const matchesCategory = category === 'Toutes' || formation.category === category
      const matchesSearch = !query || [formation.code, formation.title, formation.audience, formation.objective].filter(Boolean).join(' ').toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [formations, search, category])

  return <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937]"><Navbar /><main><section className="px-6 pb-20 pt-32 lg:px-8 lg:pt-40"><div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.3)] lg:p-14"><div className="max-w-4xl"><p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Formations</p><h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Catalogue de Formations</h1><p className="mt-4 text-xl font-medium text-[#8A4B23]">Systèmes de management et audit — ISO 9001 · ISO/CEI 17025 · ISO/CEI 17020</p><p className="mt-6 text-lg leading-8 text-[#1F2937]/75">EGYMAR Consulting propose un catalogue complet de formations dédiées à la mise en place, au maintien et à l'amélioration des systèmes de management qualité et d'accréditation. Nos formations sont proposées en présentiel ou à distance, en intra-entreprise ou en inter-entreprises, avec supports pédagogiques et attestation de fin de formation.</p></div><div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto]"><label className="relative block"><Search className="absolute left-4 top-3.5 text-[#8A4B23]" size={19} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Rechercher une formation..." className="w-full rounded-xl border border-[#8A4B23]/15 bg-[#FAF7F2] py-3 pl-11 pr-4 outline-none focus:border-[#8A4B23]" /></label><div className="flex gap-2 overflow-x-auto pb-1"><button onClick={() => setCategory('Toutes')} className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold ${category === 'Toutes' ? 'bg-[#8A4B23] text-white' : 'border border-[#8A4B23]/15 text-[#8A4B23]'}`}>Toutes</button><select value={category === 'Toutes' ? '' : category} onChange={(event) => setCategory(event.target.value || 'Toutes')} className="min-w-56 rounded-xl border border-[#8A4B23]/15 bg-white px-4 py-3 text-sm font-semibold text-[#8A4B23]"><option value="">Filtrer par catégorie</option>{formationCategories.map((item) => <option key={item} value={item}>{item}</option>)}</select></div></div>{!formations && !error && <p className="mt-10 text-[#8A4B23]">Chargement...</p>}{error && <p className="mt-10 rounded-xl bg-[#8A4B23]/10 p-4 text-[#8A4B23]">{error}</p>}{formations && filteredFormations.length === 0 && <p className="mt-10 rounded-2xl border border-dashed border-[#8A4B23]/20 p-8 text-center text-[#1F2937]/60">Aucune formation publiée ne correspond à votre recherche.</p>}<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filteredFormations.map((formation) => <FormationCatalogCard key={formation.id || formation.slug} formation={formation} />)}</div></div></section></main><Footer /></div>
}

const FormationCatalogCard = ({ formation }) => <article className="flex flex-col rounded-[1.75rem] border border-[#8A4B23]/10 bg-[#FAF7F2] p-6 shadow-[0_25px_70px_-35px_rgba(31,41,55,0.35)]">{formation.image_url ? <img src={formation.image_url} alt="" className="mb-5 h-44 w-full rounded-2xl object-cover" /> : <div className="mb-5 flex h-44 items-center justify-center rounded-2xl bg-[#1F2937] px-5 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white">Formation EGYMAR</div>}<div className="flex items-start justify-between gap-3"><span className="rounded-full bg-[#8A4B23]/10 px-3 py-1 text-xs font-bold text-[#8A4B23]">{formation.code || 'Formation'}</span><span className="text-sm font-semibold text-[#1F2937]/65">{formation.duration}</span></div><p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A4B23]">{formation.category}</p><h2 className="mt-2 text-xl font-semibold">{formation.title}</h2><dl className="mt-5 space-y-3 text-sm leading-6 text-[#1F2937]/75"><div><dt className="font-semibold text-[#1F2937]">Public</dt><dd>{formation.audience || 'Professionnels et équipes concernées'}</dd></div><div><dt className="font-semibold text-[#1F2937]">Objectif</dt><dd>{formation.objective}</dd></div></dl><Link to={`/formations/${formation.slug}`} className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#8A4B23] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#6D3918]">Voir la formation</Link></article>

export default Formations
