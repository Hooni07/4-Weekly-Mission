import Link from "next/link";
import facebookImg from "@/public/image/facebook.svg";
import youtubeImg from "@/public/image/youtube.svg";
import instaImg from "@/public/image/instagram.svg";
import twitterImg from "@/public/image/twitter.svg";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footerContents}>
      <div className={styles.footerGroup}>
        <span className={styles.copyright}>©codeit - 2023</span>
        <ul className={styles.linkList}>
          <li>
            <Link href="/privacy" className={styles.linkItem}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/faq" className={styles.linkItem}>
              FAQ
            </Link>
          </li>
        </ul>
        <ul className={styles.snsList}>
          <li>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className={styles.snsItem}
              rel="noreferrer"
            >
              <Image
                src={facebookImg}
                alt="페이스북으로 이동"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/"
              target="_blank"
              className={styles.snsItem}
              rel="noreferrer"
            >
              <Image
                src={twitterImg}
                alt="트위터로 이동"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              className={styles.snsItem}
              rel="noreferrer"
            >
              <Image
                src={youtubeImg}
                alt="유튜브로 이동"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className={styles.snsItem}
              rel="noreferrer"
            >
              <Image
                src={instaImg}
                alt="인스타그램으로 이동"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
