import React from 'react'
import "../Footer.css"
import francis from "../franciscolor.png";


const Footer = () => {
    return (
        <div className='FooterCss'>
            <div className="iconoscontainer">
                <a className="iconos facebook" href="https://www.facebook.com/parrilladasfrancissh/" />
                <a className="iconos instagram" href="https://www.instagram.com/parrilladasfrancis/" />
                <a className="iconos tiktok" href="https://www.tiktok.com/@parrilladasfrancis" />
                <a className="iconos whatsapp" href="https://ec.todosnegocios.com/parrilladas-francis-%22steak-house%22-099-820-1579" />
            </div>
            <div className='footercontainer'>
                <div className='d-flex'>
                    <img src={francis} alt="Logo" width={30} height={24} className="d-inline-block align-text-top" />
                </div>
                <div>
                    <h4>Menú</h4>
                    <p>Nosotros</p>
                    <p>Servicios</p>
                    <p>Contacto</p>
                    <p>Ubicacción</p>
                </div>
                <div>
                    <h4>A domicilio</h4>
                    <p>Llámanos +593998201579</p>
                    <p>Menú completo</p>
                </div>
                <div>
                    <h4>Legal</h4>
                    <p>Términos y Condiciones</p>
                    <p>Copyright</p>
                    <p>Aviso de privacidad</p>
                </div>
            </div>

        </div>
    )
}

export default Footer