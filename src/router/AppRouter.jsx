import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Blog from '../pages/Blog'
import Formations from '../pages/Formations'
import FormationArticle from '../pages/FormationArticle'
import Contact from '../pages/Contact'
import BlogArticle from '../pages/BlogArticle'
import Login from '../pages/admin/Login'
import Dashboard from '../pages/admin/Dashboard'
import Blogs from '../pages/admin/Blogs'
import BlogEditor from '../pages/admin/BlogEditor'
import FormationsAdmin from '../pages/admin/FormationsAdmin'
import FormationEditor from '../pages/admin/FormationEditor'
import ProtectedRoute from '../components/admin/ProtectedRoute'
import AdminLayout from '../layouts/AdminLayout'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/formations/:slug" element={<FormationArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/blogs" element={<Blogs />} />
            <Route path="/admin/blogs/new" element={<BlogEditor />} />
            <Route path="/admin/blogs/:id/edit" element={<BlogEditor />} />
            <Route path="/admin/formations" element={<FormationsAdmin />} />
            <Route path="/admin/formations/new" element={<FormationEditor />} />
            <Route path="/admin/formations/:id/edit" element={<FormationEditor />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
