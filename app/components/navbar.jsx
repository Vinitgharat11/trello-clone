import Image from 'next/image'
import {CgMenuGridO} from 'react-icons/cg'
import {BsArrowDownShort} from 'react-icons/bs'
import {HiOutlinePlus,HiOutlineSearch} from 'react-icons/hi'
import logo from '../assets/icon.png'
export default function Navbar() {
  return (
    <nav>
      <div className="Nav-container flex items-center justify-between p-3 border-b-2">
      <CgMenuGridO size={25} className='text-slate-500'/>
      <Image src={logo} alt='lofo' width={80} height={50} className='grayscale contrast-200'/>
        <span className='flex text-lg font-bold items-center mx-2 gap-2 text-slate-500'>More <BsArrowDownShort size={20}/></span>
        <div className="bg-blue-500 p-1 rounded text-xl">
        <HiOutlinePlus className='text-white'/>
        </div>
        <HiOutlineSearch className='text-xl text-slate-500'/>
      </div>
      
    </nav>
  )
}
