import { FC } from 'react'
import { IconType } from 'react-icons'


interface AuthSocialButtonProps {
    icon: IconType
    onClick: () => void
}
const AuthSocialButton: FC<AuthSocialButtonProps> = ({
    icon: Icon, onClick
}) => {
  return (
    <button
    type='button'
    onClick={onClick}
    className='
    inline-flex
    w-full justify-center rounded-md px-x py-2 text-gray-200
    shadow-sm ring-1 ring-inset ring-gray-500 hover:bg-gray-800 focus:outline-offset-0
    '
    >
        <Icon />
    </button>
  )
}

export default AuthSocialButton