import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { isSupabaseConfigured, supabase } from '../../lib/supabase'

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const onSubmit = async ({ email, password }) => {
    setError('')
    if (!isSupabaseConfigured) { setError('Configurez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY pour activer l’administration.'); return }
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
    if (authError) { setError('Email ou mot de passe incorrect.'); return }
    navigate(location.state?.from || '/admin/dashboard', { replace: true })
  }
  return <main className="flex min-h-screen items-center justify-center bg-[#FAF7F2] px-6 py-12"><div className="w-full max-w-md rounded-[2rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.3)]"><a href="/" className="text-sm font-bold uppercase tracking-[0.3em] text-[#8A4B23]">EGYMAR Consulting</a><h1 className="mt-8 text-3xl font-semibold">Connexion administrateur</h1><p className="mt-3 text-sm leading-7 text-[#1F2937]/65">Gérez vos articles et formations depuis votre espace sécurisé.</p><form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5"><label className="block text-sm font-semibold">Email<input type="email" {...register('email', { required: 'Email requis' })} className="mt-2 w-full rounded-xl border border-[#8A4B23]/15 bg-[#FAF7F2] px-4 py-3 font-normal outline-none focus:border-[#8A4B23]" />{errors.email && <span className="mt-1 block text-xs text-[#8A4B23]">{errors.email.message}</span>}</label><label className="block text-sm font-semibold">Mot de passe<input type="password" {...register('password', { required: 'Mot de passe requis' })} className="mt-2 w-full rounded-xl border border-[#8A4B23]/15 bg-[#FAF7F2] px-4 py-3 font-normal outline-none focus:border-[#8A4B23]" />{errors.password && <span className="mt-1 block text-xs text-[#8A4B23]">{errors.password.message}</span>}</label>{error && <p className="rounded-xl bg-[#8A4B23]/10 p-3 text-sm text-[#8A4B23]">{error}</p>}<button disabled={isSubmitting} className="w-full rounded-xl bg-[#8A4B23] px-5 py-3 font-semibold text-white transition hover:bg-[#6D3918] disabled:opacity-60">{isSubmitting ? 'Connexion...' : 'Se connecter'}</button></form></div></main>
}
export default Login
