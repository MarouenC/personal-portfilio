import React from 'react'
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';

const socialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://twitter.com/marouenko'>
            <BsTwitter />
        </a>
        <a href='https://www.instagram.com/marouen_koukii/?hl=fr'>
            <BsInstagram />
        </a>
        <a href='https://www.linkedin.com/in/marouen-kouki-45436a252/'>
            <BsLinkedin />
        </a>
    </div>
  )
}

export default socialMedia