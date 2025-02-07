import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "../components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A simple Next.js application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <Nav />

        <main className={styles.main}>
          <h1>Welcome to my website</h1>
          <p>This a simple react with assignment 1.</p>

          <Image 
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <ol>
            <li>Get started by editing <code>pages/index.js</code>.</li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className={styles.ctas}>
            <a 
              className={styles.primary} 
              href="https://vercel.com/new"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image 
                className={styles.logo} 
                src="/vercel.svg" 
                alt="Vercel logomark" 
                width={20} 
                height={20} 
              />
              Deploy now
            </a>

            <a 
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a 
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/file.svg" alt="File icon" width={16} height={16} />
            Learn
          </a>

          <a 
            href="https://vercel.com/templates?framework=next.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/window.svg" alt="Window icon" width={16} height={16} />
            Examples
          </a>

          <a 
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
