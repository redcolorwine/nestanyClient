import React, { useState } from 'react'
import cmedia from './admin.module.css';
import goodImg from './../../media/clothes/cap3.jpg';
import FoundItem from '../../components/foundItem/FoundItem';

const AdminPanel = () => {

    const [foundItem, setFound] = useState(false);
    const findItem = (e) => {
        e.preventDefault();
        setFound(!foundItem);
    }
    const role = localStorage.getItem('roles');
    if (role == 'ADMIN') {
        return (
            <div className={cmedia.admin}>
                <h2>Админ панель</h2>
                <div className={cmedia.adminWrapper}>
                    <div className={cmedia.createGoods}>
                        <h4>Добавление товара</h4>
                        <form action="">
                            <label htmlFor="name">Название</label>
                            <input type="text" name='name' />
                            <label htmlFor="brand">Бренд</label>
                            <input type="text" name='brand' />
                            <label htmlFor="type">Тип</label>
                            <input type="text" name='type' />
                            <label htmlFor="price">Стоимость</label>
                            <input type="text" name='price' />
                            <label htmlFor="description">Описание</label>
                            <textarea rows={10}
                                cols={40} name='description' />
                            <label htmlFor="image">Изображение</label>
                            <input type="file" name='image' />
                            <input type="button" value={'Добавить'} />
                        </form>
                    </div>
                    <div className={cmedia.deleteGoods}>
                        <h4>Удаление товара</h4>
                        <form action="">
                            <label htmlFor="name">Выбор</label>
                            <select name="" id="delGoods">
                                <option value="cap">Кепка nestany</option>
                                <option value="hoodie">Худи nestany</option>
                                <option value="sweetshot">Свитшот nestany</option>
                            </select>
                            <label htmlFor="searchId">Поиск по id</label>
                            <input type="text" name="searchId" />
                            <input type="button" value={'Найти'} onClick={findItem} />
                            {foundItem && (
                                <div className={cmedia.foundItems}>
                                    <FoundItem type='Худи' name='Худи Nestany' price={3990} />

                                </div>
                            )}

                        </form>
                    </div>
                </div>

            </div>
        )
    }
    else {
        return(
            <>ДОСТУП ТОЛЬКО ДЛЯ АДМИНОВ</>
        )
    }
}

export default AdminPanel