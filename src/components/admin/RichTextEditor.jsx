import { useEffect, useRef } from 'react'

const commands = [
  ['bold', 'Gras'],
  ['italic', 'Italique'],
  ['formatBlock', 'Titre', 'h2'],
  ['insertUnorderedList', 'Liste'],
  ['formatBlock', 'Citation', 'blockquote']
]

const RichTextEditor = ({ value, onChange }) => {
  const editorRef = useRef(null)
  useEffect(() => { if (editorRef.current && editorRef.current.innerHTML !== value) editorRef.current.innerHTML = value || '' }, [value])
  const run = (command, argument) => { editorRef.current?.focus(); document.execCommand(command, false, argument); onChange(editorRef.current?.innerHTML || '') }
  return <div className="overflow-hidden rounded-xl border border-[#8A4B23]/15 bg-[#FAF7F2]"><div className="flex flex-wrap gap-2 border-b border-[#8A4B23]/10 bg-white p-3">{commands.map(([command, label, argument]) => <button key={label} type="button" onClick={() => run(command, argument)} className="rounded-lg border border-[#8A4B23]/15 px-3 py-1.5 text-xs font-semibold text-[#8A4B23] hover:bg-[#8A4B23]/10">{label}</button>)}<button type="button" onClick={() => { const url = window.prompt('URL du lien'); if (url) run('createLink', url) }} className="rounded-lg border border-[#8A4B23]/15 px-3 py-1.5 text-xs font-semibold text-[#8A4B23] hover:bg-[#8A4B23]/10">Lien</button></div><div ref={editorRef} contentEditable role="textbox" aria-multiline="true" onInput={(event) => onChange(event.currentTarget.innerHTML)} className="min-h-64 p-4 outline-none" /></div>
}
export default RichTextEditor
