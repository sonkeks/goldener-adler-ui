import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import {Home} from "@/pages/Home.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element />
          <Route path="contact" element />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
