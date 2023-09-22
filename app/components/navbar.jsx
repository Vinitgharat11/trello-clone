import Image from 'next/image'
import {CgMenuGridO} from 'react-icons/cg'
import {BsArrowDownShort} from 'react-icons/bs'
import logo from '../assets/icon.png'
export default function Navbar() {
  return (
    <nav>
      <div className="Nav-container flex items-center">
      <CgMenuGridO/>
      <Image src={logo} alt='lofo' width={50} height={50} className='grayscale contrast-200'/>
        <span className='flex'>More <BsArrowDownShort/></span>
      </div>
    </nav>
  )
}
