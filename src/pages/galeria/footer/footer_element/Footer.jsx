import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer_gallery'>
        <div className='footer__site-info_gallery'>
            <ul>
                <li>
                    <a href="/aviso-legal" className='underline'>Aviso Legal</a>
                </li>
                <li>-</li>
                <li>
                    <a href="/politica-privacidad" className='underline'>Política de Privacidad</a>
                </li>
                {/* <li>-</li>
                <li>
                    <a href="cookies" className='underline'>Cookies</a>
                </li> */}
                <li>-</li>
                <li>
                    <a href="/creditos" className='underline'>Créditos</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;