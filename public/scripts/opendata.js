const app = document.getElementById('root')
const logo = document.createElement('img')
logo.src = 'logo.png'
const container = document.createElement('div')
container.setAttribute('class', 'container')
const list = document.createElement('ul')
let justTrailNames = [];


var request = new XMLHttpRequest();

request.open("GET", "https://opendata.arcgis.com/datasets/d7ad8e150c164c32ab1690658f3fa662_4.geojson", true);

request.onload = function () {

    var data = JSON.parse(this.response)

   
   //console.log(data.features[0].properties.TRAILNAME);
    //console.log(data.features.length)

    const arrayOfTrails = data.features
    

   for (let i = 0; i < arrayOfTrails.length; i++) {
       justTrailNames.push(arrayOfTrails[i].properties.TRAILNAME);
   }

   justTrailNames = new Set(justTrailNames);

   console.log(justTrailNames);

   // records.forEach(record => {



        //const listItem = document.createElement('li')
        //listItem.textContent = record.name

        // const p = document.createElement('p')
        // p.textContent = record.officialSiteUrl

       // list.appendChild(listItem);

        // card.appendChild(h1)
        // card.appendChild(p)
    //})



}


request.send();
