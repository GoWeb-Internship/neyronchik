import React, {useState, useEffect} from 'react';
// import * as s from './Banner.module.css'
import './Banner.module.css'

export const Banner = () => {
  const [isVisible, setVisible] = useState(true)

  // This runs when the page is loaded.
  useEffect(() => {
    if (sessionStorage.getItem('visible-banner')) {
        setVisible(false)
    }
  }, [])

  const handleClick = () => {
    sessionStorage.setItem('visible-banner', 'false')
    setVisible(false)
  }

  // const ClsBtn = <button onClick={handleClick}>X</button>

  return (
     <div className={`${isVisible ? 'bannerIsShown' : 'bannerIsHidden'}`}>
      <h2 >Акція місяця!!! </h2>
      <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
      <button onClick={handleClick}>X</button>
    </div>
  )
}



 // <div className={`${isVisible ? ${s.bannerVisible} : ${s.bannerHidden}}`}>
    //   <h2 className={s.bannerTitle}>Акція місяця!!! </h2>
    //   <strong className={s.bannerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
    //   <button className={s.bannerClsBtn}onClick={handleClick}>X</button>
    // </div>