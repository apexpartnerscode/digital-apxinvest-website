import styles from "./styles.module.css";
import { MdWhatsapp } from 'react-icons/md'

interface ModalProps {
  handleClose: () => void;
  showModal: boolean;
}

const Modal: React.FC<ModalProps> = ({ handleClose, showModal }) => {

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const modal = target.closest(`.${styles.modal}`);
    if (!modal) {
      handleClose();
    }
  };
  

  return (
    <>
      {showModal && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={handleClose}>
              X
            </button>
            <h2>Recebemos seu contato!</h2>
            <p>
              Agora, vamos te auxiliar na criação da sua conta BTG Pactual. Se
              você já possui uma conta BTG, realize a troca de assessoria! Basta
              clicar em uma das opções.
            </p>
            <div className={styles.footer}>
              <button className={styles.createAccountButton}>Criar conta</button>
              <button className={styles.alreadyHaveAccountButton}>Já tenho conta</button>
            </div>
            <div className={styles.whatsappButton}>
              <a href="https://api.whatsapp.com/send?phone=554391562733">
                <MdWhatsapp size={20} color="#fff" style={{ marginRight: '0.5rem' }}/>
                Contato no WhatsApp
              </a>
            </div>
          </div>
          <div className={styles.background}></div>
        </div>
      )}
    </>
  );
};

export default Modal;
