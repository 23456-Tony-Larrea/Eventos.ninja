fetch("http://localhost:3001/server/get?tabla=eventos").then(function (response) { return response.json(); }).then(
    function (myJson) {
        var data;
        data = myJson.datos;
        //console.log('JSON_: ', data);
        let value = '';
        puerco

        data.forEach(card => {
            //console.log(card);
            // value += `<li>${card.id} - ${card.texto}</li>`;
            value += `
            
            <div class="col-4">
            <div class="card-deck ">
            <div class="card" style="with:400px;">
            <img src="img/eventos.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.id}</h5>
                <p class="card-text">${card.texto}</p>
                <a href="#" class="btn btn-primary">Ir a la red social</a>
            </div>
            </div>
            </div>
            <br>
            </div>
            <br>`

        });
        $("#puerco").append(value);
        console.log(data.length);
        console.log(data);

        // for (let c = 0; c < data.length; c++) {
        //     const cardText = data[c].id;
        //     console.log(cardText);
        //     var elem = document.createElement("div");
        //     elem.setAttribute('id', array[i].id);
        //     document.body.appendchild(elem);
        // }
    }
).catch(function (error) {

    console.log("Error: " + error);

});