import Link from "next/link";
import logoImg from "@/public/image/linkbrary.svg";
import Container from "@/components/Container";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link href="/">
          <Image src={logoImg} width={135} height={25} alt="Linkbrary" />
        </Link>
      </Container>
    </header>
  );
}
