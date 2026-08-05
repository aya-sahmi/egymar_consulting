import { motion } from 'framer-motion'

const FormationCard = ({ formation }) => {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      className="rounded-[1.75rem] border border-[#8A4B23]/10 bg-white p-7 shadow-[0_25px_70px_-35px_rgba(31,41,55,0.35)]"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${formation.status === 'À venir' ? 'bg-[#8A4B23]/10 text-[#8A4B23]' : 'bg-[#1F2937]/10 text-[#1F2937]'}`}>
          {formation.status}
        </span>
        <span className="text-sm text-[#1F2937]/70">{formation.duration}</span>
      </div>
      <h3 className="text-xl font-semibold text-[#1F2937]">{formation.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#1F2937]/75">{formation.date}</p>
    </motion.article>
  )
}

export default FormationCard
