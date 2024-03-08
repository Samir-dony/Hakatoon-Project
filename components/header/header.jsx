import React from "react";
import '../header/header.css'
import { YMaps, Map } from '@pbe/react-yandex-maps';;

   const Header = () => {

    return(
        <>
           <YMaps>
                <div className="map_div_100">
                    <div className="map_div_h1"> Наша геолокация! </div> 
                    <div className="map_up">
                        <Map className="map_div" defaultState={{ center: [42.819775, 73.844004], zoom: 12 }} />
                    </div>
                    
                </div>
            </YMaps>
        </>
    )
   }

export default Header