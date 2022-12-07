import styles from "../styles/styles.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas tarefas.</title>
      </Head>
      <main className={styles.contentContainer}>
        <picture>
          <img src="/imagens/board-user.svg" alt="Ferramenta board" />
        </picture>
        <section className={styles.callToAction}>
          <h1>
            Uma ferramenta para seu dia a dia. Escreva, planeje e organize-se...
            <p>
              <span>100% Gratuita</span> e online.
            </p>
          </h1>
        </section>
        <div className={styles.donaters}>
          <picture>
            <img src="imagens/logado.png" alt="Foto dos apoiadores" />
          </picture>
        </div>
      </main>
    </>
  );
}
