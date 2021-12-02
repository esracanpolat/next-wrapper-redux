import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { BiX } from "react-icons/bi";

const Header = (mobileScreen) => {
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);
    function openMenu() {
        if (menu === false) { setMenu(true) }
        else {
            setMenu(false)
        }
    }
    const router = useRouter();

    return (<>
        <div class="justify-between flex items-center p-5 md:px-24 lg:px-24" style={{ height: "15vh" }} >
            <div className="pl-4 flex   justify-center">
                <img style={{ width: 150, height: 50 }} src="./img/Logo.png" className="w-1/5" />
            </div>
            <div className={mobileScreen.mobileScreen === true ? "hidden bg-scroll" : "bg-scroll inline-flex  justify-center"} >
                <p style={{ fontSize: 14, color: "#3D3C3C", fonntWeight: "bold" }}> HAKKIMIZDA</p>
                <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                    <p style={{ fontSize: 14, color: "#3D3C3C", fonntWeight: "bold", marginLeft: 50 }}> ÇALIŞMALARIMIZ</p>
                    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} style={{ boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)", borderRadius: 12, position: 'absolute', top: 60, right: 350, width: 200 }}>
                        <div className={show == true ? "block px-4 py-2" : "hidden"} style={{ backgroundColor: "white" }}>
                            <p>Aktif Yaşam Koçluğu</p>
                            <hr />
                            <p>Sporcu beslenmesi</p>
                            <hr />
                            <p>Motivaton</p>
                            <hr />
                            <p><Link href="/Photos"> Yolculuklarımız</Link></p>
                        </div>
                    </div>
                </div>
                <p style={{ fontSize: 14, color: "#3D3C3C", fonntWeight: "bold", marginLeft: 50 }}> <Link href="/FormPage"> YOLCULUĞA BAŞLA</Link></p>
                <p style={{ fontSize: 14, color: "#3D3C3C", fonntWeight: "bold", marginLeft: 50 }}> İLETİŞİM</p>
            </div>
            <div className={mobileScreen.mobileScreen === false ? "hidden" : "inline-flex  justify-center"}>
                <img style={{ height: 40, width: 40 }} src="./img/menu.png" onClick={() => openMenu()} className="w-1/5" />
            </div>

        </div>
        {menu == true &&
            <div className="block " style={{ backgroundColor: "black", height: "100%", position: "fixed", bottom: 0, right: 0, left: 0, top: 0 }}>
                <div>
                    <a onClick={() => openMenu()}><BiX style={{ color: "white", fontSize: 40 }} /></a>
                </div>
                <div className="sm:pl-24 sm:pt-18 md:pt-32 md:pl-32 lg:pt-32 lg:pl-32">
                    <hr />
                    <p style={{ color: "white", padding: 20 }} onClick={() => setOpenMobile(!openMobile)}>HAKKIMIZDA</p>
                    <hr />
                    <div className={openMobile === true ? "block" : "hidden"}>
                        <p style={{ color: "white", padding: 10 }}>Yolcuğum</p>
                        <p style={{ color: "white", padding: 10 }}>Seminerlerim</p>
                        <p style={{ color: "white", padding: 10 }}>Yolculuklarımız</p>
                    </div>
                    <a style={{ color: "white", padding: 10 }} onClick={() => router.push("/Photos")}>FOTOGRAFLAR</a>
                    <hr />
                    <p style={{ color: "white", padding: 20 }}>ÇALIŞMALARIMIZ</p>
                    <hr />
                    <p style={{ color: "white", padding: 20 }}>YOLCULUĞA BAŞLA</p>
                    <hr />
                    <p style={{ color: "white", padding: 20 }}>İLETİŞİM</p>
                    <hr />
                </div>
                <div>

                </div>
            </div>}</>
    );
}

export default Header;
