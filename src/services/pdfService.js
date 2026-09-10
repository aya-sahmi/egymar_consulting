import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

export async function downloadBlogPdf(blog, element) {
  const clone = element.cloneNode(true)

  const waitForImages = async (container) => {
    const images = [...container.querySelectorAll('img')]
    await Promise.all(images.map((image) => {
      if (image.complete) return Promise.resolve()
      return new Promise((resolve) => {
        image.onload = resolve
        image.onerror = resolve
      })
    }))
  }

  try {
    clone.style.position = 'fixed'
    clone.style.left = '-100000px'
    clone.style.top = '0'
    clone.style.width = `${element.offsetWidth}px`
    clone.style.minHeight = `${element.offsetHeight}px`
    clone.style.display = 'block'
    clone.style.visibility = 'visible'
    clone.style.opacity = '1'
    clone.style.backgroundColor = '#ffffff'
    clone.style.color = '#1F2937'
    clone.style.borderColor = 'rgba(138, 75, 35, 0.1)'
    clone.style.boxShadow = 'none'
    clone.style.textDecorationColor = '#8A4B23'
    document.body.appendChild(clone)

    const safeElements = [clone, ...clone.querySelectorAll('*')]
    safeElements.forEach((node) => {
      node.style.color = '#1F2937'
      node.style.backgroundColor = 'transparent'
      node.style.borderColor = 'rgba(138, 75, 35, 0.1)'
      node.style.boxShadow = 'none'
      node.style.textDecorationColor = '#8A4B23'
    })

    clone.style.backgroundColor = '#ffffff'
    clone.style.color = '#1F2937'

    clone.querySelectorAll('h1, h2, h3, h4').forEach((heading) => {
      heading.style.color = '#1F2937'
      heading.style.backgroundColor = 'transparent'
      heading.style.marginTop = '16px'
      heading.style.marginBottom = '8px'
      heading.style.pageBreakAfter = 'avoid'
    })

    clone.querySelectorAll('p').forEach((paragraph) => {
      paragraph.style.color = '#1F2937'
      paragraph.style.backgroundColor = 'transparent'
      paragraph.style.lineHeight = '1.7'
      paragraph.style.marginTop = '0'
      paragraph.style.marginBottom = '14px'
    })

    clone.querySelectorAll('ul, ol').forEach((list) => {
      list.style.color = '#1F2937'
      list.style.backgroundColor = 'transparent'
      list.style.paddingLeft = '24px'
      list.style.marginTop = '8px'
      list.style.marginBottom = '14px'
    })

    clone.querySelectorAll('li').forEach((item) => {
      item.style.color = '#1F2937'
      item.style.backgroundColor = 'transparent'
      item.style.marginBottom = '5px'
    })

    clone.querySelectorAll('a').forEach((link) => {
      link.style.color = '#8A4B23'
      link.style.backgroundColor = 'transparent'
      link.style.textDecorationColor = '#8A4B23'
    })

    clone.querySelectorAll('strong, em').forEach((inline) => {
      inline.style.color = '#1F2937'
      inline.style.backgroundColor = 'transparent'
    })

    clone.querySelectorAll('img').forEach((image) => {
      image.style.maxWidth = '100%'
      image.style.height = 'auto'
      image.style.backgroundColor = '#ffffff'
      image.style.borderColor = 'rgba(138, 75, 35, 0.1)'
      image.style.boxShadow = 'none'
    })

    await waitForImages(clone)

    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false
    })
    const image = canvas.toDataURL('image/jpeg', 0.95)
    const pdf = new jsPDF('p', 'mm', 'a4')
    const width = 190
    const height = (canvas.height * width) / canvas.width
    const pageHeight = 277
    const pageCount = Math.ceil(height / pageHeight)

    for (let page = 0; page < pageCount; page += 1) {
      if (page > 0) pdf.addPage()
      pdf.addImage(image, 'JPEG', 10, 10 - page * pageHeight, width, height)
    }

    pdf.save(`${blog.slug || 'article-egymar'}.pdf`)
  } catch (error) {
    console.error('Erreur génération PDF blog:', error)
    throw error
  } finally {
    clone.remove()
  }
}

export function downloadFormationPdf(formation) {
  const pdf = new jsPDF('p', 'mm', 'a4')
  const margin = 18
  let y = 24
  const write = (label, value, size = 11) => {
    pdf.setFontSize(size)
    pdf.setTextColor('#1F2937')
    const lines = pdf.splitTextToSize(`${label}${value || 'Non précisé'}`, 174)
    pdf.text(lines, margin, y)
    y += lines.length * (size === 16 ? 8 : 6) + 5
  }
  pdf.setTextColor('#8A4B23')
  pdf.setFontSize(13)
  pdf.text('EGYMAR CONSULTING', margin, y)
  y += 16
  pdf.setFontSize(22)
  pdf.setTextColor('#1F2937')
  pdf.text('FICHE FORMATION', margin, y)
  y += 14
  write('Code formation : ', formation.code, 11)
  write('Titre : ', formation.title, 16)
  write('Catégorie : ', formation.category)
  write('Public : ', formation.audience)
  write('Durée : ', formation.duration)
  write('Objectif : ', formation.objective)
  write('Description : ', formation.description)
  write('Format : ', formation.format)
  y += 8
  pdf.setDrawColor('#8A4B23')
  pdf.line(margin, y, 192, y)
  y += 10
  write('Contact : ', '+212 661 94 60 77 · +212 666 82 00 44')
  write('Email : ', 'Ka.egymarconsulting@gmail.com')
  write('Adresse : ', '39 Boulevard Abderrahim Bouabid, Quartier El Wafa, Agadir, Maroc')
  pdf.save(`${formation.slug || 'formation-egymar'}.pdf`)
}
