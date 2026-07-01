function getWeather(){

    let city = document.getElementById("cityName").value;

    let url = `https://api.weatherapi.com/v1/current.json?key=8947f8e45da84199bc052007260107&q=${city}&aqi=yes`;

    fetch(url)

    .then(function(response){

        return response.json();

    })

    .then(function(data){

        document.getElementById("city").innerHTML =
        data.location.name + ", " + data.location.country;

        document.getElementById("temp").innerHTML =
        "Temperature : " + data.current.temp_c + " °C";

        document.getElementById("condition").innerHTML =
        "Condition : " + data.current.condition.text;

        document.getElementById("humidity").innerHTML =
        "Humidity : " + data.current.humidity + "%";

        document.getElementById("wind").innerHTML =
        "Wind Speed : " + data.current.wind_kph + " km/h";

        document.getElementById("icon").src =
        "https:" + data.current.condition.icon;

    })

    .catch(function(){

        alert("City Not Found");

    });

}