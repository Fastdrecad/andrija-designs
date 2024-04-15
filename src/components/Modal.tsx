import { useEffect } from 'react';
import Backdrop from './Backdrop';
import ModalContent from './ModalContent';

interface ModalProps {
  onClose: () => void;
  items: any[]; // Adjust the type as needed
}

const Modal: React.FC<ModalProps> = ({ onClose, items }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Backdrop onClick={onClose}>
      <ModalContent onClose={onClose} items={items} />
    </Backdrop>
  );
};

export default Modal;
