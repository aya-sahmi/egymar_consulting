import { motion } from 'framer-motion'
import logo from "../../assets/EGYMAR_LOGO.jpeg"

const Logo = () => {
  return (
    <motion.a
      href="/"
      className="flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
    <div className="flex h-17 w-16 items-center justify-center overflow-hidden border border-[#8A4B23]/20 shadow-sm">
        <img src={logo} alt="Logo" className="h-full w-full object-cover" />
    </div>
      <div className="leading-tight">
        <p className="text-lg font-semibold tracking-[0.2em] text-[#1F2937]">EGYMAR</p>
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#8A4B23]">
          Cabinet de Conseil &amp; d’Audit
        </p>
      </div>
    </motion.a>
  )
}

export default Logo
