import React, { useState } from 'react'
import cmedia from './contacts.module.css';
import emailjs from '@emailjs/browser';
const Contacts = () => {

    const [uname, setUname] = useState('');
    const [uemail, setUemail] = useState('');
    const [num, setNum] = useState('');
    const [mes, setMes] = useState('');
    const [checked, setChecked] = useState(true);
    const [errMes, setErrMes] = useState(false);
    const [acceptMenu, showAcceptMenu] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        //"service_st0t5zw","template_0hrd4ud"
        if (checked && uname.length > 3 && uemail.length > 5 && num.length > 7) {
            if (String(uemail)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )) {
                emailjs.sendForm('service_st0t5zw', 'template_0hrd4ud', e.target, 'ERJRWnPohaLlxpXaL');
                showAcceptMenu(true);
                setErrMes(false);
                setUname('');
                setUemail('');
                setNum('');
                setMes('');
            }

        } else {
            setErrMes(true);
        }

    }

    return (
        <div className={cmedia.contacts}>
            <h1>Контакты</h1>
            <div className={cmedia.main}>
                <div className={cmedia.address}>
                    <h4>Магазин современной одежды Nestany</h4>
                    <hr />
                    <p>Офис: <span>г.Хабаровск, ул. </span></p>
                    <p>График работы: <span>пн-пс: с 8:00 до 18:00</span></p>
                    <p>Контактный телефон: <span>+7(999)123-455-43</span></p>
                    <p>Время приема заявок: <span>пн-пс: с 8:00 до 18:00</span></p>
                    <p>Прием заказов электронным способом на сайте: <span>круглосуточно</span></p>
                    <p>E-mail: <span>info@nestanyshop.com.ru</span></p>
                </div>
                <div className={cmedia.connectForm}>
                    <h4>Форма обратной связи</h4>
                    <hr />
                    <form onSubmit={sendEmail}>
                        <label htmlFor="name">Имя</label>
                        <input type="text" name="user_name" id="userName" value={uname} onChange={(e) => setUname(e.target.value)} />
                        <label htmlFor="phone">Телефон</label>
                        <input type="text" name="phone_From" id="phoneFrom" value={num} onChange={(e) => setNum(e.target.value)} />
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email_from" id="emailFrom" value={uemail} onChange={(e) => setUemail(e.target.value)} />
                        <textarea name="message" id="message" rows="10" placeholder='Введите сообщение' value={mes} onChange={(e) => setMes(e.target.value)}> </textarea>
                        <div className={cmedia.agree}>
                            <input type="checkbox" name="ck" id="" defaultChecked={checked} onChange={() => setChecked(!checked)} />
                            <label htmlFor="ck">Согласен с обработкой персональных данных</label>
                        </div>

                        <input type="submit" value="Отправить сообщение" />
                        {errMes && <div className={cmedia.errorMessage}><p>Вы не согласились с политикой обработки персональных данных, остались пустые поля или ошибка в заполнении формы.</p></div>}
                        {acceptMenu && <div className={cmedia.acceptMenu}><p>Сообщение отправлено!</p></div>}
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contacts