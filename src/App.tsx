import type {FunctionComponent} from "react";
import ScrollToTop from "@/ScrollToTop.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "@/components/layouts/Layout.tsx";
import {Home} from "@/pages/Home.tsx";
import {Rooms} from "@/pages/Rooms.tsx";
import {Contact} from "@/pages/Contact.tsx";
import {Torgelow} from "@/pages/Torgelow.tsx";
import {Booking} from "@/pages/Booking.tsx";
import {Login} from "@/pages/Login.tsx";
import {DashboardLayout} from "@/components/layouts/DashboardLayout.tsx";
import {Dashboard} from "@/pages/dashboard/Dashboard.tsx";

export const App: FunctionComponent = () => {
  return (
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
  )
}
