import React from 'react'
import preloaderSVG from './../../media/preloader/preloader.svg';
import cmedia from './preloader.module.css';

const Preloader = () => {
    return (
        <div className={cmedia.preloader}>
            <img src={preloaderSVG} alt="" />
        </div>
    )
}

export default Preloader