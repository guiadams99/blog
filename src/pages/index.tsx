import Head from 'next/head';
import styles from '../styles/home.module.scss';
import plataforma from '/public/imagens/mulher.svg';
import security from '/public/imagens/ic_security.svg';
import dados from '/public/imagens/mask.svg';
import mao from '/public/imagens/bxs.svg';
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
        <p>
          <span>
            Automatiza e otimize seu Programa de Governança<br/>e Privacidade com a plataforma de melhor{' '}
            <span className={styles.subtextoDestacado}>relação<br/> custo x benefício do mercado brasileiro.</span>{' '}
        </span>
        </p>
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
          <p>
          <span>O Podium SimpleWay é uma solução acessível para garantir a conformidade com a LGPD<br/>
e simplificar a gestão de proteção e privacidade de dados.</span>
          </p>
        </div>
        </section>
      </div>
      <div className={styles.iconesContainer}>
          <div className={styles.icone}>
          <Image src={security} alt="plataforma" />
            <h3>Auxílio na conformidade<br/>com a LGPD</h3>
            <p>
                <span>
                Ferramentas para a sua<br/> empresa cumprir os<br/> requisitos da lei de<br/> 
                proteção de dados.
      
              </span>
            </p>
          </div>
          <div className={styles.icone}>
          <Image src={dados} alt="plataforma" />
            <h3>Mapeamento de<br/>dados pessoais</h3>
            <p>
                <span>
                Ajudamos a sua empresa a<br/> compreender como os dados<br/> são usados nas atividades<br/> do seu negócio.
              </span>
            </p>
          </div>
          <div className={styles.icone}>
          <Image src={mao} alt="plataforma" />
            <h3>Gerenciamento<br/>das ações</h3>
            <p>
                <span>
                Gerencie as ações de<br/> conformidade à LGPD<br/> mantendo as atividades<br/> em um único local.
              </span>
            </p>
          </div>
        </div>
        <section>
            <div className={`${styles.videoContainer}`}>
              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/xlptXikE7X0"
                title="Vídeo Incorporado"
                width="900" // Definindo a largura do vídeo
                height="450" // Definindo a altura do vídeo
                allowFullScreen
              />
            </div>
        </section>
        <section>
            <div className={`${styles.videoContainer}`}>
              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/xlptXikE7X0"
                title="Vídeo Incorporado"
                width="900" // Definindo a largura do vídeo
                height="450" // Definindo a altura do vídeo
                allowFullScreen
              />
            </div>
        </section>
      </main>
      </>
      );
      }