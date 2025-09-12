import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n';
import Layout from './components/layouts/Layout.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import {Home} from "@/pages/Home.tsx";
import {Login} from "@/pages/Login.tsx";
import {Dashboard} from "@/pages/dashboard/Dashboard.tsx";
import {DashboardLayout} from "@/components/layouts/DashboardLayout.tsx";
import {Rooms} from "@/pages/Rooms.tsx";
import {Contact} from "@/pages/Contact.tsx";
import {Torgelow} from "@/pages/Torgelow.tsx";
import {Booking} from "@/pages/Booking.tsx";
import ScrollToTop from "@/ScrollToTop.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="contact" element={<Contact />} />
          <Route path="torgelow" element={<Torgelow />} />
          <Route path="booking" element={<Booking />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        
        {/* Protect using wrapping Auth Guard Route */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
