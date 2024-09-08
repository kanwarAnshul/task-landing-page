import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from '../Pages/Home/index.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { AboutSection } from '../Components/About/index.jsx'
import Services from '../Components/Services/index.jsx'
import { MissionSection } from '../Components/Mission/index.jsx'
import { VisionSection } from '../Components/Vision/index.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route path="about" element={<AboutSection />} />
      <Route path="services" element={<Services />} />
      <Route path="mission" element={<MissionSection />} />
      <Route path="vision" element={<VisionSection />} />
    </Route>,
  ),
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
