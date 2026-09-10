import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { saveContactMessage } from '../services/contentService'

const Contact = () => {
  const [searchParams] = useSearchParams()
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ defaultValues: { message: '' } })
  const [feedback, setFeedback] = useState('')
  useEffect(() => {
    const formation = searchParams.get('formation')
    if (formation) reset({ message: `Bonjour, je souhaite demander la formation ${formation}.` })
  }, [reset, searchParams])
  const onSubmit = async (values) => {
    setFeedback('')
    try { await saveContactMessage(values); reset(); setFeedback('Merci, votre message a bien été enregistré.') } catch (error) { setFeedback(error.message) }
  }
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937]">
      <Navbar />
      <main>
        <section className="px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.3)] lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Contact</p>
              <h1 className="mt-4 text-4xl font-semibold text-[#1F2937] sm:text-5xl">Nous sommes à votre écoute</h1>
              <p className="mt-6 text-lg leading-8 text-[#1F2937]/75">Pour un échange rapide sur vos besoins, un devis ou une mission de conseil, contactez-nous directement.</p>
              <div className="mt-8 space-y-4 rounded-[1.5rem] border border-[#8A4B23]/10 bg-[#FAF7F2] p-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-[#8A4B23]" />
                  <div>
                    <p className="font-semibold text-[#1F2937]">Adresse</p>
                    <p className="mt-1 text-sm leading-7 text-[#1F2937]/70">39 Boulevard Abderrahim Bouabid<br />Quartier El Wafa<br />Agadir</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#8A4B23]" />
                  <div className="text-sm text-[#1F2937]/70">+212 661 94 60 77<br />+212 666 82 00 44</div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#8A4B23]" />
                  <a href="mailto:Ka.egymarconsulting@gmail.com" className="text-sm text-[#1F2937]/70">Ka.egymarconsulting@gmail.com</a>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-[#8A4B23]/10 bg-[#FAF7F2]"><iframe title="EGYMAR Consulting à Agadir" className="h-64 w-full border-0" src="https://www.google.com/maps?q=39%20Boulevard%20Abderrahim%20Bouabid%2C%20Agadir%2C%20Maroc&output=embed" loading="lazy" /><a href="https://www.google.com/maps/search/?api=1&query=39%20Boulevard%20Abderrahim%20Bouabid%2C%20Agadir%2C%20Maroc" target="_blank" rel="noreferrer" className="block p-4 text-sm font-semibold text-[#8A4B23]">Ouvrir dans Google Maps</a></div>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div><input {...register('name', { required: 'Le nom est requis' })} className="w-full rounded-2xl border border-[#8A4B23]/10 bg-[#FAF7F2] px-4 py-3 outline-none" placeholder="Nom" />{errors.name && <p className="mt-1 text-xs text-[#8A4B23]">{errors.name.message}</p>}</div>
                  <div><input {...register('phone')} className="w-full rounded-2xl border border-[#8A4B23]/10 bg-[#FAF7F2] px-4 py-3 outline-none" placeholder="Téléphone" /></div>
                </div>
                <div><input {...register('email', { required: 'L’email est requis' })} className="w-full rounded-2xl border border-[#8A4B23]/10 bg-[#FAF7F2] px-4 py-3 outline-none" placeholder="Email" />{errors.email && <p className="mt-1 text-xs text-[#8A4B23]">{errors.email.message}</p>}</div>
                <div><textarea {...register('message', { required: 'Le message est requis' })} className="min-h-32 w-full rounded-2xl border border-[#8A4B23]/10 bg-[#FAF7F2] px-4 py-3 outline-none" placeholder="Message" />{errors.message && <p className="mt-1 text-xs text-[#8A4B23]">{errors.message.message}</p>}</div>
                <div className="flex flex-wrap items-center gap-4"><motion.button whileHover={{ y: -2 }} disabled={isSubmitting} type="submit" className="rounded-full bg-[#8A4B23] px-6 py-3 font-semibold text-white transition hover:bg-[#6D3918] disabled:opacity-60">{isSubmitting ? 'Envoi...' : 'Envoyer'}</motion.button>{feedback && <p className="text-sm text-[#8A4B23]">{feedback}</p>}</div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
