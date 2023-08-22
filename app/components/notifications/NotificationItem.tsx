import Image from 'next/image'
import { FC } from 'react'
interface NotificationItemProps {
  name: string
  image: string
  body: string
}
const NotificationItem: FC<NotificationItemProps> = ({
        name, image, body
}) => { 
  function getSubstringWithoutCuttingWords(str: string, length: number) {
    // Start with the initial substring
    let result = str.substring(0, length);

    // Check if the last character is a whitespace or if it's the end of the string
    while(length < str.length && str[length] !== ' ') {
        result += str[length];
        length++;
    }

    return result;
}

  return (
    <div className='flex flex-row justify-between gap-10 border-b-[1px] w-full border-slate-500 py-4'>
        <div className="relative inline-block rounded-full overflow-hidden min-h-9 min-w-9 max-h-9 max-w-9 md:h-11 md:w-11 ml-3 m-auto">
            <Image
            fill
            src={image}
            alt='Notification'
             />
        </div>
        <div className='flex m-auto max-w-[170px]'>
            <p className='font-light text-[13px]'><span className='font-bold text-md text-[13px]'>
              {name} messaged you:</span> "{getSubstringWithoutCuttingWords(body, 10)}{body.length > 10 && "..."}"
              <span className='cursor-pointer font-bold text-md text-[13px] border-b'>  </span></p>
        </div>
        <div className='m-auto'>
            8:22
        </div>
    </div>
  )
}

export default NotificationItem