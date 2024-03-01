import React from 'react'
import s from './Header.module.css'
import image from '../images/logo.png'

const Header = () => {
  return (
    <>
    <header className={s.header}>
      <div className={s.header_wrapper}>

        <div className={s.header_logo}>
           <img className={s.header_logo_img} src={image} />
        </div>

            <div className={s.header2}>
                <div className={s.nav}>
                <div className={s.about}>О НАС</div>
                <div className={s.uslugi}>УСЛУГИ</div>
                <div className={s.diagnostics}>ДИАГНОСТИКА</div>
                <div className={s.prise}>ЦЕНЫ</div>
                <div className={s.contakts}>КОНТАКТЫ</div>

                <div  className={s.appointment_wrapper}>
                    <div className={s.appointment}><button className={s.button}>ЗАПИСАТЬСЯ НА ПРИЕМ</button> </div>
                </div>
            </div>

        </div>

      </div>

    </header>
    </>
  )
}

export default Header