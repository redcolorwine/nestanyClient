import React from 'react'
import cmedia from './about.module.css';
import backAbout from './../../media/pinho-GCAnKZM21_c-unsplash.jpg';

const About = () => {
    return (
        <div className={cmedia.about}>
            <img className={cmedia.backImg} src={backAbout} alt="" />
            <h2>О нас</h2>
            <h3>Наша миссия – создавать красивую, функциональную и качественную одежду по доступным ценам.</h3>
            <div className={cmedia.variants}>
                <div className={cmedia.delItem}>
                    <h4>Разнообразие</h4>
                    <p>Мы ценим стремление к разнообразным сочетаниям, ярким краскам в повседневной одежде и помогаем девушкам создавать нескучные стильные образы на все случаи жизни.</p>
                </div>
                <div className={cmedia.delItem}>
                    <h4>Актуальность</h4>
                    <p>Мы следим за мировыми fashion трендами, адаптируя их под запросы российских потребителей. Современная, модная одежда – одна из самых важных констант бренда.</p>
                </div>
                <div className={cmedia.delItem}>
                    <h4>Масштабность</h4>
                    <p>Мы бренд федерального масштаба, вписывающийся в реалии региональных потребителей. Это подтверждается существованием более 450 магазинов по всей России: от Калининграда до Петропавловска-Камчатского.</p>
                </div>
                <div className={cmedia.delItem}>
                    <h4>Доступность</h4>
                    <p>Мы стремимся быть ближе к своей аудитории, учитываем потребности и финансовые возможности региональных потребителей. А за счёт сокращения издержек на всех этапах производства устанавливаем демократичные цены на одежду.</p>
                </div>
            </div>
        </div>
    )
}

export default About