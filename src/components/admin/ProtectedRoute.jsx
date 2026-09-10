import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { isSupabaseConfigured, supabase } from '../../lib/supabase'

const ProtectedRoute = () => {
  const location = useLocation()
  const [session, setSession] = useState(isSupabaseConfigured ? undefined : null)

  useEffect(() => {
    if (!isSupabaseConfigured) {
      return undefined
    }
    let mounted = true
    supabase.auth.getSession().then(({ data }) => mounted && setSession(data.session))
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => setSession(nextSession))
    return () => { mounted = false; listener.subscription.unsubscribe() }
  }, [])

  if (session === undefined) return <div className="flex min-h-screen items-center justify-center bg-[#FAF7F2] text-[#8A4B23]">Chargement...</div>
  if (!session) return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
  return <Outlet />
}

export default ProtectedRoute
