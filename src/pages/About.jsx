import { motion } from 'framer-motion'
import { BadgeCheck, BriefcaseBusiness} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const story = [
  'Créé en juillet 2023, EGYMAR Consulting s’est imposé comme un cabinet de conseil et d’audit au service des organisations ambitieuses.',
  'Nous combinons expertise sectorielle, rigueur méthodologique et approche humaine pour aider nos clients à renforcer leurs systèmes de management.',
  'Notre méthode privilégie la clarté, l’adhésion des équipes et l’amélioration durable des performances.'
]

const values = [
  { title: 'Intégrité', text: 'Un engagement de transparence et de fiabilité dans chaque mission.' },
  { title: 'Compétence', text: 'Des expertises solides et des approches adaptées aux spécificités de votre activité.' },
  { title: 'Amélioration continue', text: 'Une démarche d’apprentissage permanent pour un impact durable.' }
]

const timeline = [
  { year: '2023', title: 'Création du cabinet', text: 'Lancement d’EGYMAR Consulting avec une vision premium de conseil et d’audit.' },
  { year: '2024', title: 'Extension des expertises', text: 'Développement des services de formation et d’accompagnement qualité.' },
  { year: '2025', title: 'Renforcement du positionnement', text: 'Consolidation des missions auprès d’entreprises exigeantes.' }
]

const team = [
  { name: 'Karim Ait El Mouden', role: 'Président directeur', text: 'Pilote stratégique et garant de la qualité du cabinet.' },
  { name: 'Nadia El Amrani', role: 'Directrice qualité', text: 'Spécialiste audit, conformité et systèmes de management.' },
  { name: 'Youssef Bensaid', role: 'Responsable formation', text: 'Conçoit des parcours de formation adaptés aux réalités métier.' }
]

const About = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937]">
      <Navbar />
      <main>
        <section className="px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.3)] lg:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Notre histoire</p>
              <h1 className="mt-4 text-4xl font-semibold text-[#1F2937] sm:text-5xl">Un cabinet de conseil premium pensé pour les organisations exigeantes</h1>
              <p className="mt-6 text-lg leading-8 text-[#1F2937]/75">Nous accompagnons les entreprises dans la structuration de leurs systèmes, la maîtrise des risques et le développement de leurs performances avec une approche claire, opérationnelle et humaine.</p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {story.map((paragraph) => (
                <div key={paragraph} className="rounded-[1.5rem] border border-[#8A4B23]/10 bg-[#FAF7F2] p-6 text-sm leading-7 text-[#1F2937]/70">
                  {paragraph}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-[#8A4B23]/10 bg-[#1F2937] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Notre mission</p>
              <h2 className="mt-4 text-3xl font-semibold">Créer des organisations plus solides et plus performantes</h2>
              <p className="mt-5 text-sm leading-7 text-white/70">Nous proposons des solutions adaptées à chaque contexte pour renforcer la conformité, l’efficacité opérationnelle et la culture qualité au sein des entreprises.</p>
            </div>
            <div className="rounded-[2rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.2)]">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Notre vision</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#1F2937]">Une approche de conseil qui anticipe les enjeux et accompagne le changement</h2>
              <p className="mt-5 text-sm leading-7 text-[#1F2937]/70">Notre ambition est d’aider les entreprises à se projeter sereinement dans leurs défis de croissance, de conformité et d’amélioration continue.</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Nos valeurs</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1F2937] sm:text-4xl">Des principes qui structurent chaque intervention</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <motion.div key={value.title} whileHover={{ y: -6 }} className="rounded-[1.75rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_25px_70px_-35px_rgba(31,41,55,0.3)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8A4B23]/10 text-[#8A4B23]">
                    <BadgeCheck size={20} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#1F2937]">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#1F2937]/70">{value.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#8A4B23]/10 bg-[#FAF7F2] p-8 lg:p-12">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Notre équipe</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1F2937] sm:text-4xl">Des profils complémentaires au service de votre transformation</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {team.map((member) => (
                <motion.div key={member.name} whileHover={{ y: -6 }} className="rounded-[1.75rem] border border-[#8A4B23]/10 bg-white p-8 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8A4B23]/10 text-[#8A4B23]">
                    <BriefcaseBusiness size={20} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#1F2937]">{member.name}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#8A4B23]">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-[#1F2937]/70">{member.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Timeline</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1F2937] sm:text-4xl">Les étapes d’un cabinet en croissance</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {timeline.map((item) => (
                <div key={item.year} className="rounded-[1.75rem] border border-[#8A4B23]/10 bg-white p-8 shadow-sm">
                  <p className="text-3xl font-semibold text-[#8A4B23]">{item.year}</p>
                  <h3 className="mt-4 text-xl font-semibold text-[#1F2937]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#1F2937]/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About
