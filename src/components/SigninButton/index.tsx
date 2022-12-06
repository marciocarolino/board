import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SigninButton() {
  const session = true;

  return session ? (
    <button type="button" className={styles.signinButton} onClick={() => {}}>
      <picture>
        <img src="imagens/logado.png" alt="Foto do  usuário" />
      </picture>
      Olá Marcio
      <FiX  color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signinButton} onClick={() => {}}>
      <FaGithub color="#FFB800" />
      Entrar com gitHub
    </button>
  );
}
