import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { legalDocuments } from '../data/legalContent'

const Highlight = ({ children }) => <mark className="rounded-sm bg-[#FFF0A8] px-1 text-[#1F2937]">{children}</mark>

const InlineParts = ({ parts }) => parts.map((part, index) => (
  part.type === 'highlight' ? <Highlight key={index}>{part.text}</Highlight> : <span key={index}>{part.text}</span>
))

const DocumentBlock = ({ block }) => {
  if (block.type === 'table') {
    return (
      <div className="my-5 overflow-x-auto rounded-md border border-[#8A4B23]/15">
        <table className="w-full min-w-130 border-collapse text-left text-sm">
          <thead className="bg-[#8A4B23]/10"><tr>{block.headers.map((header) => <th key={header} scope="col" className="border-b border-[#8A4B23]/15 px-4 py-3 font-bold">{header}</th>)}</tr></thead>
          <tbody>{block.rows.map((row, index) => <tr key={index} className="odd:bg-white/80 even:bg-[#8A4B23]/[0.035]">{row.map((cell, cellIndex) => <td key={cellIndex} className="border-b border-[#8A4B23]/10 px-4 py-3 align-top last:border-b-0">{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    )
  }

  if (block.type === 'list') {
    return <ul className="my-4 list-disc space-y-2 pl-6 marker:text-[#8A4B23]">{block.items.map((item, index) => <li key={index}>{typeof item === 'string' ? item : <InlineParts parts={item.parts} />}</li>)}</ul>
  }

  if (block.type === 'highlight') return <p className="my-3 leading-7"><Highlight>{block.text}</Highlight></p>
  if (block.type === 'parts') return <p className="my-3 whitespace-pre-line leading-7"><InlineParts parts={block.parts} /></p>
  return <p className="my-3 whitespace-pre-line leading-7">{block.text}</p>
}

const AccordionQuestion = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  const answerId = `faq-answer-${index}`
  const placeholder = question.includes('[8 à 20]') ? '[8 à 20]' : question.includes('[chèque / paiement en ligne]') ? '[chèque / paiement en ligne]' : null
  const questionParts = placeholder ? question.split(placeholder) : null

  return (
    <div className="border-b border-[#8A4B23]/15 last:border-b-0">
      <h3>
        <button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between gap-5 py-5 text-left font-semibold text-[#1F2937] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A4B23]">
          <span>{questionParts ? <>{questionParts[0]}<Highlight>{placeholder}</Highlight>{questionParts[1]}</> : question}</span>
          <ChevronDown aria-hidden="true" size={19} className={`shrink-0 text-[#8A4B23] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && <motion.div id={answerId} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden"><p className="max-w-4xl pb-5 pr-8 text-sm leading-7 text-[#1F2937]/75">{answer}</p></motion.div>}
      </AnimatePresence>
    </div>
  )
}

const LegalContentPage = ({ documentKey }) => {
  const document = legalDocuments[documentKey]
  const [query, setQuery] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [documentKey])

  const filteredCategories = useMemo(() => {
    if (!document.categories) return []
    if (!query.trim()) return document.categories
    const normalizedQuery = query.trim().toLocaleLowerCase('fr')
    return document.categories.map((category) => ({
      ...category,
      questions: category.questions.filter(([question, answer]) => `${question} ${answer}`.toLocaleLowerCase('fr').includes(normalizedQuery)),
    })).filter((category) => category.questions.length)
  }, [document, query])

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937]">
      <Navbar />
      <main className="px-5 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-4xl">
          <header className="mb-10 border-b border-[#8A4B23]/20 pb-7">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8A4B23]">EGYMAR Consulting</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{document.title}</h1>
            {document.intro && <p className="mt-4 max-w-3xl text-base leading-7 text-[#1F2937]/75">{document.intro}</p>}
          </header>

          {documentKey === 'faq' ? (
            <>
              <label className="mb-10 flex max-w-xl items-center gap-3 rounded-md border border-[#8A4B23]/20 bg-white px-4 py-3 focus-within:border-[#8A4B23]">
                <Search aria-hidden="true" size={18} className="shrink-0 text-[#8A4B23]" />
                <span className="sr-only">Rechercher dans la FAQ</span>
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher dans les questions et réponses" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#1F2937]/45" />
              </label>
              <div className="space-y-9">
                {filteredCategories.map((category) => (
                  <section key={category.title} aria-label={category.title}>
                    <h2 className="mb-2 text-xl font-bold text-[#8A4B23]">{category.title}</h2>
                    <div className="border-t border-[#8A4B23]/15">
                      {category.questions.map(([question, answer]) => <AccordionQuestion key={question} index={question.slice(0, 2).trim()} question={question} answer={answer} />)}
                    </div>
                  </section>
                ))}
                {filteredCategories.length === 0 && <p className="py-8 text-sm text-[#1F2937]/70" role="status">Aucun résultat.</p>}
              </div>
            </>
          ) : (
            <article className="space-y-9 text-[15px] leading-7 text-[#1F2937]/85">
              {document.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-3 text-lg font-bold leading-7 text-[#1F2937]">{section.highlightedTitle ? <Highlight>{section.title}</Highlight> : section.title}</h2>
                  {section.blocks.map((block, index) => <DocumentBlock key={index} block={block} />)}
                </section>
              ))}
              {document.appendix?.map((section) => (
                <section key={section.title} className="border-t border-[#8A4B23]/20 pt-7">
                  <h2 className="mb-4 text-lg font-bold"><Highlight>{section.title}</Highlight></h2>
                  <div className="space-y-4">{section.lines.map((line, index) => <p key={index} className="leading-7">{line.title && <><Highlight>{line.title}</Highlight>{' '}</>}<Highlight>{line.text}</Highlight></p>)}</div>
                </section>
              ))}
              <p className="border-t border-[#8A4B23]/15 pt-5 text-sm text-[#1F2937]/60">{document.updated}</p>
              {documentKey === 'privacy' && <p className="text-sm"><Link to="/mentions-legales" className="font-semibold text-[#8A4B23] underline underline-offset-4">Mentions légales</Link></p>}
            </article>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LegalContentPage