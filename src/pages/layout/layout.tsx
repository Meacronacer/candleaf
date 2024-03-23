import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const Layout =({children} : any) =>{
    return(
        <>
        <Navbar/>
            <>{children}</>
        <Footer/>
        </>
    )
}

export default Layout;