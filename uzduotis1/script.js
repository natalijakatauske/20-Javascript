/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show data"
pamatyti data iš api.publicapis.org (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show data":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
2. Žinutė "Press "Show data" button to see data" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// 1. Paspausti mygtuka
// 2. Panaikinu zinute
// 3. Gaunu duomenis
// 4. Sudedu duomenis
const ENDPOINT = 'https://api.publicapis.org/entries';

document.getElementById('btn').addEventListener('click', showData)

function showData() {
    document.getElementById('message').innerHTML = ''

    fetch(ENDPOINT)
    .then(x => x.json())
    .then(data => {
        for (let i = 0; i < data.entries.length; i++) {
            // console.log(data.entries[i])
            document.getElementById('output').innerText += '\n' + data.entries[i].API
        }
    })
}