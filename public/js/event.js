function hentAlleUrlParametre (url = "") {
    
    // Hvis man ikke giver den en specifik URL, så bruger den browserens aktuelle URL.
    if (url == "") url = window.location.href;

    url = url + "";  // Dette sørger for, at der arbejdes med en KOPI af teksten og ikke den oprindelige tekst.
    var urlParams = {};
    url.replace (
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function ($0, $1, $2, $3) {
            urlParams[$1] = $3;
        }
    );

    return urlParams;
}

var urlparametre = hentAlleUrlParametre();
console.log(urlparametre.arrangementer);

// hvis vi har modtaget en gruppe i url så viser den produkter ellers viser den grupperne.
if (urlparametre.arrangementer !== undefined) {
// udskriv produkter
fetch(`http://localhost:3000/api/allEvents/:${urlparametre.type}`)
    .then((response) => {
        // grib svarets indhold (body) og send det som et json objekt til næste .then()
        return response.json();
    })
    .then((data) => {
        // nu er json objektet lagt ind i data variablen, udskriv data
        console.log(data);
        document.getElementsByClassName('produkts').innerHTML = '';

    var container = document.getElementsByClassName('produkts');
    var counter = 0;
    var html = '';

    data.forEach(function(arrangementer) {
        html = '';

        if((counter %4) == 0) {
            html = '<hr>';
        }

        html += `
        <div class="box">
            <h4>${arrangementer.title}</h4>
            <p>${arrangementer.dato}</p>
            <p>${arrangementer.varighed}</p>
            <p>${arrangementer.type}</p>
            <p>${arrangementer.sal}</p>
            <p>${arrangementer.pris}</p>
        </div>`;

            container.innerHTML += html
            counter++;    
    }, this);

    });
} else {
 // udskriv grupper
fetch(`http://localhost:3000/api/allEvents`)
 .then((response) => {
     // grib svarets indhold (body) og send det som et json objekt til næste .then()
     return response.json();
 })
 .then((data) => {
     // nu er json objektet lagt ind i data variablen, udskriv data
     console.log(data);
     document.getElementsByClassName('produkts').innerHTML = '';

 var container = document.getElementsByClassName('produkts');
 var counter = 0;
 var html = '';

 data.forEach(function(arrangementer) {
     html = '';

     if((counter %4) == 0) {
         html = '<hr>';
     }

     html += `
        <div class="box">
            <h4>${arrangementer.title}</h4>
            <p>${arrangementer.dato}</p>
            <p>${arrangementer.varighed}</p>
            <p>${arrangementer.type}</p>
            <p>${arrangementer.sal}</p>
            <p>${arrangementer.pris}</p>
        </div>`;

         container.innerHTML += html
         counter++;    
 }, this);

 });
}