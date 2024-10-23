const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const wind_speed = document.querySelector('#wind-speed');
const not_found =  document.querySelector('.not-found');
const weather_body = document.querySelector('.weather-body');

const error404 = document.querySelector('.not_found');


 async function checkWeather(city){
    const APIkey ='88be5a719044d8c26cbf42e5af43510b';
    const url    =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

  const weather_data = await fetch(`${url}`).then(Response => Response.json());

    if(weather_data.cod === `404`){
       not_found.style.display = "flex";
       weather_body.style.display ="none"
        console.log("error");
        
        return;

    }
    not_found.style.display = "none";
    weather_body.style.display ="flex"
    temperature.innerHTML=`${ Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`
    humidity.innerHTML=`${ weather_data.main.humidity}`;
    wind_speed.innerHTML=`${weather_data.wind.speed}km/h`;
    
    switch(weather_data.weather[0].main){
        case 'Clouds':
        weather_img.src ="/image/cloud.png";
        break;
        
        case 'Clear':
        weather_img.src ="/image/clear.png";
        break;

        case 'Rain':
        weather_img.src ="/image/rain.png";
        break;

        case 'Mist':
        weather_img.src ="/image/mist.png";
        break;

        case 'Snow':
        weather_img.src ="/image/snow.png";
        break;
    }

    console.log(weather_data); 
 }
      searchBtn.addEventListener('click',(e)=>{
       checkWeather(inputBox.value);
       e.preventDefault();
 });
 