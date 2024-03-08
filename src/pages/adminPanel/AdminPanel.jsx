import React, { useRef, useState } from 'react'
import cmedia from './admin.module.css';
import goodImg from './../../media/clothes/cap3.jpg';
import FoundItem from '../../components/foundItem/FoundItem';
import axios from 'axios';
import { goodsAPI } from '../../api/api';
const AdminPanel = () => {

    const [foundItem, setFound] = useState(false);
    const [formError, setFormError] = useState('');
    const idRef = useRef();
    const nameRef = useRef();
    const typeRef = useRef();
    const brandRef = useRef();
    const priceRef = useRef();
    const descrRef = useRef();
    const deletedId = useRef();
    const imgRef = useRef();

    const findItem = (e) => {
        e.preventDefault();
        setFound(!foundItem);
    }
    // baseURL: 'http://localhost:5000/',
    // withCredentials: true,
    // headers: { 'Authorization': `Bearer ${token}` }
    const handleSubmit = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token');
        let formData = new FormData();
        formData.append('id', idRef.current.value)
        formData.append('name', nameRef.current.value)
        formData.append('type', typeRef.current.value)
        formData.append('brand', brandRef.current.value)
        formData.append('price', priceRef.current.value)
        formData.append('description', descrRef.current.value)
        formData.append('img', imgRef.current.files[0])

        axios({
            url: `http://localhost:5000/goods/add`,
            method: 'POST',
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: formData
        }).then(response => {
            console.log(response)
        })
        e.target.reset();

    }
    const handleDelete = (e) => {
        e.preventDefault();
        goodsAPI.deleteGoodById(deletedId.current.value)
        e.target.reset();

    }
    const role = localStorage.getItem('roles');

    if (role == 'ADMIN') {
        return (
            <div className={cmedia.admin}>
                <h2>Админ панель</h2>
                <div className={cmedia.adminWrapper}>
                    <div className={cmedia.createGoods}>
                        <h4>Добавление товара</h4>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="id">id</label>
                            <input type="text" name='id' ref={idRef} required />
                            <label htmlFor="name">Название</label>
                            <input type="text" name='name' ref={nameRef} required />
                            <label htmlFor="type">Тип</label>
                            <input type="text" name='type' ref={typeRef} required />
                            <label htmlFor="brand">Бренд</label>
                            <input type="text" name='brand' ref={brandRef} required />
                            <label htmlFor="price">Стоимость</label>
                            <input type="text" name='price' ref={priceRef} required />
                            <label htmlFor="description">Описание</label>
                            <textarea rows={10}
                                cols={40} name='description' ref={descrRef} required />
                            <label htmlFor="image">Изображение</label>
                            <input type="file" name='image' ref={imgRef} required />
                            <input type="submit" value={'Добавить'} />
                        </form>
                    </div>
                    <div className={cmedia.deleteGoods}>
                        <h4>Удаление товара</h4>
                        <form onSubmit={handleDelete}>
                            <label htmlFor="name">Выбор</label>
                            <select name="" id="delGoods">
                                <option value="cap">Кепка nestany</option>
                                <option value="hoodie">Худи nestany</option>
                                <option value="sweetshot">Свитшот nestany</option>
                            </select>
                            <label htmlFor="searchId">Поиск по id</label>
                            <input type="text" name="searchId" ref={deletedId} required />
                            <input type="submit" value={'Удалить'} />
                            {/* <input type="submit" value={'Найти'} onClick={findItem} />
                            {foundItem && (
                                <div className={cmedia.foundItems}>
                                    <FoundItem type='Худи' name='Худи Nestany' price={3990} />

                                </div>
                            )}
                                 */}
                        </form>
                    </div>
                </div>

            </div>
        )
    }
    else {
        return (
            <>ДОСТУП ТОЛЬКО ДЛЯ АДМИНОВ</>
        )
    }
}

export default AdminPanel