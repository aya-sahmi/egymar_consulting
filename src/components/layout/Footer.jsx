import Logo from '../common/Logo'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CookieConsent from '../common/CookieConsent'

const Footer = () => {
  return (
    <footer className="border-t border-[#8A4B23]/20 bg-gradient-to-br from-[#111111] via-[#1C1A18] to-[#7A5A36] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            EGYMAR Consulting accompagne les organisations dans l’audit, le conseil, la qualité et la formation avec un regard premium et pragmatique.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A4B23]">Liens</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li><a href="/about" className="transition hover:text-white">À propos</a></li>
            <li><a href="/services" className="transition hover:text-white">Services</a></li>
            <li><a href="/blog" className="transition hover:text-white">Blog</a></li>
            <li><a href="/contact" className="transition hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A4B23]">Coordonnées</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-3"><Phone size={16} className="text-[#8A4B23]" /> +212 661 94 60 77</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-[#8A4B23]" /> Ka.egymarconsulting@gmail.com</li>
            <li className="flex items-center gap-3"><MapPin size={16} className="text-[#8A4B23]" /> 39 Boulevard Abderrahim Bouabid, Agadir</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A4B23]">Réseaux</h3>
          <div className="mt-5 flex gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <a key={index} href="#" className="rounded-full border border-white/10 p-3 text-white/70 transition hover:border-[#8A4B23] hover:text-[#8A4B23]">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A4B23]">Informations</h3>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            <li><Link to="/mentions-legales" className="transition hover:text-white">Mentions légales</Link></li>
            <li><Link to="/politique-confidentialite" className="transition hover:text-white">Politique de confidentialité</Link></li>
            <li><Link to="/cgv" className="transition hover:text-white">Conditions Générales de Vente</Link></li>
            <li><Link to="/faq" className="transition hover:text-white">FAQ</Link></li>
            <li><CookieConsent /></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-white/50 lg:px-8">
        © 2026 EGYMAR Consulting SARL AU. Tous droits réservés.
      </div>
    </footer>
  )
}

export default Footer
