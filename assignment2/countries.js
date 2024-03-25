function countryprocess(){
    var searchTerm = document.getElementById("countrybox").value ;

    document.getElementById("countrybox").value = ""; 
    var url = `https://restcountries.com/v3.1/name/${searchTerm}`;
    fetch (url)
    .then(res => res.json())
    .then(data=>show(data))
}
function show (data) {
    console.log (data); 
    
    var oldContent = document.getElementById("output");
    oldContent.textContent = ""; 
   
    if (Array.isArray(data)) {
        data.forEach(country => {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = `Offical Name: <b> ${country.name.official}</b><br>
                                Common Name: <b>${country.name.common}</b> <br>
                                Population: ${country.population}<br>
                                Region: ${country.region}<br>
                                Subregion: ${country.subregion}<br>
                                Area: ${country.area}<br>
                                Independent: ${country.independent}<br> 
                                Languages: ${Object.values(country.languages).join(', ')}<br>                               
                                UN memeber: ${country.unMember} <br>                                 
                                Capital: ${country.capital}<br><br>`;
            newDiv.classList.add("innerStyle");
            oldContent.appendChild(newDiv);
        });
    } 
}
function onprocess(){
    var searchTerm2 = document.getElementById("searchBox").value ;

    document.getElementById("searchBox").value = ""; 
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm2}&appid=069fd4891e45fec7e799cfb2b066237b`;
    fetch (url)
    .then(res => res.json())
    .then(data=>show2(data))
}
function show2(data) {
    console.log(data);

    var oldContent = document.getElementById("weatheroutput");
    oldContent.textContent = "";

    var newDiv = document.createElement("div");
    newDiv.innerHTML = `
        Name:<b>${data.name}</b><br>
        Longitude: <b>${data.coord.lon}</b><br>
        Latitude: <b>${data.coord.lat}</b><br>
        Weather Condition: <b>${data.weather[0].id}</b><br>
        Description: ${data.weather[0].description}<br>
        Temperature Feels Like:${data.main.feels_like}<br>
        Visibility:${data.visibility}<br>
        Humidity:${data.main.humidity}<br>
        Temperature:${data.main.temp}<br>
        Wind Speed: ${data.wind.speed} m/s<br><br>`;
    newDiv.classList.add("innerstyle");
    oldContent.appendChild(newDiv);
}
   
    
   
   
   


