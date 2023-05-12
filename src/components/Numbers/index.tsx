import Image from 'next/image'
import styles from './styles.module.css'

export default function Numbers() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span className={styles.subTitle}>Números do</span>
          {" "}BTG Pactual
        </h2>
        <div className={styles.numbersWrapper}>
          <ul>
            <li className={styles.numberContainer}>
              <div className={styles.numberContent}>
                <span className={styles.number}>39</span>
                <div>
                  <p className={styles.numberTextHighlight}>anos</p>
                  <p className={styles.numberSubText}>de história</p>
                </div>
              </div>
              <div>
                <Image
                  src="/tracado-icon.webp"
                  className={styles.tracado}
                  alt="Tracado"
                  width={950}
                  height={7}
                />
              </div>
            </li>
            <li className={styles.numberContainer}>
              <div>
                <Image
                  src="/tracado-icon.webp"
                  className={styles.tracado}
                  alt="Tracado"
                  width={350}
                  height={7}
                />
              </div>
              <div className={styles.numberContainer}>
                <span className={styles.plus}>+</span>
                <span className={styles.number}>20</span>
                <div>
                  <span className={styles.numberTextHighlight}>Mihões</span>
                  <p className={styles.numberSubText}>de clientes</p>
                </div>
              </div>
              <div>
                <Image
                  src="/tracado-icon.webp"
                  className={styles.tracado}
                  alt="Tracado"
                  width={500}
                  height={7}
                />
              </div>
            </li>
            <li className={styles.numberContainer}>
              <div>
                <Image
                  src="/tracado-icon.webp"
                  className={styles.tracado}
                  alt="Tracado"
                  width={700}
                  height={7}
                />
              </div>
              <div className={styles.numberContainer}>
                <span className={styles.numberContainer}>
                  <span className={styles.plus}>+</span>
                  <span className={styles.money}>R$</span>
                </span>
                <span className={styles.number}>1,3</span>
              </div>
              <div>
                <span className={styles.numberTextHighlight}>trilhões</span>
                <p className={styles.numberSubText}>sob administração</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}