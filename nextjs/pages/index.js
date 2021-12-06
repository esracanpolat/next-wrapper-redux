import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ Component, pageProps }) {
  return (
    <>
      <div className="lg:inline-flex md:inline-flex sm:block justify-center items-center" >
        <div className="md:flex lg:flex sm:block md:pr-4 sm:order-first md:order-last" style={{ boxShadow: " 0px 4px 24px rgba(0, 0, 0, 0.1)", height: "auto", borderRadius: 12, margin: 20 }}>
          <div style={{ width: "auto" }}>
            <img style={{ height: "100%", minWidth: "300px", borderRadius: 10 }} src="./img/Ferhan.png" />
          </div>
          <div className="row-span-2 sm:row-start-2 md:row-start-2 " style={{ padding: 100 }}>
            <p className={styles.header}>Merhaba, Dünyama Hoş Geldin</p>
            <p className={styles.content}>Herkese Selam</p>
            <p className={styles.name}>Ben Ferhan Cihaner,</p>
            <p className={styles.content} >Sporu çok seviyorum ve bir Triathletim! İnsanların da daha sağlıklı ve aktif bir yaşam biçimi benimsemeleri için elimden gelen her şeyi yapmaya hazırım. Sağlıklı ve daha iyi bir dünya için benim seçtiğim yol bu! Mutlu, huzurlu ve kendini seven bireyler dünyayı daha güzel bir yere çevirir. En büyük motivasyonum da bu amaç doğrultusunda sizinle birlikte hareket edebilmek. Web sitemi gezerken umarım istediklerini karşılarım! Benimle gel ve motive ol! </p>
          </div>
        </div>
        <div className="lg:order-first md:order-first sm:order-last md:w-1/5 lg:w-1/5 sm:w-auto  flex  sm:inline-flex justify-center items-center">
          <div className="md:inline-block	 lg:inline-block	sm:inline-flex justify-center items-center">
            <img style={{ marginTop: 20, marginLeft: 10 }} src="./img/Facebook - Negative.svg" />
            <img style={{ marginTop: 20, marginLeft: 10 }} src="./img/Instagram - Negative.png" />
            <img style={{ marginTop: 20, marginLeft: 10 }} src="./img/Youtube - Negative.png" />
            <img style={{ marginTop: 20, marginLeft: 10 }} src="./img/Twitter - Negative.svg" />
          </div>
        </div>
        <div>
        </div>
      </div>
      <div style={{ position: "relative", display: "flex", marginRight: 10, marginBottom: 30, justifyContent: "end" }}>
        <p>copyright © ferhancihaner.com</p>
      </div>
    </>
  )
}
