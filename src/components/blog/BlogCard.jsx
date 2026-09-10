import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BlogCard = ({ post, onOpen }) => {
  return (
    <>
      <motion.article
        whileHover={{ y: -6, scale: 1.01 }}
        className="rounded-[1.75rem] border border-[#8A4B23]/10 bg-[#FAF7F2] p-7 shadow-[0_25px_70px_-35px_rgba(31,41,55,0.35)]"
      >
        {post.cover_image_url ? <img src={post.cover_image_url} alt="" className="mb-6 h-48 w-full rounded-2xl object-cover" /> : <div className="mb-6 flex h-48 items-center justify-center rounded-2xl bg-[#8A4B23]/10 text-sm font-semibold uppercase tracking-[0.2em] text-[#8A4B23]">EGYMAR Consulting</div>}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A4B23]">{post.category}</p>
        <h3 className="mt-4 text-xl font-semibold text-[#1F2937]">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#1F2937]/75">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between text-sm text-[#1F2937]/60">
          <span>{post.author} · {post.date}</span>
          {onOpen ? <button onClick={() => onOpen(post)} className="font-medium text-[#8A4B23] transition hover:text-[#6D3918]">Lire l’article</button> : <Link to={`/blog/${post.slug}`} className="font-medium text-[#8A4B23] transition hover:text-[#6D3918]">Lire l’article</Link>}
        </div>
      </motion.article>
    </>
  )
}

export default BlogCard
