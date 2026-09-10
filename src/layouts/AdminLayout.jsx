import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { LayoutDashboard, FileText, GraduationCap, LogOut } from 'lucide-react'
import { supabase } from '../lib/supabase'

const links = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/blogs', label: 'Blogs', icon: FileText },
  { to: '/admin/formations', label: 'Formations', icon: GraduationCap }
]

const AdminLayout = () => {
  const navigate = useNavigate()
  const logout = async () => { await supabase.auth.signOut(); navigate('/admin/login') }
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937] lg:flex">
      <aside className="border-b border-[#8A4B23]/10 bg-[#1F2937] p-5 text-white lg:min-h-screen lg:w-64 lg:border-b-0 lg:p-7">
        <a href="/" className="text-xl font-bold tracking-[0.12em]">EGYMAR</a>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">Administration</p>
        <nav className="mt-8 flex gap-2 overflow-x-auto lg:block lg:space-y-2">
          {links.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold whitespace-nowrap transition ${isActive ? 'bg-[#8A4B23] text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}><Icon size={18} />{label}</NavLink>)}
          <button onClick={logout} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"><LogOut size={18} />Déconnexion</button>
        </nav>
      </aside>
      <main className="flex-1 p-5 lg:p-10"><Outlet /></main>
    </div>
  )
}

export default AdminLayout
