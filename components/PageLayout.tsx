import Head from "next/head"
import Header from "./Header"
import styles from "../styles/Home.module.css"

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Free file converter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  )
}
