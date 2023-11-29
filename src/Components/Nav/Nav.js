import React from 'react'
import '../Nav/Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <>
    <div className="Nav">
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'Active' : '' }><AiOutlineHome/></a>
    <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'Active' : '' } ><AiOutlineUser/></a>
    <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'Active' : '' }><BiBook/></a>
    <a href="#Services" onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'Active' : '' }><RiServiceFill/></a>
    <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'Active' : '' }><BiMessageSquareDetail/></a>
    </div>
    </>

  )
}

export default Nav