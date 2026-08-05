import { motion } from 'framer-motion'
import { partners } from '../../data/partners'

const PartnerSlider = () => {
  const duplicatedPartners = [...partners, ...partners]

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#8A4B23]/10 bg-white/80 p-6 shadow-[0_20px_80px_-40px_rgba(31,41,55,0.4)] backdrop-blur">
      <div className="mb-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Ils nous font confiance</p>
      </div>
      <div className="group relative flex overflow-hidden">
        <motion.div
          className="flex min-w-full items-center gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={`${partner}-${index}`} className="min-w-[220px] rounded-2xl border border-[#8A4B23]/10 bg-[#FAF7F2] px-6 py-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1F2937]">{partner}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default PartnerSlider
