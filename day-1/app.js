import API_URL from "./data.js";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorBox = document.querySelector(".error")
const weatherBox = document.querySelector(".weather");
async function checkWeather(city){
    try{
        const response = await fetch(API_URL+city);
        if(!response.ok){
            // this helps to throw custom error
            throw new Error("Something Went Wrong");
        }
        const data = await response.json();
        document.querySelector(".city").innerHTML=`${data?.name}, ${data?.sys?.country}`;
        document.querySelector(".temp").innerHTML=data?.main?.temp;
        document.querySelector(".humidity").innerHTML=`${data?.main?.humidity}%`
        document.querySelector(".wind").innerHTML=`${data?.wind?.speed} km/h`;
        if(data?.weather[0]?.main == 'Clouds')
            weatherIcon.src="./images/clouds.png";
        else if(data?.weather[0]?.main == 'Clear')
            weatherIcon.src="./images/clear.png";
        else if(data?.weather[0]?.main=='Drizzle')
            weatherIcon.src="./images/drizzle.png";
        else if(data?.weather[0]?.main=='Mist')
            weatherIcon.src="./images/mist.png";
        else if(data?.weather[0]?.main=='Rain')
            weatherIcon.src="./images/rain.png";
        weatherBox.style.display="block";
    }
    catch(err){
        weatherBox.style.display="none";
        errorBox.style.display="block";
        console.error(err); 
    }
}
// event listener for submit button
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
// this will help to work if i click enter button
searchBox.addEventListener("keypress",function(event){
    if(event.key === "Enter")
   {    
    event.preventDefault();
    checkWeather(searchBox.value);
   }
})
