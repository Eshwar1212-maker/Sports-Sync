'use client';


import Modal from '@/app/components/Modal';
import AuthForm from './AuthForm';

interface AuthModal {
  isOpen?: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModal> = ({ 
  isOpen, 
  onClose 
}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <AuthForm />
      
    </Modal>
  )
}

export default AuthModal;