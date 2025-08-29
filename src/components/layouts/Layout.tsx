import {Outlet} from "react-router";
import {Header} from "@/components/Header.tsx";
import {Footer} from "@/components/Footer.tsx";

function Layout() {
  return (
    <>
      <Header />
    <div className="flex flex-col h-dvh">
      <div id="content" className="flex-1 w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default Layout
