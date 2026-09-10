import { useEffect, useState } from 'react'
import { ArrowLeft, Download, Mail } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { getFormationBySlug } from '../services/contentService'
import { downloadFormationPdf } from '../services/pdfService'

const FormationArticle = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [formation, setFormation] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const item = await getFormationBySlug(slug)
        if (!item) setError('Cette formation est introuvable ou n’est pas publiée.')
        else setFormation(item)
      } catch { setError('Impossible de charger cette formation.') }
    }
    load()
  }, [slug])

  const contact = () => navigate(`/contact?formation=${encodeURIComponent(formation.code || formation.title)}`)

  return <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937]"><Navbar /><main className="px-6 pb-20 pt-32 lg:px-8 lg:pt-40"><div className="mx-auto max-w-5xl">{!formation && !error && <p className="text-[#8A4B23]">Chargement...</p>}{error && <p className="rounded-2xl bg-[#8A4B23]/10 p-5 text-[#8A4B23]">{error}</p>}{formation && <><Link to="/formations" className="inline-flex items-center gap-2 text-sm font-semibold text-[#8A4B23]"><ArrowLeft size={16} />Retour au catalogue</Link><article className="mt-8 overflow-hidden rounded-[2rem] border border-[#8A4B23]/10 bg-white shadow-[0_30px_100px_-40px_rgba(31,41,55,0.3)]">{formation.image_url && <img src={formation.image_url} alt="" className="h-64 w-full object-cover lg:h-80" />}<div className="p-8 lg:p-14"><p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A4B23]">{formation.category}</p><div className="mt-5 flex flex-wrap items-start justify-between gap-4"><div><p className="text-sm font-bold text-[#8A4B23]">{formation.code || 'Formation professionnelle'}</p><h1 className="mt-2 text-4xl font-semibold sm:text-5xl">{formation.title}</h1></div><span className="rounded-full bg-[#8A4B23]/10 px-4 py-2 text-sm font-semibold text-[#8A4B23]">{formation.duration}</span></div><div className="mt-10 grid gap-6 border-y border-[#8A4B23]/10 py-8 md:grid-cols-2"><Info label="Public cible" value={formation.audience} /><Info label="Format" value={formation.format} /><Info label="Objectif" value={formation.objective} /><Info label="Description" value={formation.description} /></div><div className="mt-8 flex flex-wrap gap-3"><button onClick={() => downloadFormationPdf(formation)} className="inline-flex items-center gap-2 rounded-xl bg-[#8A4B23] px-5 py-3 text-sm font-semibold text-white"><Download size={17} />Télécharger la fiche PDF</button><button onClick={contact} className="inline-flex items-center gap-2 rounded-xl border border-[#8A4B23]/20 px-5 py-3 text-sm font-semibold text-[#8A4B23]"><Mail size={17} />Demander cette formation</button></div></div></article></>}</div></main><Footer /></div>
}

const Info = ({ label, value }) => <div><h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A4B23]">{label}</h2><p className="mt-2 text-sm leading-7 text-[#1F2937]/75">{value || 'À définir avec EGYMAR Consulting.'}</p></div>

export default FormationArticle
