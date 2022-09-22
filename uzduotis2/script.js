/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę".


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
.then(x => x.json())
.then(data => {
    for (let i=0; i < data.length; i++) {
        console.log(data[i])
        document.getElementById('output').innerText += '\n' + data[i].brand
    }
})
