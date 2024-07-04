const apikey="3cb6a744bea860238ae19e942479156c";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const icon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }  
    else{
        var data=await response.json();
        //console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+ " km/hr";
        if(data.weather[0].main=="Clouds")
            icon.src="images/clouds.png";
        if(data.weather[0].main=="Clear")
            icon.src="images/clear.png";
        if(data.weather[0].main=="Rain")
            icon.src="images/rain.png";
        if(data.weather[0].main=="Drizzle")
            icon.src="images/drizzle.png";
        if(data.weather[0].main=="Mist")
            icon.src="images/mist.png";
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
}
btn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})
