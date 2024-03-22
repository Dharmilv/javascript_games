//const url = 'https://open-weather13.p.rapidapi.com/city/chicago';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ca0647252cmshe18ad56e9f54926p1fc781jsndada30c94b1a',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

//{"coord":{"lon":-87.65,"lat":41.85},"weather":[{"id":800,"main":"Clear","description":"clear sky",
//"icon":"01d"}],"base":"stations","main":{"temp":29.26,"feels_like":19.04,"temp_min":26.85,
//"temp_max":31.24,"pressure":1011,"humidity":64},"visibility":10000,"wind":{"speed":12.66,"deg":250},
//"clouds":{"all":0},"dt":1708267415,"sys":{"type":2,"id":2005153,"country":"US","sunrise":1708260180,
//"sunset":1708298785},"timezone":-21600,"id":4887398,"name":"Chicago","cod":200}

const citybutton = document.getElementById('citybutton')
const cityname = document.getElementById('cityname')//space to take input
const names = document.getElementById('names')
const temp = document.getElementById('temp')
const mintemp = document.getElementById('mintemp')
const maxtemp = document.getElementById('maxtemp')
const condition = document.getElementById('condition')
const body = document.getElementById('body')

const getWeather = (cname) => {
    const url = `https://open-weather13.p.rapidapi.com/city/${cname}`;
    try {
        fetch(url, options)
        .then(response => response.json())
        .then(json => {
            t1=((json.main.temp-32)*0.55).toFixed(2)
            t2=((json.main.temp_min-32)*0.55).toFixed(2)
            t3=((json.main.temp_max-32)*0.55).toFixed(2)
            names.innerHTML = `<h> Name : ${json.name}</h>`
            temp.innerHTML = `<h> Temparature : ${t1} celcius</h>`
            mintemp.innerHTML = `<h> MinTemp : ${t2} celcius</h>`
            maxtemp.innerHTML = `<h> MaxTemp : ${t3} celcius</h>`
            condition.innerHTML = `<h> Condition : ${json.weather[0].main}</h>`
            if(t1<10){
                body.style.backgroundColor = "lightblue";
            }
            else if(t1>10&&t1<25){
                body.style.backgroundColor = "green";
            }
            else{
                body.style.backgroundColor = "red";
            }

        })
    } catch (error) {
        console.error(error);
    }
}



citybutton.onclick = () => {
    cname = cityname.value
    getWeather(cname)
}