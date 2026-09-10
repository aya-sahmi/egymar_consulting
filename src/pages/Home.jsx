import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Building2, Compass, Handshake, Mail, Phone, ShieldCheck, Sparkles, TrendingUp, GraduationCap } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PartnerSlider from '../components/home/PartnerSlider'
import FormationCard from '../components/home/FormationCard'
import BlogCard from '../components/blog/BlogCard'
import { services } from '../data/services'
import { getPublishedBlogs, getPublishedFormations, saveContactMessage } from '../services/contentService'
import { stats } from '../data/stats'

const heroCards = [
  { title: 'Conseil stratégique', icon: Compass },
  { title: 'Audit & conformité', icon: ShieldCheck },
  { title: 'Formation ciblée', icon: GraduationCap }
]

const serviceHighlights = [
  { title: 'Accompagnement des entreprises', text: 'Mise en œuvre des systèmes qualité et amélioration des processus.' },
  { title: 'Audits de conformité', text: 'Évaluation des risques, des performances et de la gouvernance.' },
  { title: 'Formation durable', text: 'Créer une culture qualité solide et performante.' }
]

const Home = () => {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formations, setFormations] = useState([])
  const [posts, setPosts] = useState([])
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  useEffect(() => {
    getPublishedFormations().then(setFormations).catch(() => setSubmitError('Les formations sont temporairement indisponibles.'))
    getPublishedBlogs().then(setPosts).catch(() => setSubmitError('Les articles sont temporairement indisponibles.'))
  }, [])

  const onSubmit = async (data) => {
    setSubmitted(false)
    setSubmitError('')
    try {
      await saveContactMessage(data)
      setSubmitted(true)
      reset()
    } catch (error) {
      setSubmitError(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937]">
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-6 pb-24 pt-32 lg:px-8 lg:pt-40">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(138,75,35,0.16),_transparent_40%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center rounded-full border border-[#8A4B23]/20 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#8A4B23]">
                <Sparkles className="mr-2 h-4 w-4" /> Cabinet de conseil & audit
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                Votre partenaire de confiance en <span className="text-[#8A4B23]">Conseil & Audit</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1F2937]/75">
                EGYMAR Consulting accompagne les entreprises dans leurs démarches de conseil, d’audit, de formation et de mise en place des systèmes de management conformes aux standards internationaux.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/services" className="rounded-full bg-[#8A4B23] px-6 py-3 font-semibold text-white transition hover:bg-[#6D3918]">Découvrir nos services</a>
                <a href="/contact" className="rounded-full border border-[#8A4B23]/20 bg-white px-6 py-3 font-semibold text-[#8A4B23] transition hover:border-[#8A4B23]">Demander un devis</a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroCards.map((card) => {
                  const Icon = card.icon
                  return (
                    <div key={card.title} className="rounded-[1.25rem] border border-[#8A4B23]/10 bg-white/80 p-4 shadow-sm">
                      <Icon className="h-5 w-5 text-[#8A4B23]" />
                      <p className="mt-3 text-sm font-semibold text-[#1F2937]">{card.title}</p>
                    </div>
                  )
                })}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-[#8A4B23]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#8A4B23]/10 bg-white p-6 shadow-[0_30px_100px_-35px_rgba(31,41,55,0.45)]">
                <div className="rounded-[1.5rem] border border-[#8A4B23]/10 bg-[#FAF7F2] p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A4B23]">Équipe premium</p>
                      <h2 className="mt-2 text-2xl font-semibold text-[#1F2937]">Des experts engagés</h2>
                    </div>
                    <div className="rounded-full border border-[#8A4B23]/20 bg-white p-3 text-[#8A4B23]">
                      <BriefcaseBusiness size={20} />
                    </div>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.25rem] bg-[#1F2937] p-6 text-white">
                      <p className="text-sm uppercase tracking-[0.3em] text-[#8A4B23]">Audit</p>
                      <p className="mt-3 text-3xl font-semibold">+120</p>
                      <p className="mt-2 text-sm text-white/70">missions réalisées</p>
                    </div>
                    <div className="rounded-[1.25rem] border border-[#8A4B23]/10 bg-white p-6">
                      <p className="text-sm uppercase tracking-[0.3em] text-[#8A4B23]">Formation</p>
                      <p className="mt-3 text-3xl font-semibold text-[#1F2937]">+35</p>
                      <p className="mt-2 text-sm text-[#1F2937]/70">programmes conçus</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <PartnerSlider />
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.3)] lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Qui sommes-nous</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#1F2937] sm:text-4xl">Des études, diagnostics et mise en place de systèmes de management de qualité.</h2>
              <p className="mt-6 text-lg leading-8 text-[#1F2937]/75">Depuis juillet 2023, EGYMAR Consulting propose un accompagnement sur mesure mêlant conseil, audit, formation et assistance opérationnelle.</p>
              <a href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#8A4B23]">En savoir plus <ArrowRight size={18} /></a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceHighlights.map((item) => (
                <div key={item.title} className="rounded-[1.25rem] border border-[#8A4B23]/10 bg-[#FAF7F2] p-6">
                  <h3 className="text-lg font-semibold text-[#1F2937]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#1F2937]/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Nos services</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#1F2937] sm:text-4xl">Des expertises complètes pour renforcer votre performance</h2>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {services.slice(0, 3).map((service) => {
                const Icon = { ShieldCheck, GraduationCap, Handshake }[service.icon]
                return (
                  <motion.article key={service.title} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[1.75rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_25px_70px_-35px_rgba(31,41,55,0.35)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8A4B23]/10 text-[#8A4B23]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-[#1F2937]">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#1F2937]/70">{service.description}</p>
                    <a href="/services" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#8A4B23]">En savoir plus <ArrowRight size={16} /></a>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-[#8A4B23]/10 bg-[#1F2937] p-8 text-white shadow-[0_30px_100px_-40px_rgba(31,41,55,0.6)]">
              <h3 className="text-2xl font-semibold">Notre mission</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">Accompagner les entreprises dans la mise en œuvre des systèmes qualité avec pédagogie et exigence.</p>
            </div>
            <div className="rounded-[2rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.2)]">
              <h3 className="text-2xl font-semibold text-[#1F2937]">Notre vision</h3>
              <p className="mt-4 text-sm leading-7 text-[#1F2937]/70">Créer des organisations plus robustes, plus performantes et plus conscientes de leurs enjeux.</p>
            </div>
            <div className="rounded-[2rem] border border-[#8A4B23]/10 bg-[#FAF7F2] p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.2)]">
              <h3 className="text-2xl font-semibold text-[#1F2937]">Notre valeur</h3>
              <p className="mt-4 text-sm leading-7 text-[#1F2937]/70">Allier intégrité, compétence et amélioration continue au service de chaque client.</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Nos valeurs</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1F2937] sm:text-4xl">L’excellence au cœur de chaque engagement</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'Intégrité', text: 'Transparence, rigueur et respect des engagements.', icon: BadgeCheck },
                { title: 'Compétence', text: 'Expertise approfondie et compréhension fine des réalités terrain.', icon: Building2 },
                { title: 'Amélioration continue', text: 'Une posture d’apprentissage permanent à chaque mission.', icon: TrendingUp }
              ].map((value) => {
                const Icon = value.icon
                return (
                  <motion.div key={value.title} whileHover={{ y: -6 }} className="rounded-[1.75rem] border border-[#8A4B23]/10 bg-white p-8 text-center shadow-[0_25px_70px_-35px_rgba(31,41,55,0.3)]">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8A4B23]/10 text-[#8A4B23]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[#1F2937]">{value.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#1F2937]/70">{value.text}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#8A4B23]/10 bg-[#FAF7F2] p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.2)] lg:p-12">
            <div className="grid gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="rounded-[1.5rem] bg-white p-6 text-center shadow-sm">
                  <p className="text-4xl font-extrabold text-[#8A4B23]">{stat.value}</p>
                  <p className="mt-3 text-sm leading-7 text-[#1F2937]/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Formations</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#1F2937] sm:text-4xl">Des parcours conçus pour les équipes</h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {formations.length ? formations.map((formation) => <FormationCard key={formation.id || formation.title} formation={formation} />) : <p className="text-sm text-[#1F2937]/60">Aucune formation publiée.</p>}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Blog</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#1F2937] sm:text-4xl">Des insights à forte valeur ajoutée</h2>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {posts.length ? posts.map((post) => <BlogCard key={post.id || post.title} post={post} />) : <p className="text-sm text-[#1F2937]/60">Aucun article publié.</p>}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.25)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Contact rapide</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1F2937] sm:text-4xl">Discutons de votre besoin</h2>
              <p className="mt-4 text-sm leading-7 text-[#1F2937]/70">Un accompagnement sur mesure, pensé pour vos enjeux de conformité, d’audit et de transformation.</p>
              <div className="mt-8 space-y-3 text-sm text-[#1F2937]/70">
                <p className="flex items-center gap-3"><Phone size={16} className="text-[#8A4B23]" /> +212 661 94 60 77</p>
                <p className="flex items-center gap-3"><Mail size={16} className="text-[#8A4B23]" /> Ka.egymarconsulting@gmail.com</p>
              </div>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <input {...register('name', { required: 'Le nom est requis' })} className="w-full rounded-2xl border border-[#8A4B23]/10 bg-[#FAF7F2] px-4 py-3 outline-none ring-0" placeholder="Nom" />
                  {errors.name && <p className="mt-2 text-sm text-[#8A4B23]">{errors.name.message}</p>}
                </div>
                <div>
                  <input {...register('phone', { required: 'Le téléphone est requis' })} className="w-full rounded-2xl border border-[#8A4B23]/10 bg-[#FAF7F2] px-4 py-3 outline-none ring-0" placeholder="Téléphone" />
                  {errors.phone && <p className="mt-2 text-sm text-[#8A4B23]">{errors.phone.message}</p>}
                </div>
              </div>
              <div>
                <input {...register('email', { required: 'L’email est requis', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' } })} className="w-full rounded-2xl border border-[#8A4B23]/10 bg-[#FAF7F2] px-4 py-3 outline-none ring-0" placeholder="Email" />
                {errors.email && <p className="mt-2 text-sm text-[#8A4B23]">{errors.email.message}</p>}
              </div>
              <div>
                <textarea {...register('message', { required: 'Le message est requis' })} className="min-h-32 w-full rounded-2xl border border-[#8A4B23]/10 bg-[#FAF7F2] px-4 py-3 outline-none ring-0" placeholder="Message" />
                {errors.message && <p className="mt-2 text-sm text-[#8A4B23]">{errors.message.message}</p>}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="rounded-full bg-[#8A4B23] px-6 py-3 font-semibold text-white transition hover:bg-[#6D3918]">Envoyer</button>
                {submitted && <p className="text-sm font-medium text-[#8A4B23]">Merci, votre demande a bien été enregistrée.</p>}
                {submitError && <p className="text-sm font-medium text-[#8A4B23]">{submitError}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
