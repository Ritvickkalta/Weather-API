var display=document.querySelector(".disp");
var temprature=document.querySelector(".temp");
var description=document.querySelector(".desc");
var button=document.querySelector(".search-button");
var city=document.querySelector(".input-city");
var humidi=document.querySelector(".hum");
var clo=document.querySelector(".desc");
var ico=document.querySelector(".icon");
button.addEventListener('click',function (o)
{
     fetch("https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&units=metric&appid=eb3fb7a437442e69c0aa0639651f284a")
    .then((response)=> response.json())
    .then(data=>{
    const k=data.name;
    const t=data.main.temp;
    const h=data.main.humidity;
    const i=data.weather[0].icon;
    const c=data.weather[0].description;
    display.innerHTML='Weather in '+k;
    temprature.innerHTML=t+' °C';
    humidi.innerHTML='Humidity '+h+ "%";
    clo.innerHTML=c;
    ico.src="https://openweathermap.org/img/wn/"+ i +".png";
    });
}
)
