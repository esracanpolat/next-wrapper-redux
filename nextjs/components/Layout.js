import Footer from "./Footer";
import Header from "./Header";
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
    const [mobileScreen, setMobileScreen] = useState(false)
    const handleResize = () => {
        if (window.innerWidth <= 1053) {
            setMobileScreen(true)
        } else {
            setMobileScreen(false)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, []);
    console.log(children);
    return (<>
        <div className={styles.container}>
            <Header mobileScreen={mobileScreen} />
            {children}
            {children.type.name != "Home" && <Footer />}
        </div>
    </>
    );
}

export default Layout;
