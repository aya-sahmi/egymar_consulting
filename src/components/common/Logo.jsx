import { motion } from 'framer-motion'
import logo from "../../assets/EGYMAR_LOGO.jpeg"

const Logo = () => {
  return (
    <motion.a
      href="/"
      className="flex min-w-0 items-center gap-2 sm:gap-3"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
    <div className="flex h-14 w-12 shrink-0 items-center justify-center overflow-hidden border border-[#8A4B23]/20 shadow-sm sm:h-17 sm:w-16">
        <img src={logo} alt="Logo" className="h-full w-full object-cover" />
    </div>
      <div className="leading-tight">
        <p className="text-base font-semibold tracking-[0.16em] text-[#1F2937] sm:text-lg sm:tracking-[0.2em]">EGYMAR</p>
        <p className="text-[0.6rem] uppercase tracking-[0.16em] text-[#8A4B23] sm:text-[0.65rem] sm:tracking-[0.3em]">
          Cabinet de Conseil &amp; d’Audit
        </p>
      </div>
    </motion.a>
  )
}

export default Logo
