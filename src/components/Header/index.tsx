import Link from "next/link";
import { SigninButton } from "../SigninButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <picture>
            <img src="/imagens/logo.svg" alt="Logo meu Board" />
          </picture>
        </Link>

        <nav>
          <Link href="/">Home</Link>

          <Link href="/board">Meu Board</Link>
        </nav>

        <SigninButton />
      </div>
    </header>
  );
}
