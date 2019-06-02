const trails_div = document.getElementById('api_trails')
const ul_element = document.createElement('ul')
let justTrailNames = [];
let trail_names;

trails_div.appendChild(ul_element);

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

   trail_names = Array.from(justTrailNames);

   console.log(trail_names);

   trail_names.sort();

   trail_names.forEach(trail => {

        const listItem = document.createElement('li')
        listItem.textContent = `${trail}`;

        // const p = document.createElement('p')
        // p.textContent = record.officialSiteUrl

       ul_element.appendChild(listItem);

        // card.appendChild(h1)
        // card.appendChild(p)
    })



}


request.send();
