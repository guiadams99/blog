import Head from 'next/head';
import styles from '../styles/home.module.scss';
import plataforma from '/public/imagens/ellipse.png';
import Image from 'next/image';

export default function Home() {
  return (
   <>
    <Head>
      <title>SimpleWay</title>
    </Head>
    <main className={styles.container}>
      <div className={styles.containerHeader}>
        <section className={styles.ctaText}>
        <h1>
          Plataforma de{' '}
          <span className={styles.textoDestacado}>Governança de<br/>Privacidade</span> &{' '}
        <span className={styles.textoDestacado}>Proteção de Dados.</span>
        </h1>
        <span>
            Automatiza e otimize seu Programa de Governança<br/>e Privacidade com a plataforma de melhor{' '}
            <span className={styles.subtextoDestacado}>relação<br/> custo x benefício do mercado brasileiro.</span>{' '}
        </span>
          <br/>
          <a>
            <button>
              Solicite um TRIAL
            </button>
          </a>
        </section>
        <Image src={plataforma} alt="plataforma" />
      </div>
      <div className={styles.conteudo2}>
        <section>
        <div className={styles.sectionContent}>
          <h2>A Plataforma</h2>
          <span>O Podium SimpleWay é uma solução acessível para garantir a conformidade com a LGPD<br/>
e simplificar a gestão de proteção e privacidade de dados.</span>
        </div>
        </section>

      </div>

          <div className={styles.iconesContainer}>
          <div className={styles.icone}>
            <Image src="/icone1.png" alt="Ícone 1" width={50} height={50} />
            <h3>Auxílio na conformidade<br/>
com a LGPD</h3>
          </div>
          <div className={styles.icone}>
            <Image src="/icone2.png" alt="Ícone 2" width={50} height={50} />
            <h3>Mapeamento de<br/>
dados pessoais</h3>
          </div>
          <div className={styles.icone}>
            <Image src="/icone3.png" alt="Ícone 3" width={50} height={50} />
            <h3>Gerenciamento<br/>
das ações</h3>
          </div>
        </div>

      </main>
      </>
      );
      }