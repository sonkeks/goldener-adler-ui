import './Layout.css'
import {Outlet} from "react-router";
import {Header} from "@/components/Header.tsx";
import {Footer} from "@/components/Footer.tsx";

function Layout() {
  return (
    <div className="flex flex-col h-dvh">
      <div id="header" className="sticky top-0 bg-background">
        <Header />
      </div>
      <div id="content" className="flex-1 w-full">
        <Outlet />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
