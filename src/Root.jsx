import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import './Root.css'

const Root = () => {
    return (
        <div className="mainfont">
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;