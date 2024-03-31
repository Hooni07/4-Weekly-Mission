import Link from "next/link";
import logoImg from "@/public/image/linkbrary.svg";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logoImg} width={135} height={25} alt="Linkbrary" />
      </Link>
    </header>
  );
}
