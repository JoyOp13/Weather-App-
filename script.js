const input = document.getElementById("city-input");
const button = document.getElementById("search-btn");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityname1){
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=(dc86f2b39a004c1eb0463151250259)&q=${cityname1}&aqi=yes
    `);
    return await data.json(); 
}

button.addEventListener("click", async ()=>{
    const value = input.value;
    const result = await getData(value);
    // console.log(result)
    cityName.innerText =`${result.location.name}, ${result.location.region} - ${result.location.name}`
    cityTime.innerText = result.location.localtime ;
    cityTemp.innerText = result.current.temp_c;
})