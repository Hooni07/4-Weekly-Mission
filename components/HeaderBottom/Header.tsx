import Link from "next/link";
import logoImg from "@/public/image/linkbrary.svg";
import styles from "./Header.module.css";
import Image from "next/image";

interface User {
  profileImageSource: string;
  email: string;
}

interface userProps {
  user?: User | null;
}

export default function Header({ user }: userProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image src={logoImg} width={135} height={25} alt="Linkbrary" />
        </Link>
        <button className={styles.btnGroup}>
          {user ? (
            <div className={styles.profileGroup}>
              <Image
                src={user.profileImageSource}
                alt="프로필 사진"
                className={styles.profile}
                width={25}
                height={25}
              />
              <span className={styles.email}>{user.email}</span>
            </div>
          ) : (
            <Link className={styles.signin} href="/signin.html">
              추가하기
            </Link>
          )}
        </button>
      </div>
    </header>
  );
}
