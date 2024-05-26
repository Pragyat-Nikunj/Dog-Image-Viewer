
// function addDoggo (){
// fetch(BREEDS_URL)
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     const img = document.createElement('img');
//     img.src = data.message;
//     img.alt = 'cute doggo';
//     document.querySelector('.doggos').appendChild(img);
// })
// }
// document.querySelector('.add-doggo').addEventListener('click', addDoggo);
const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
fetch(BREEDS_URL)
.then(response => {
    return response.json();
})
.then(data => {
    const breedsObj = data.message;
    const breedArray = Object.keys(breedsObj);
    const select = document.querySelector('.breeds');
    for (let i = 0; i < breedArray.length; i++) {
        const option = document.createElement('option');
        option.value = breedArray[i];
        option.innerText = breedArray[i];
        select.appendChild(option);
    }
})
const select = document.querySelector('.breeds');
const load = document.querySelector('.loader');
select.addEventListener('change', event => {
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
   addDog(url);
})
const img = document.querySelector('img');
function addDog(url) {
    load.classList.add('show');
    img.src = null;
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        img.src = data.message;
        load.classList.remove('show');
    })
}


