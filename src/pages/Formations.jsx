import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FormationCard from '../components/home/FormationCard'
import { formations } from '../data/formations'

const Formations = () => {
  const upcoming = formations.filter((formation) => formation.status === 'À venir')
  const completed = formations.filter((formation) => formation.status === 'Terminée')

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937]">
      <Navbar />
      <main>
        <section className="px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.3)] lg:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Formations</p>
              <h1 className="mt-4 text-4xl font-semibold text-[#1F2937] sm:text-5xl">Des programmes de formation pratiques, structurés et adaptés</h1>
              <p className="mt-6 text-lg leading-8 text-[#1F2937]/75">Nous proposons des parcours à la fois pédagogiques et opérationnels pour renforcer la culture qualité et l’autonomie des équipes.</p>
            </div>
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold text-[#1F2937]">Formations à venir</h2>
                <div className="mt-6 grid gap-6">
                  {upcoming.map((formation) => <FormationCard key={formation.title} formation={formation} />)}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#1F2937]">Formations passées</h2>
                <div className="mt-6 grid gap-6">
                  {completed.map((formation) => <FormationCard key={formation.title} formation={formation} />)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Formations
