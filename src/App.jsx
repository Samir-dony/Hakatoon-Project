import './App.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { YMaps, Map } from '@pbe/react-yandex-maps';;

function App() {

  return (
    <>
    <div className='header_div'>
      <div className='header_glav1'>
        <div className='header_div_up'>
        <div className='header_div_img'> <img src='../public/Screenshot_2024-03-06_19-37-09.png' alt='' /> </div>
          <div className='up_div_input'>
            <input className='header_up_input' type='search' placeholder='Поиск услуг, врачей, направлений...'/>
          </div>
          <h4 className='header_transform'> Заочная консультация </h4>
          <h4 className='header_transform'> Плата онлайн  </h4>
          <h4 className='header_transform_ls'> Личный кабинет </h4>
        </div>
        </div>
        
      <div className='header_glav2'>
        
        <header className='header'>
          <Link to={'/'}> <span className='span1'> Главная страница </span> </Link>
          <Link to={'/price'}> <span className='span1'> Услуги и цена </span> </Link>
          <Link to={'/job'}> <span className='span1'> Врачи </span> </Link>
          <Link to={'/client'}> <span className='span1'> Для пациента </span> </Link>
          <h5 className='header_transform'> +996-xxx-xxx-xxx </h5>
          <h5 className='header_transform'> +996-xxx-xxx-xxx </h5>
          <button className='header_button'> Запись на прием </button>
        </header>
      </div>
    </div>
    
      <Routes>
        <Route path={'/'} ></Route>
        <Route path={'/price'}></Route>
        <Route path={'/job'}></Route>
        <Route path={'/client'}></Route>
      </Routes>


      <div className='new_body_h1'> <h1>НАПРАВЛЕНИЕ ДЕЯТЕЛЬНОСТИ ЦЕНТРА</h1> </div>

        <div className='new_body_div_100'>

          <div className='new_body_div_80'>

            <div className='new_80_column'>
            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/nurse-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Взрослым </h1> 
            </div>  

            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/capsule-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Детям </h1> 
            </div>

            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/microscope-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Диагностика </h1> 
            </div>

            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/telephone-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Онлайн консультации </h1> 
            </div>
            </div>
            <div className='new_80_column'>
            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/folder-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Онкоцентр </h1> 
            </div>  

            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/medicine-chest-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Маммологический центр </h1> 
            </div>

            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/electrocardiogram-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Кардиоцентр </h1> 
            </div>

            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/medicine-bottle-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Гинекология и репродуктивное здоровье </h1> 
            </div>
            </div>
            <div className='new_80_column'>
            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/clinic-building-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Проктология </h1> 
            </div>  

            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/inject-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Урология </h1> 
            </div>

            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/stethoscope-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Отделение хирургии </h1> 
            </div>

            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/ambulance-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Травмотология и ортопедия </h1> 
            </div>
            </div>
            <div className='new_80_column'>
            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/doctor-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Терапевтический стационар </h1> 
            </div>  

            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/gene-sequence-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Неврологоия и реабилитация </h1> 
            </div>

            <div className='new_body_div_div'> 
              <div className='div_div_cont'> 
                <img src='../public/map-svgrepo-com.svg' alt='' /> 
              </div> 
              <h1 className='cont_h1'> Вызов врача на дом </h1> 
            </div>
            </div>
            
          </div> 
        </div>


        <div className='news_div_100'> 
          <div className='news_div_80'> 
              <div className='news_80_img'> <img src='../public/Screenshot_2024-03-06_21-01-18.png' alt=''/> </div>
              <div className='news_80_h1'> <h1 className='news_80_hh'> <strong>Выезд на дом и сопровождение</strong> </h1> 
                  <div class="container_1">
                    <div class="center">
                      <button class="btn">
                        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                           <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                             <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                        </svg>
                        <span> Подробнее </span>
                      </button>
                    </div>
                  </div>
              </div>
          </div>
        </div>


        <div className='otz_div_100'>
          <div className='otz_div_70'>
            <div className='otz_70_div'>
            <div className='otz_div_top'></div>
              <h1> Новости Lorem </h1>
              <h2> Подари сертификат на здоровье  </h2>
              <span className='span_1'>Теперь в Центре медицинских технологии можно приобрести подарочные сертификаты номиналом 5000...</span>
              
              <h2> Тема обсуждения: Сердце и Технологии </h2>
              <span className='span_1'> Как использовать устройства и приложения для мониторинга здоровья </span>
              <button className='otz_button'> Смотреть все новости </button>
            </div>

            <div className='otz_70_div1'>
              <h1> Новые отзывы </h1>
              <h2 className='otz_h1'> <span className='otz_strong'>Роза</span> 1 марта 2024</h2>
              <h3 className='otz_h1'> Добрый день,хочу поблагодарить Жиленко Валентина Борисовича и Дмитриева Александра Николаевича  в проведении заочной консультации для моей мамочки,спасибо вам огромное за обратную связь,за грамотные и квалифицированные рекомендации,за индивидуальный подход к пациенту,мы еще не раз к вам обратимся! </h3>
              <h2 className='otz_h1'> Ответ Lorem </h2>
              <h3 className='otz_h1'> Роза, добрый день! Благодарим Вас за положительный отзыв и высокую оценку работы наших специалистов. Мы рады, что Вы остались довольны сервисом и качеством оказанных медицинских услуг. Обязательно передадим Ваши слова благодарности всем участникам отзыва. Желаем крепкого здоровья! </h3>
              <button className='otz_button1'> Смотреть все отзывы </button>
            </div>
            <div className='otz_70_div2'>
               <h2> <span className='otz_strong'> Марина </span> 29 февраля 2024 </h2> 
               <h3> Хочу выразить огромную благодарность координатора по заочным консультациям Елену, спасибо вам за обратную связь и за оперативное решение нашей проблемы! </h3>
               <h2> Ответ Lorem </h2>
               <h3> Марина, добрый день! Спасибо за отзыв и приятные слова в адрес нашего врача. Ваши слова благодарности обязательно будут переданы Елене  </h3>
            </div>
          </div>
        </div>




        <div className='partner_div_h1'> <h1> НАШИ ПАРТНЕРЫ </h1> </div>
        <div className='partner_div_icon'>
          <div className='partner_div_70'>
            <div className='partner_icon'> <img className='partner_img' src='../public/genetic-data-svgrepo-com.svg' /> </div>
            <div className='partner_icon'> <img className='partner_img' src='../public/behance-round-color-icon.svg' /> </div>
            <div className='partner_icon'> <img className='partner_img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Yandex_icon.svg/240px-Yandex_icon.svg.png' /> </div>
            <div className='partner_icon'> <img className='partner_img' src='../public/facebook-messenger-icon.svg' /> </div>
          </div>
          
        </div>

        <YMaps>
                <div className="map_div_100">
                    <div className="map_div_h1"> Наша геолокация! </div> 
                    <div className="map_up">
                        <Map className="map_div" defaultState={{ center: [42.819775, 73.844004], zoom: 12 }} />
                    </div>
                    
                </div>
            </YMaps>


      <div className='end_div_100'>

        <div className='end_div_70'>


          <div className='end_70_up'>


            <div className='end_70_box'>
              <h2 className='up_h2'> Компания </h2>
              <h3 className='up_h3'> О Центре </h3>
              <h3 className='up_h3'> Новости </h3>
              <h3 className='up_h3'> Отзывы </h3>
              <h3 className='up_h3'> Научная жизнь </h3>
              <h3 className='up_h3'> Вакансии </h3>
            </div>

            <div className='end_70_box'>
              <h2 className='up_h2'> Пациенту </h2>
              <h3 className='up_h3'> Оплата онлайн </h3>
              <h3 className='up_h3'> ДМС </h3>
              <h3 className='up_h3'> Вопрос-ответ </h3>
              <h3 className='up_h3'> Пациенту </h3>
              <h3 className='up_h3'> Партнерам </h3>
            </div>

            <div className='end_70_box'>
              <h2 className='up_h2'> Поддержка </h2>
              <h3 className='up_h3'> Советы врачей </h3>
              <h3 className='up_h3'> Журнал "Здоровье" </h3>
              <h3 className='up_h3'> Благотворительность </h3>
              <h3 className='up_h3'> Видео </h3>
              <h3 className='up_h3'> Бесплатная заочная консультация </h3>
            </div>

            <div className='end_70_box'>
              <h2 className='up_h2'> Контакты </h2>
              <h3 className='up_h3'> +996-ххх-ххх-ххх </h3>
              <h3 className='up_h3'> Кара-Балта </h3>
              <h3 className='up_h3'> diigmt@yandex.com </h3>
              <h3 className='up_h3'> starshiiaman@gmail.com </h3>
              <h3 className='up_h3'> Пн-Вс 8:00-20:00 </h3>
            </div>

            <div className='end_70_box'>
              <h2 className='up_h2'> Социальные сети </h2>
              <div className='end_img'> 
                <img className='end_img_svg' src='../public/whatsapp-color-icon.svg' /> 
                <img className='end_img_svg' src='../public/telegram-icon.svg' />
                <img className='end_img_svg' src='../public/stackoverflow-color-icon(1).svg' />
                
              </div>
              
            </div>

          </div>

          <h1 className='end_end'> ВОЗМОЖНЫ ПРОТИВОПОКАЗАНИЯ НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА </h1>

        </div>

      </div>

   </>   
  )
}

export default App
