import { FC } from 'react'
import Modal from './Modal'
interface OnboardingModalProps {
    isOpen: boolean
    onClose: () => void
}
const OnboardingModal: FC<OnboardingModalProps> = ({
  isOpen, onClose
}) => {
  return (
    <Modal isFullWidth={true} isImage={true} isOpen={isOpen} onClose={onClose}>
       
    </Modal>
  )
}

export default OnboardingModal