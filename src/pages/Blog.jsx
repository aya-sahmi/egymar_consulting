import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import BlogCard from '../components/blog/BlogCard'
import { posts } from '../data/blog'

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937]">
      <Navbar />
      <main>
        <section className="px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.3)] lg:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">Blog</p>
              <h1 className="mt-4 text-4xl font-semibold text-[#1F2937] sm:text-5xl">Des contenus à valeur ajoutée pour préparer vos décisions</h1>
              <p className="mt-6 text-lg leading-8 text-[#1F2937]/75">Cette section est prête à accueillir une API ou un CMS futur, tout en proposant déjà des articles de fond et de qualité.</p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {posts.map((post) => <BlogCard key={post.title} post={post} onOpen={setSelectedPost} />)}
            </div>
          </div>
        </section>
      </main>
      <AnimatePresence>
        {selectedPost && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1F2937]/70 px-4 py-8 backdrop-blur-sm">
            <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }} transition={{ duration: 0.2 }} className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-[#8A4B23]/10 bg-white shadow-[0_30px_100px_-35px_rgba(31,41,55,0.7)]">
              <button onClick={() => setSelectedPost(null)} className="absolute right-4 top-4 rounded-full border border-[#8A4B23]/10 bg-[#FAF7F2] p-2 text-[#8A4B23] transition hover:bg-[#8A4B23] hover:text-white">
                <X size={18} />
              </button>
              <div className="p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A4B23]">{selectedPost.category}</p>
                <h2 className="mt-4 text-3xl font-semibold text-[#1F2937]">{selectedPost.title}</h2>
                <div className="mt-4 flex items-center gap-3 text-sm text-[#1F2937]/60">
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>Article premium</span>
                </div>
                <div className="mt-8 space-y-5 text-sm leading-8 text-[#1F2937]/75">
                  {selectedPost.content.map((paragraph, index) => (
                    <p key={`${selectedPost.title}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default Blog
