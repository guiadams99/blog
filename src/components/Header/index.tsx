import styles from '@/components/Header/style.module.scss';
import Image from 'next/image';
import logo from '../../../public/imagens/logo.png';
import Link from 'next/link';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <Image src={logo} alt="Simpleway Logo" />
                </Link>
                <nav>
                    <Link href="/">Plataforma</Link>
                    <Link href="/lgpd">LGPD</Link>
                    <Link href="/planos">Planos</Link>
                    <Link href="/faq">FAQ</Link>
                    <Link href="/sobre">Sobre Nós</Link>
                    <Link href="/conteudos">Conteúdos</Link>
                    <Link href="/contato">Contato</Link>
                </nav>
                <a className={styles.readyButton} type="button" href='https://app.podium.com.br/login'>Login</a>
            </div>
        </header>
    );
}
