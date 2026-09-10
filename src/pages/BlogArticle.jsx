import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import DOMPurify from 'dompurify';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import { getBlogBySlug } from '../services/contentService';
import { richContentToHtml } from '../services/contentService';
import { downloadBlogPdf } from '../services/pdfService';

const BlogArticle = () => {
    const { slug } = useParams();

    const [blog, setBlog] = useState(null);
    const [error, setError] = useState('');

    const contentRef = useRef(null);

    useEffect(() => {
        getBlogBySlug(slug)
            .then(setBlog)
            .catch(() => {
                setError('Impossible de charger cet article.');
            });
    }, [slug]);

    const download = () => {
        if (blog) {
            downloadBlogPdf(blog, contentRef.current);
        }
    };

    const htmlContent = blog && richContentToHtml(blog.content);

    return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937]">

            <Navbar />

            <main className="px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
                <div className="mx-auto max-w-4xl">

                    {/* Chargement */}
                    {!blog && !error && (
                        <p className="text-[#8A4B23]">
                            Chargement...
                        </p>
                    )}

                    {/* Erreur */}
                    {error && (
                        <p className="rounded-2xl bg-[#8A4B23]/10 p-5 text-[#8A4B23]">
                            {error}
                        </p>
                    )}

                    {/* Article */}
                    {blog && (
                        <>
                            {/* Retour au blog */}
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#8A4B23]"
                            >
                                <ArrowLeft size={16} />
                                Retour au blog
                            </Link>

                            <article
                                ref={contentRef}
                                className="mt-8 rounded-[2rem] border border-[#8A4B23]/10 bg-white p-8 shadow-[0_30px_100px_-40px_rgba(31,41,55,0.3)] lg:p-14"
                            >
                                {/* Image de couverture */}
                                {blog.cover_image_url && (
                                    <img
                                        src={blog.cover_image_url}
                                        alt=""
                                        className="mb-10 max-h-[28rem] w-full rounded-2xl object-cover"
                                        crossOrigin="anonymous"
                                    />
                                )}

                                {/* Catégorie */}
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A4B23]">
                                    {blog.category}
                                </p>

                                {/* Titre */}
                                <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
                                    {blog.title}
                                </h1>

                                {/* Auteur et date */}
                                <p className="mt-5 text-sm text-[#1F2937]/60">
                                    {blog.author} · {blog.date}
                                </p>

                                {/* Contenu */}
                                <div
                                    className="prose mt-10 max-w-none text-base leading-8 text-[#1F2937]/75"
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(
                                            htmlContent || ''
                                        ),
                                    }}
                                />
                            </article>

                            {/* Actions */}
                            <div className="mt-6 flex flex-wrap gap-3">

                                {/* Aperçu PDF */}
                                <button
                                    onClick={() => window.print()}
                                    className="inline-flex items-center gap-2 rounded-xl border border-[#8A4B23]/20 bg-white px-4 py-3 text-sm font-semibold text-[#8A4B23]"
                                >
                                    <FileText size={17} />
                                    Aperçu PDF
                                </button>

                                {/* Télécharger PDF */}
                                <button
                                    onClick={download}
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#8A4B23] px-4 py-3 text-sm font-semibold text-white"
                                >
                                    <Download size={17} />
                                    Télécharger le PDF
                                </button>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center rounded-xl border border-[#8A4B23]/20 bg-white px-4 py-3 text-sm font-semibold text-[#8A4B23]"
                                >
                                    Nous contacter
                                </Link>

                            </div>
                        </>
                    )}

                </div>
            </main>

            <Footer />

        </div>
    );
};

export default BlogArticle;
