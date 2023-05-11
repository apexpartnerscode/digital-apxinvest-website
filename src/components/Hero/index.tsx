import styles from './styles.module.css'
import Image from 'next/image'


interface IHeroProps {
  professorName?: string;
  professorLogo?: string;
  professorLogoWidth?: number;
  professorLogoHeight?: number;
}

export default function Hero({ professorName, professorLogo, professorLogoWidth, professorLogoHeight }: IHeroProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Image
            src="/logo.webp"
            alt="Logo APX Invest"
            width={700}
            height={226}
            className={styles.btgLogo}
            priority
          />
          <div className={styles.content}>
            {
              professorLogo ? (
                <aside className={styles.textAndImageWrapper}>
                  <div className={styles.textWrapper}>
                    <h1 className={styles.title}>Sua liberdade começa agora.</h1>
                    <p className={styles.description}>
                      APX Invest | BTG Pactual, a assessoria de investimentos mais completa e especializada em renda variável
                      para você se concentrar no que realmente importa: rentabilizar seu capital na bolsa de valores.
                      {professorName ? <span className={styles.description}>
                        {' '}
                        Agora com benefícios exclusivos para indicações <strong className={styles.description}>{professorName}</strong>.
                      </span> : ''}
                    </p>
                  </div>
                  <div className={styles.professorImage}>
                    <Image
                      src={professorLogo}
                      alt="professor logo"
                      width={professorLogoWidth}
                      height={professorLogoHeight}
                      priority
                    />
                  </div>
                </aside>
              ) : (
                <aside className={styles.textWrapper}>
                  <h1 className={styles.title}>Sua liberdade começa agora.</h1>
                  <p className={styles.description}> 
                    APX Invest | BTG Pactual, a assessoria de investimentos mais completa e especializada em renda variável
                    para você se concentrar no que realmente importa: rentabilizar seu capital na bolsa de valores.
                    {professorName ? <span>
                      {' '}
                      Agora com benefícios exclusivos para indicações <strong>{professorName}</strong>.
                    </span> : ''}
                  </p>
                </aside>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}
