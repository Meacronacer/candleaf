import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const Layout =({children} : any) =>{
    return(
        <>
        <Navbar/>
            <main>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout;