import React from 'react'
import cmedia from './footer.module.css';

const Footer = () => {
    return (
        <div className={cmedia.footer}>
            <div className={cmedia.logo}>
                <h2>nestany</h2>
            </div>
            <div className={cmedia.menu}>
                <h4>Выбирай лучшее</h4>
                <div className={cmedia.bothFooter}>
                    <div className={cmedia.leftFooterBlock}>
                        <p>футболки</p>
                        <p>шорты</p>
                        <p>майки</p>
                        <p>носки</p>
                        <p>леггинсы</p>

                    </div>
                    <div className={cmedia.rightFooterBlock}>
                        <p>куртки</p>
                        <p>худи</p>
                        <p>свитшоты</p>
                        <p>головные уборы</p>
                        <p>аксессуары</p>
                    </div>
                </div>

            </div>

            <nav className={cmedia.contactsFooter}>
                <h4>Контакты</h4>
                <li>почта: nestanyshop@gmail.com</li>
                <li>телефон: +7 (934) 123-23-34</li>
                <li>ежедневно с 10:00 до 20:00</li>
            </nav>
        </div>
    )
}

export default Footer