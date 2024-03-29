import React from 'react'
import s from './Wellcome.module.css'
import img from '../images/2.png'

const Wellcome = () => {
  return (
    <>
    <div className={s.body}>
      <div className={s.main_wrapper}>

<div className={s.wrapper}>
              <div className={s.div1}>
                  Добро пожаловать на наш сайт
              </div>
              <div className={s.div2}>
                  Сайт разработан 1.03.24. Он поможет вам решить многие проблемы с вашим здоровьем. Здесь вы можете найти специалистов которые помогут вам, также на сайте имеются возможности, как
                  онлайн запись к врачу, консультация со специалистами в виде переписки. Вы можете найти много анкет специалистов из разных медицинских учреждений. 
              </div>
              

              

          </div>
          <div className={s.wrapper2}>
                <img src={img}/>

              </div>

             
      </div>
           

    </div>
        <div className={s.new_div}> 
            <h1 className={s.new_div_h1}>МЕДИЦИНСКИЕ УСЛУГИ</h1> 
            <h2 className={s.new_div_h2}>Наш центр предлагает вам и вашей семье полный спектр медицинских услуг.</h2>
        </div>

        <div className={s.div_100}>
            <div className={s.div_50}>
              <div className={s.div_small}> <h1 className={s.new_div_h2}>СЕМЕЙНАЯ ЗАБОТА</h1> <h2 className={s.div_small_h2}>Наши врачи, медсестры и персонал клиники работают вместе, чтобы обеспечить дружелюбный индивидуальный уход для всех членов вашей семьи от рождения до возраста 100+.</h2> </div>  
              <div className={s.div_small}> <h1 className={s.new_div_h2}>НЕОТЛОЖНАЯ ПОМОЩЬ</h1> <h2 className={s.div_small_h2}>Мы позаботимся о вас как на стационарном лечении, так и на приемах в тот же день до онлайн-посещений с ''''. Если у вас возникла чрезвычайная ситуация</h2> </div> 
              <div className={s.div_small}> <h1 className={s.new_div_h2}>ПЕДИАТРИЧЕСКИЙ</h1> <h2 className={s.div_small_h2}>Наша команда по уходу заслужила репутацию специалистов по оказанию квалифицированной помощи детям, включая лечение многих сложных состояний. Если вашему ребенку нужен ровный</h2> </div>
            </div>
            <div className={s.div_50}>
            <div className={s.div_small}> <h1 className={s.new_div_h2}>ЛАБОРАТОРНЫЕ УСЛУГИ</h1> <h2 className={s.div_small_h2}>Мы можем помочь вам узнать, чего ожидать до, во время и после теста. Используйте эту информацию и всегда следуйте указаниям вашего врача.</h2> </div> 
            <div className={s.div_small}> <h1 className={s.new_div_h2}>ОПЕРАЦИЯ</h1> <h2 className={s.div_small_h2}>Благодаря новаторским достижениям в области медицинских исследований, образовательным программам, определяющим будущее здравоохранения, и широкомасштабным общественным мероприятиям,</h2> </div> 
            <div className={s.div_small}> <h1 className={s.new_div_h2}>ПАЛЛИАТИВНАЯ ПОМОЩЬ</h1> <h2 className={s.div_small_h2}>Паллиативная помощь - это активный комплексный уход за физическими, психологическими, эмоциональными и духовными потребностями пациентов с хроническими изнурительными заболеваниями.</h2> </div>
            </div>
            
        </div>

        <div className={s.zapis_div}>
          <div className={s.zapis_img}> <img src='//images02.nicepage.com/c461c07a441a5d220e8feb1a/55f42419585a55549514e1f1/billionphotos925018min.png' /> </div>
          <div className={s.zapis_h1}> <h1 className={s.zapis_div_h1}>ПРЯМАЯ ПЕРВИЧНАЯ ПОМОЩЬ</h1> <h2 className={s.zapis_div_h2}>Legend.project - это современная модель здравоохранения, которая делает управление вашим медицинским обслуживанием намного проще и доступнее.</h2> <div className={s.awd}><button className={s.zapis_button}>ЗАПИСЬ НА ПРИЕМ</button></div>  </div>
        </div>


      <div className={s.call_h1}>ОБРАТНАЯ СВЯЗЬ</div>
      <div className={s.call_100}>
        
        <div className={s.call_50}>
          <div className={s.call_icon1}> <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="200"><path d="M12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"/><path d="M12,24a5.271,5.271,0,0,1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055,10.055,0,0,1,20.11,0c0,2.538-1.933,6.49-5.744,11.747A5.271,5.271,0,0,1,12,24ZM12,2.181a7.883,7.883,0,0,0-7.874,7.874c0,2.01,1.893,5.727,5.329,10.466a3.145,3.145,0,0,0,5.09,0c3.436-4.739,5.329-8.456,5.329-10.466A7.883,7.883,0,0,0,12,2.181Z"/></svg> </div>
          <div className={s.call_icon2}> <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="200"><path d="M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z"/></svg> </div>
          <div className={s.call_icon3}> <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="200"><path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"/></svg></div>
          <div className={s.call_icon4}> <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="200"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/></svg></div>
        </div>
      </div>

    </>
  )
}

export default Wellcome