document.addEventListener ("DOMContentLoaded", function (event) {
        /*this fetch is connected to
        events.js 1-17*/
        fetch('http://localhost:3000/api/allevents')
            .then((response) => {
                return response.json();
         })
            .then((data) => {
                //console.log(data);
                let allevents = [];
                data.forEach((eventDB, i) => {
                    allevents.push(eventDB);
                    let eventObject = new events(eventDB.title, eventDB.fk_type, eventDB.dato_tid, eventDB.varighed, eventDB.fk_sted, eventDB.fk_sal, eventDB.pris);
        })
    })
})