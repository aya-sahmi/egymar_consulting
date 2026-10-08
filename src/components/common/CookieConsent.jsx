import { useState } from 'react'
import { Link } from 'react-router-dom'

const CONSENT_STORAGE_KEY = 'egymar-cookie-consent'

const readConsent = () => {
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!stored) return null
    const consent = JSON.parse(stored)
    if (typeof consent.analytics !== 'boolean' || typeof consent.preferences !== 'boolean') return null
    return { necessary: true, analytics: consent.analytics, preferences: consent.preferences }
  } catch {
    return null
  }
}

const CookieConsent = () => {
  const [consent, setConsent] = useState(readConsent)
  const [preferencesOpen, setPreferencesOpen] = useState(false)
  const [analytics, setAnalytics] = useState(() => readConsent()?.analytics ?? false)
  const [preferences, setPreferences] = useState(() => readConsent()?.preferences ?? false)

  const openPreferences = () => {
    setAnalytics(consent?.analytics ?? false)
    setPreferences(consent?.preferences ?? false)
    setPreferencesOpen(true)
  }

  const saveConsent = (selection) => {
    const nextConsent = { necessary: true, analytics: selection.analytics, preferences: selection.preferences }
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(nextConsent))
    } catch {
      // Consent controls remain usable when browser storage is unavailable.
    }
    setConsent(nextConsent)
    setPreferencesOpen(false)
    window.dispatchEvent(new CustomEvent('egymar:cookie-consent-change', { detail: nextConsent }))
  }

  const resetConsent = () => {
    try {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY)
    } catch {
      // The banner remains available even when browser storage is unavailable.
    }
    setConsent(null)
    setAnalytics(false)
    setPreferences(false)
    setPreferencesOpen(false)
  }

  const isVisible = !consent || preferencesOpen

  return (
    <>
      {consent && !preferencesOpen && (
        <button type="button" onClick={openPreferences} className="text-left transition hover:text-white">
          Gérer mes cookies
        </button>
      )}
      {isVisible && (
        <section aria-label="Gestion des cookies" className="fixed inset-x-0 bottom-0 z-60 border-t border-[#8A4B23]/20 bg-[#FAF7F2] px-4 py-5 text-[#1F2937] shadow-[0_-12px_45px_-20px_rgba(31,41,55,0.45)] sm:px-6">
          <div className="mx-auto max-w-5xl">
            {preferencesOpen ? (
              <div aria-labelledby="cookie-preferences-title">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 id="cookie-preferences-title" className="text-lg font-bold">Personnaliser les cookies</h2>
                    <p className="mt-1 text-sm leading-6 text-[#1F2937]/75">Nous utilisons des cookies pour assurer le bon fonctionnement du site et, avec votre accord, pour mesurer son audience.</p>
                  </div>
                  <Link to="/politique-confidentialite" className="text-sm font-semibold text-[#8A4B23] underline underline-offset-4">En savoir plus</Link>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-md border border-[#8A4B23]/15 bg-white px-4 py-3"><p className="font-semibold">Cookies nécessaires</p><p className="mt-1 text-sm text-[#1F2937]/65">Toujours actifs</p></div>
                  <label className="flex cursor-pointer items-center justify-between gap-3 rounded-md border border-[#8A4B23]/15 bg-white px-4 py-3">
                    <span><span className="block font-semibold">Cookies statistiques</span><span className="text-sm text-[#1F2937]/65">Mesure d'audience</span></span>
                    <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} className="h-5 w-5 accent-[#8A4B23]" />
                  </label>
                  <label className="flex cursor-pointer items-center justify-between gap-3 rounded-md border border-[#8A4B23]/15 bg-white px-4 py-3">
                    <span><span className="block font-semibold">Cookies de préférence</span><span className="text-sm text-[#1F2937]/65">Préférences facultatives</span></span>
                    <input type="checkbox" checked={preferences} onChange={(event) => setPreferences(event.target.checked)} className="h-5 w-5 accent-[#8A4B23]" />
                  </label>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
                  {consent && <button type="button" onClick={resetConsent} className="mr-auto text-sm text-[#1F2937]/70 underline underline-offset-4">Réinitialiser le consentement</button>}
                  <button type="button" onClick={() => setPreferencesOpen(false)} className="rounded-full border border-[#8A4B23]/30 px-5 py-2.5 text-sm font-semibold text-[#8A4B23]">Annuler</button>
                  <button type="button" onClick={() => saveConsent({ analytics, preferences })} className="rounded-full bg-[#8A4B23] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6D3918]">Enregistrer mes choix</button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-lg font-bold">Nous utilisons des cookies</h2>
                  <p className="mt-1 text-sm leading-6 text-[#1F2937]/75">
                    Nous utilisons des cookies pour assurer le bon fonctionnement du site et, avec votre accord, pour mesurer son audience. Vous pouvez accepter, refuser ou personnaliser vos choix à tout moment.{' '}
                    <Link to="/politique-confidentialite" className="font-semibold text-[#8A4B23] underline underline-offset-4">En savoir plus</Link>
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <button type="button" onClick={() => saveConsent({ analytics: true, preferences: true })} className="rounded-full bg-[#8A4B23] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6D3918]">Accepter</button>
                  <button type="button" onClick={() => saveConsent({ analytics: false, preferences: false })} className="rounded-full border border-[#8A4B23]/35 bg-white px-4 py-2.5 text-sm font-semibold text-[#8A4B23] transition hover:bg-[#8A4B23]/5">Refuser</button>
                  <button type="button" onClick={openPreferences} className="rounded-full border border-[#1F2937]/20 px-4 py-2.5 text-sm font-semibold text-[#1F2937] transition hover:bg-black/5">Personnaliser</button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}

export default CookieConsent