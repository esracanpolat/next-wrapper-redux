import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ Component, pageProps }) {
  return (
    <div className="md:flex lg:flex sm:block" style={{ height: "80%" }}>
      <div style={{ width: "20%", display: 'flex', justifyContent: "center", alignItems: "center" }} >
        <div className="md:block  sm:inline ">
          <img style={{ marginTop: 20 }} src="./img/Facebook - Negative.svg" />
          <img style={{ marginTop: 20 }} src="./img/Instagram - Negative.png" />
          <img style={{ marginTop: 20 }} src="./img/Youtube - Negative.png" />
          <img style={{ marginTop: 20 }} src="./img/Twitter - Negative.svg" />
        </div>
      </div>
      <div className="md:flex lg:flex sm:block md:pr-4" style={{ boxShadow: " 0px 4px 24px rgba(0, 0, 0, 0.1)", height: "auto", borderRadius: 12, margin: 20 }}>
        <div style={{ width: "auto" }}>
          <img style={{ height: "100%", minWidth: "300px", borderRadius: 10 }} src="./img/Ferhan.png" />
        </div>
        <div className="row-span-2 sm:row-start-2 md:row-start-2" style={{ padding: 100 }}>
          <p>Merhaba, Dünyama Hoş Geldin</p>
          <p >Sporu çok seviyorum ve bir Triathletim! İnsanların da daha sağlıklı ve aktif bir yaşam biçimi benimsemeleri için elimden gelen her şeyi yapmaya hazırım.

            Sağlıklı ve daha iyi bir dünya için benim seçtiğim yol bu! Mutlu, huzurlu ve kendini seven bireyler dünyayı daha güzel bir yere çevirir. En büyük motivasyonum da bu amaç doğrultusunda sizinle birlikte hareket edebilmek. Web sitemi gezerken umarım istediklerini karşılarım!

            Benimle gel ve motive ol!</p>
        </div>
      </div>
      {/* <div style={{ position: "absolute", right: 50, bottom: 30 }}>
        <p>copyright © ferhancihaner.com</p>
      </div> */}
    </div>
  )
}
