// const axios = require('axios');
// import { axios } from 'axios';

function getCats() {
    axios.get('https://cataas.com/api/cats')
        .then(function (response) {
            console.log(response.data);
            let container = document.getElementById('carousel-container');
            response.data.forEach((element, index) => {
                let div = document.createElement('div');
                div.className = index === 0 ? 'carousel-item active' : 'carousel-item';
                let img = document.createElement('img');
                img.src = `https://cataas.com/cat/${element._id}`;
                div.append(img);
                container.append(div);
                let owner = document.createElement('p');
                let created = document.createElement('p');
                let buttons = document.createElement('div')
                buttons.className = 'button-container'
                let cuteButton = document.createElement('button')
                cuteButton.className = 'action-button'
                cuteButton.append('cute')
                let cuddleButton = document.createElement('button')
                cuddleButton.className = 'action-button'
                cuddleButton.append('cuddle')
                buttons.append(cuteButton, cuddleButton)
                owner.append(`owner: ${element.owner === 'null' ? 'unknown' : element.owner}`)
                created.append(`created at: ${element.createdAt}`)
                div.append(buttons, owner, created)
            });
        })
        .catch(function (error) {
            console.log(error);
        })
}

window.onload = (event) => {
    getCats();
    console.log("page is fully loaded");
};

