import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout isHomepage={true}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Glassgo.</h1>
          <p className={styles.description}>
            Choose your glass bottle pick-up plan and help us keep the planet clean.
          </p>

          <section className={styles.plans}>
            <Link href="/subscribe" passHref>
              <article className={styles.card} role="button" tabIndex="0">
                <h2>Pick Twice Weekly - <span className={styles.price}>$5.99 per month</span></h2>
                <p>Twice a week pickup</p>
                <p>Includes 8 Glassgo. bags</p>
                <div className={styles.svgContainer}>
                  <img className={styles.svgImage} src="/Bag.svg" alt="Bag Icon" />
                </div>
                <div className={styles.button}>Subscribe</div>
              </article>
            </Link>

            <Link href="/subscribe" passHref>
              <article className={styles.card} role="button" tabIndex="0">
                <h2>Tri-Weekly Treasures - <span className={styles.price}>$7.99 <span className={styles.smallText}>per month</span></span></h2>
                <p>Three times a week pickup</p>
                <p>Enjoy three time weekly pick ups, Includes 12 Monthly Glassgo. bags</p>
                <div className={styles.svgContainer}>
                  <img className={styles.svgImage} src="/Bag2.svg" alt="Bag Icon" />
                </div>
                <div className={styles.button}>Subscribe</div>
              </article>
            </Link>
          </section>
        </main>
      </div>
    </Layout>
  );
}
