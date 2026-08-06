import { Outlet } from "react-router";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function Layout() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}