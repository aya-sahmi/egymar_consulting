import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, Pencil, Plus, Trash2 } from 'lucide-react'
import { deleteContent, getAdminBlogs } from '../../services/contentService'

const Blogs = () => {
  const [items, setItems] = useState(null)
  const [error, setError] = useState('')

  const load = async () => {
    try {
      setError('')
      const data = await getAdminBlogs()
      setItems(data)
    } catch (err) {
      console.error('Erreur lors du chargement des blogs :', err)
      setError('Impossible de charger les blogs.')
      setItems([])
    }
  }

  useEffect(() => {
    let active = true
    const initialLoad = async () => {
      try {
        const data = await getAdminBlogs()
        if (active) setItems(data)
      } catch (err) {
        console.error('Erreur lors du chargement des blogs :', err)
        if (active) { setError('Impossible de charger les blogs.'); setItems([]) }
      }
    }
    initialLoad()
    return () => { active = false }
  }, [])

  const remove = async (id) => {
    if (!window.confirm('Supprimer ce blog ?')) return

    try {
      await deleteContent('blogs', id)
      await load()
    } catch (err) {
      console.error('Erreur lors de la suppression du blog :', err)
      setError('Impossible de supprimer ce blog.')
    }
  }

  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A4B23]">
            CMS
          </p>

          <h1 className="mt-3 text-4xl font-semibold">
            Blogs
          </h1>
        </div>

        <Link
          to="/admin/blogs/new"
          className="inline-flex items-center gap-2 rounded-xl bg-[#8A4B23] px-4 py-3 text-sm font-semibold text-white"
        >
          <Plus size={18} />
          Nouveau blog
        </Link>
      </div>

      {error && (
        <p className="mt-8 rounded-xl bg-[#8A4B23]/10 p-4 text-[#8A4B23]">
          {error}
        </p>
      )}

      {!items && !error && (
        <p className="mt-8 text-[#8A4B23]">
          Chargement...
        </p>
      )}

      {items?.length === 0 && (
        <p className="mt-8 rounded-2xl border border-dashed border-[#8A4B23]/20 p-8 text-[#1F2937]/60">
          Aucun blog.
        </p>
      )}

      {items && items.length > 0 && (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-[#8A4B23]/10 bg-white">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead className="border-b border-[#8A4B23]/10 bg-[#FAF7F2] text-[#1F2937]/60">
              <tr>
                <th className="px-5 py-4">Titre</th>
                <th>Catégorie</th>
                <th>Statut</th>
                <th>Date</th>
                <th className="px-5">Actions</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#8A4B23]/10 last:border-0"
                >
                  <td className="px-5 py-4 font-semibold">
                    {item.title}
                  </td>

                  <td>
                    {item.category}
                  </td>

                  <td>
                    <span className="rounded-full bg-[#8A4B23]/10 px-3 py-1 text-xs font-semibold text-[#8A4B23]">
                      {item.status}
                    </span>
                  </td>

                  <td>
                    {item.published_at
                      ? new Date(item.published_at).toLocaleDateString('fr-FR')
                      : '-'}
                  </td>

                  <td className="px-5">
                    <div className="flex gap-3">
                      <Link
                        title="Aperçu"
                        to={`/blog/${item.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#8A4B23]"
                      >
                        <Eye size={17} />
                      </Link>

                      <Link
                        title="Modifier"
                        to={`/admin/blogs/${item.id}/edit`}
                        className="text-[#8A4B23]"
                      >
                        <Pencil size={17} />
                      </Link>

                      <button
                        type="button"
                        title="Supprimer"
                        onClick={() => remove(item.id)}
                        className="text-[#8A4B23]"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Blogs