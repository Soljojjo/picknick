import React, { useEffect, useState } from 'react';
import Destinations from './Destinations';



const InfoPage = () => {




    // Can only return one object, encapsulated in a DIV here
    return (
        <div>

            

            <div class="header">
            <div>
                <img class= "logoPicknick" src="./icons/picknickLogoAndText.png" alt=" logo " />
            </div>
                

            </div>
           

            <div class="container">
                {/* <div>
                <img class="menupicture" src="./images/water.jpg" alt="girl at water"/>
                </div> */}
            <h1>Upptäck äventyren <br></br>nära dig</h1>   
                <p class="body_copy">Hitta utflyktsmål anpassade för hela <br></br>familjen         
                </p> 
            </div> 
            
            <div class="container2"> 
            <h2>Utflyktsmål i Stockholm</h2> 
            <p class="body_copy">Filtrera med populära taggar:</p> 
                
            </div>

            <div class="container3">   
                
            </div>
            
            <div class="footer">
                <p>&copy; All rights reserved.</p>
            </div>

        </div>
    );
};

export default InfoPage;

/*
<p class="family">
<img src="./icons/family_friendly_2440px.png" alt="<h2>Familjevänliga utflyktsmål</h2>" />
</p>
*/
