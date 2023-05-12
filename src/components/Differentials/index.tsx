import { MdCheck } from 'react-icons/md'
import styles from './styles.module.css'
import Form from '../Form';

interface IDifferentialsProps {
  professorId?: number | undefined;
  professorName?: string | undefined;
}

export default function Differentials({ professorId, professorName }: IDifferentialsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.differentials}>
          <h2 className={styles.title}>Abra sua conta 100% gratuita e opere com o maior banco de investimentos da América latina, o BTG Pactual.</h2>
          <ul className={styles.listContent}>
            <li className={styles.listitem}>
              <MdCheck className={styles.check} size={20} />
              <span className={styles.listText}>Atendimento personalizado com um assessor de investimentos especialista em renda variável;</span>
            </li>
            <li className={styles.listitem}>
              <MdCheck className={styles.check} size={20} />
              <span className={styles.listText}>Condições únicas de corretagem;</span>
            </li>
            <li className={styles.listitem}>
              <MdCheck className={styles.check} size={20} />
              <span className={styles.listText}>Plataformas gratuitas;</span>
            </li>
            <li className={styles.listitem}>
              <MdCheck className={styles.check} size={20} />
              <span className={styles.listText}>Relatórios e recomendações diárias da maior casa de análise do Brasil;</span>
            </li>
            <li className={styles.listitem}>
              <MdCheck className={styles.check} size={20} />
              <span className={styles.listText}>Grupo no telegram exclusivo com notícias e acompanhamento de mercado em tempo real;</span>
            </li>
            <li className={styles.listitem}>
              <MdCheck className={styles.check} size={20} />
              <span className={styles.listText}>Calculadora de imposto de renda gratuita;</span>
            </li>
            <li className={styles.listitem}>
              <MdCheck className={styles.check} size={20} />
              <span className={styles.listText}>Conta BTG Banking (banco digital) gratuita.</span>
            </li>
          </ul>
        </div>
        <div className={styles.form}>
          <Form />
        </div>
      </div>
    </div>
  )
}