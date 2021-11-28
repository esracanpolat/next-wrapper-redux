import React from 'react';
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div class="justify-between flex items-center p-5 " >
                <div className="pl-4 flex justify-center">
                    <img style={{ width: 120, height: 30 }} src="./img/LogoFooter.png" />
                </div>
                <div className="inline-flex  justify-center" >
                    <p style={{ fontSize: 14, color: "#3D3C3C", fonntWeight: "bold" }}> HAKKIMIZDA</p>
                    <p style={{ fontSize: 14, color: "#3D3C3C", fonntWeight: "bold", marginLeft: 50 }}> ÇALIŞMALARIMIZ</p>
                    <p style={{ fontSize: 14, color: "#3D3C3C", fonntWeight: "bold", marginLeft: 50 }}> <Link href="/FormPage"> YOLCULUĞA BAŞLA</Link></p>
                    <p style={{ fontSize: 14, color: "#3D3C3C", fonntWeight: "bold", marginLeft: 50 }}> İLETİŞİM</p>
                    <img style={{ marginTop: 20, color: "white" }} src="./img/Facebook - Negative.svg" />

                </div>
            </div>
            <div className="flex justify-between p-5" >
                <div className="inline-flex pl-4" style={{ zIndex: 5 }}>
                    <img style={{ color: "white", width: 120 }} src="./img/SocialIcons.png" />
                </div>
                <div className="pr-4">
                    <p style={{ color: "white", fontSize: 15 }}>copyright © ferhancihaner.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
