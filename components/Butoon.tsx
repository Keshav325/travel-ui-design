import React from 'react'
import Image from 'next/image'
import { PAGE_TYPES } from 'next/dist/lib/page-types';
type ButtonProps= {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    varient: string;
}

const Butoon = ({type , title , icon , varient}: ButtonProps) => {
  return (
    <div>
      <button className={`flexCenter gap-3 rounded-full border ${varient}`}type={type}>
      {icon && <Image src={icon }  alt={type} width={24} height={24}/>}
      <label className="bold-16  whitespace-nowrap">{title}</label>
      </button>
    </div>
  )
}

export default Butoon
