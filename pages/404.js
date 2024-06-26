import styles from '../styles/error.module.css';
import ContainerBlock from '@components/ContainerBlock';
import Link from 'next/link';
export default function Custom404() {
    return (
        <>
        <ContainerBlock>
        <section className={`${styles.page_404} black-bg`}>
            <div className="container">
                <div className="row">
                <div className="col-sm-12 ">
                    <div className={`col-sm-10 col-sm-offset-1  text-center ${styles.pd_100}`}>
                    <div className={styles.four_zero_four_bg}>
                        <h1 className="text-center">404</h1>
                    </div>
                    <div className={styles.contant_box_404}>
                        <h3 className="h2 mb-5">Look like you re lost</h3>
                        <p>the page you are looking for not avaible!</p>
                        <Link href="/" className={styles.link_404}>
                        Go to Home
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </ContainerBlock>
        <style jsx>{`
        .black-bg {
          background-color: black;
          color: white; /* Set text color to white for better visibility */
        }
      `}</style>
      </>
      
    );
}