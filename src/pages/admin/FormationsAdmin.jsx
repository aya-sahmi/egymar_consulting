import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import {
  deleteContent,
  getAdminFormations,
} from '../../services/contentService'

const FormationsAdmin = () => {
  const [items, setItems] = useState(null)
  const [error, setError] = useState('')

  const load = async () => {
    try {
      setError('')

      const data = await getAdminFormations()

      setItems(data)
    } catch (err) {
      console.error('Erreur lors du chargement des formations :', err)

      setError('Impossible de charger les formations.')
      setItems([])
    }
  }

  useEffect(() => {
    let active = true
    const initialLoad = async () => {
      try {
        const data = await getAdminFormations()
        if (active) setItems(data)
      } catch (err) {
        console.error('Erreur lors du chargement des formations :', err)
        if (active) { setError('Impossible de charger les formations.'); setItems([]) }
      }
    }
    initialLoad()
    return () => { active = false }
  }, [])

  const remove = async (id) => {
    if (!window.confirm('Supprimer cette formation ?')) return

    try {
      await deleteContent('formations', id)

      await load()
    } catch (err) {
      console.error('Erreur lors de la suppression :', err)

      setError('Impossible de supprimer cette formation.')
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
            Formations
          </h1>
        </div>

        <Link
          to="/admin/formations/new"
          className="inline-flex items-center gap-2 rounded-xl bg-[#8A4B23] px-4 py-3 text-sm font-semibold text-white"
        >
          <Plus size={18} />
          Nouvelle formation
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

      <div className="mt-8 overflow-x-auto rounded-2xl border border-[#8A4B23]/10 bg-white">
        <table className="w-full min-w-[650px] text-left text-sm">
          <thead className="border-b border-[#8A4B23]/10 bg-[#FAF7F2] text-[#1F2937]/60">
            <tr>
              <th className="px-5 py-4">Titre</th>
              <th>Code</th>
              <th>Statut</th>
              <th>Durée</th>
              <th className="px-5">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items?.map((item) => (
              <tr
                key={item.id}
                className="border-b border-[#8A4B23]/10 last:border-0"
              >
                <td className="px-5 py-4 font-semibold">
                  {item.title}
                </td>

                <td>
                  {item.code || '-'}
                </td>

                <td>
                  {item.status}
                </td>

                <td>
                  {item.duration}
                </td>

                <td className="px-5">
                  <div className="flex gap-3">
                    <Link
                      to={`/admin/formations/${item.id}/edit`}
                      className="text-[#8A4B23]"
                    >
                      <Pencil size={17} />
                    </Link>

                    <button
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
    </section>
  )
}

export default FormationsAdmin
