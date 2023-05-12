import Image from 'next/image'
import { BsFacebook, BsGlobe, BsInstagram, BsLinkedin } from 'react-icons/bs'
import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Image
        src="/logo.webp"
        alt="Logo APX Invest"
        width={700}
        height={226}
        className="mx-auto"
      />
      <nav className={styles.navContainer}>
        <ul className={styles.ul}>
          <li>
            <a href="#" target='_blank'>
              <BsFacebook size={30} color='#fff' />
            </a>
          </li>
          <li>
            <a href="#" target='_blank'>
              <BsInstagram size={30} color='#fff' />
            </a>
          </li>
          <li>
            <a href="#" target='_blank'>
              <BsLinkedin size={30} color='#fff' />
            </a>
          </li>
          <li>
            <a href="#" target='_blank'>
              <BsGlobe size={30} color='#fff' />
            </a>
          </li>
        </ul>
      </nav>
      <p className={styles.footerText}>
        A APX Investimentos Agente Autônomo de Investimento LTDA está devidamente registrada na Comissão de Valores Mobiliários (CVM), na forma da Resolução CVM 16/21. Atua como intermediário do Banco BTG Pactual S/A, conforme se verifica através do site do próprio BTG Pactual {"("}
        <a className='underline' href="https://www.sejabtg.com/escritorios" target="_blank">https://www.sejabtg.com/escritorios</a>
        {")"}. Na forma da legislação da CVM, o agente autônomo não pode administrar ou gerir o patrimônio de investidores. O agente autônomo é um intermediário e depende da autorização prévia do cliente para realizar operações. O conteúdo apresentado no site não se trata de recomendação, indicação e/ou aconselhamento de investimento, sendo única e exclusiva responsabilidade do investidor a tomada de decisão. O investimento em ações é um investimento de risco e a rentabilidade passada não é garantia de rentabilidade futura. Na realização de operações com derivativos existe a possibilidade de significativas perdas patrimoniais, inclusive superiores aos valores investidos. Para informações e dúvidas, favor contatar seu agente de investimentos ou via e-mail: ouvidoria@apxinvest.com.br. Para reclamações contate a Ouvidoria do BTG Pactual: Tel: 0800-722-0048 – ouvidoria@btgpactualdigital.com
      </p>
    </footer>
  )
}