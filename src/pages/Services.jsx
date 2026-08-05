import { motion } from 'framer-motion'
import { ArrowRight, Compass, GraduationCap, Handshake, Layers3, SearchCheck, ShieldCheck } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { services } from '../data/services'

const iconMap = {
  ShieldCheck,
  GraduationCap,
  Handshake,
  Compass,
  SearchCheck,
  Layers3
}

const Services = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937]">
      <Navbar />
      <main>
        <section className="px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.3)] lg:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Services</p>
              <h1 className="mt-4 text-4xl font-semibold text-[#1F2937] sm:text-5xl">Des prestations de conseil, audit et formation pensées pour chaque étape de votre maturité</h1>
              <p className="mt-6 text-lg leading-8 text-[#1F2937]/75">Chaque intervention est construite autour de vos enjeux, du contexte de votre organisation et des attendus de vos parties prenantes.</p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = iconMap[service.icon]
                return (
                  <motion.article key={service.title} whileHover={{ y: -6 }} className="rounded-[1.75rem] border border-[#8A4B23]/10 bg-[#FAF7F2] p-8 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8A4B23]/10 text-[#8A4B23]">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[#1F2937]">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#1F2937]/70">{service.description}</p>
                    <p className="mt-4 text-sm leading-7 text-[#1F2937]/60">{service.detail}</p>
                    <a href="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#8A4B23]">Prendre rendez-vous <ArrowRight size={16} /></a>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Services
