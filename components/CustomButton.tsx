'use client';
import Image from 'next/image'
import { CustomButtonprops } from '@/types';


const CustomButton = ({title, containerStyles,handleClick,btnType}:CustomButtonprops) => {
  return (
    <button
        disabled={false}
        type={ btnType ||'button'}
        className={`custom-btn ${ containerStyles}  ` }
        onClick={handleClick}
        >
            <span className={'flex-1'}>
                {title}
            </span>
    </button>
  )
}

export default CustomButton