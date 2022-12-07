import { signIn, signOut, useSession } from "next-auth/client";
import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SigninButton() {
  const [session] = useSession();

  console.log(session);

  return session ? (
    <button
      type="button"
      className={styles.signinButton}
      onClick={() => signOut()}
    >
      <picture>
        <img src="imagens/logado.png" alt="Foto do  usuário" />
      </picture>
      Olá Marcio
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signinButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#FFB800" />
      Entrar com gitHub
    </button>
  );
}
