import { Outlet } from "react-router"
import Hero from "~/component/Hero";

const HomeLayout = () => {
  return (
    <>
    <Hero name="Tanjim"/>
    <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet/>
    </section>
    </>
  )
}

export default HomeLayout