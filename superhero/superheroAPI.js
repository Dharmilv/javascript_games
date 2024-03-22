// 2092317271138012

// https://superheroapi.com/api/access-token

const superheroimage = document.getElementById('superheroimage');
const superheroname = document.getElementById('superheroname');
const randomButton = document.getElementById('random');
const searchButton = document.getElementById('search');
const searchname = document.getElementById('searchname');
const powerstat1 = document.getElementById('powerstat1');
const powerstat2 = document.getElementById('powerstat2');


const getSuperhero = (num) => {
    fetch(`https://superheroapi.com/api.php/2092317271138012/${num}`)
    .then(response => response.json())
    .then(json => {
        powerstat1.innerHTML= `<h> Strength : ${json.powerstats.strength} Speed : ${json.powerstats.speed}</h>`
        powerstat2.innerHTML= `<h> Power : ${json.powerstats.power} Intelligence : ${json.powerstats.intelligence}</h>`
        superheroimage.innerHTML = `<img src = ${json.image.url} height = "400" width = "500">`
        superheroname.innerHTML= `<h2><u>${json.name}</h2>` 
    })
}

searchButton.onclick = () => {
    let names = searchname.value
    fetch(`https://superheroapi.com/api.php/2092317271138012/search/${names}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0];
        powerstat1.innerHTML= `<h> Strength : ${hero.powerstats.strength} Speed : ${hero.powerstats.speed}</h>`
        powerstat2.innerHTML= `<h> Power : ${hero.powerstats.power} Intelligence : ${hero.powerstats.intelligence}</h>`        
        superheroimage.innerHTML = `<img src = ${hero.image.url} height = "400" width = "500">`
        superheroname.innerHTML= `<h2><u>${hero.name}</h2>` 
    })    
}

randomButton.onclick = () => {
    const n = Math.ceil(Math.random()*731)
    getSuperhero(n)
}