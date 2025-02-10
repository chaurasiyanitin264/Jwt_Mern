import TopMenu from "./component/TopMenu";
import Footer from "./component/Footer";
import {Outlet} from "react-router-dom"
const Layout=()=>{
    return(
        <>
       <TopMenu/>
       <Outlet/>
       <Footer/>
        </>
    )
}
export default Layout;