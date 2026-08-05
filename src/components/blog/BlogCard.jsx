import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const BlogCard = ({ post, onOpen }) => {
  return (
    <>
      <motion.article
        whileHover={{ y: -6, scale: 1.01 }}
        className="rounded-[1.75rem] border border-[#8A4B23]/10 bg-[#FAF7F2] p-7 shadow-[0_25px_70px_-35px_rgba(31,41,55,0.35)]"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A4B23]">{post.category}</p>
        <h3 className="mt-4 text-xl font-semibold text-[#1F2937]">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#1F2937]/75">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between text-sm text-[#1F2937]/60">
          <span>{post.date}</span>
          <button onClick={() => onOpen(post)} className="font-medium text-[#8A4B23] transition hover:text-[#6D3918]">
            Lire l’article
          </button>
        </div>
      </motion.article>
    </>
  )
}

export default BlogCard
