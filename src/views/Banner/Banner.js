import React, {useState, useEffect} from 'react';
// import * as s from './Banner.module.css'


export const Banner = () => {
  const [isHidden, setHidden] = useState(false)

  // This runs when the page is loaded.
  useEffect(() => {
    if (sessionStorage.getItem('hidden-banner')) {
        setHidden(true)
    }
  }, [])

  const handleClick = () => {
    sessionStorage.setItem('hidden-banner', 'true')
    setHidden(true)
  }

  // const ClsBtn = <button onClick={handleClick}>X</button>

  return (
     <div className={`${isHidden ? 'hidden' : 'flex'}`}>
      <h2 className='text-xl font-bold'>Акція місяця!!! </h2>
      <strong className='ext-xl font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
      <button className='h-[16px] w-[16px] flex justify-center' onClick={handleClick}>X</button>
    </div>
  )
}



 // <div className={`${isVisible ? ${s.bannerVisible} : ${s.bannerHidden}}`}>
    //   <h2 className={s.bannerTitle}>Акція місяця!!! </h2>
    //   <strong className={s.bannerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
    //   <button className={s.bannerClsBtn}onClick={handleClick}>X</button>
    // </div>