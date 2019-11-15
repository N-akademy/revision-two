
document.querySelector("button").addEventListener("click",() => {

    // Contiendra la valeur/name du personnage Star Wars entré dans l'input
    let starWars = document.querySelector("input").value;

    // Permet d'aller récupérer des informations provenant d'une ressource externe :
    fetch(`https://swapi.co/api/people/${starWars}`)

    
    .then((response) => {
        response.json()
        .then((results) => {

        // A chaque clic du bouton, on vide notre balise <main>
        document.querySelector("main").innerHTML = '';
        
        // Création de la <table> en HTML
        let tableElement = document.createElement("table");
        document.querySelector("main").appendChild(tableElement);
        
        // Création de notre premier <tr> en HTML
        let trElement1 = document.createElement("tr");
        tableElement.appendChild(trElement1);

        // Création de nos <th> en HTML
        let thElement1 = document.createElement("th");
        let thElement2 = document.createElement("th");
        let thElement3 = document.createElement("th");
        let thElement4 = document.createElement("th");
        let thElement5 = document.createElement("th");
        let thElement6 = document.createElement("th");
        

        // Insertion de données dans nos <th>
        thElement1.innerHTML = "Name";
        thElement2.innerHTML = "Height";
        thElement3.innerHTML = "Gendre";
        thElement4.innerHTML = "Mass";
        thElement5.innerHTML = "Hair-color";
        thElement6.innerHTML = "Skin-color";
       

        trElement1.appendChild(thElement1);
        trElement1.appendChild(thElement2);
        trElement1.appendChild(thElement3);
        trElement1.appendChild(thElement4);
        trElement1.appendChild(thElement5);
        trElement1.appendChild(thElement6);
        

       
    

        // Création de notre <tbody> et  l'ajouter à notre <table>
        let tbodyElement = document.createElement("tbody");
        tableElement.appendChild(tbodyElement);

        // Création de notre second <tr> et l'ajouter à notre <tbody>
        let trElement2 = document.createElement("tr");
        tbodyElement.appendChild(trElement2);

       
        // Création de nos <td> en HTML
        let tdElement1 = document.createElement("td");
        let tdElement2 = document.createElement("td");
        let tdElement3 = document.createElement("td");
        let tdElement4 = document.createElement("td");
        let tdElement5 = document.createElement("td");
        let tdElement6 = document.createElement("td");
        

        // Insertion de données dans nos <td>
        tdElement1.innerHTML = results.name;
        tdElement2.innerHTML = results.height;
        tdElement3.innerHTML = results.gender;
        tdElement4.innerHTML = results.mass ;
        tdElement5.innerHTML = results.hair_color;
        tdElement6.innerHTML = results.skin_color;
    
        
        trElement2.appendChild(tdElement1);
        trElement2.appendChild(tdElement2);
        trElement2.appendChild(tdElement3);
        trElement2.appendChild(tdElement4);
        trElement2.appendChild(tdElement5);
        trElement2.appendChild(tdElement6);
     

        })
    })
});
