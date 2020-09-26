fetch("http://localhost:3001/server/get?tabla=eventos").then(function (response) { return response.json(); }).then(
    function (myJson) {
        var data;
        data = myJson.datos;
        //console.log('JSON_: ', data);
        let value = '';
        data.forEach(card => {
            console.log(card);
            value += `<li>${card.id} - ${card.texto}</li>`;
            

        });
        document.body.innerHTML = value;

        /* for (let c = 0; c < data.length; c++) {
            const cardText = data[c].id;
            console.log(cardText);
            var elem = document.createElement("div");
            elem.setAttribute('id', array[i].id);
            document.body.appendchild(elem);
        } */
    }
).catch(function (error) {

    console.log("Error: " + error);

});