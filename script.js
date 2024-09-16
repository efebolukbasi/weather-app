let weather = {
    apiKey: "redacted",
    apiUnsplash: "redacted",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
            .catch((error) => console.error('Error fetching weather data:', error));
    },
    fetchImage: function (city) {
        fetch(
            `https://api.unsplash.com/photos/random?query=${city}&client_id=${this.apiUnsplash}`
        )
            .then((response) => response.json())
            .then((data) => {
                const imageUrl = `${data.urls.raw}&w=2560&h=1440&fit=crop`;
                document.body.style.backgroundImage = `url(${imageUrl})`;
            })
            .catch((error) => console.error('Error fetching image:', error));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const counter = document.querySelector(".counter-number");
        
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");

        this.fetchImage(name);
        updateCounter();
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

// Add the updateCounter function
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "redacted"  
    );
    let data = await response.json();
    counter.innerText = `Views: ${data}`;
}

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

weather.fetchWeather("Denver");