import { motion } from 'framer-motion'
import { partners } from '../../data/partners'

const PartnerSlider = () => {
  const duplicatedPartners = [...partners, ...partners]

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#8A4B23]/10 bg-white/80 p-4 shadow-[0_20px_80px_-40px_rgba(31,41,55,0.4)] backdrop-blur sm:p-6">
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A4B23] sm:text-sm sm:tracking-[0.35em]">Ils nous font confiance</p>
      </div>
      <div className="group relative flex overflow-hidden">
        <motion.div
          className="flex min-w-full items-center gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={`${partner}-${index}`} className="min-w-[180px] rounded-2xl border border-[#8A4B23]/10 bg-[#FAF7F2] px-4 py-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] sm:min-w-[220px] sm:px-6 2xl:min-w-[260px]">
              <img src={partner.image} alt={partner.name} className="h-16 w-full object-contain 2xl:h-20" loading="lazy"/>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default PartnerSlider
