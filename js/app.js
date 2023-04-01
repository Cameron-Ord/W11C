let pokemon = [{


    name: ` Magikarp`,

    image_url: `/images/magikarp.jpg`,

    health: `80`

},

{


    name: `Rayquaza`,

    image_url: `/images/rayqauza.png`,

    health: `150`

},

{


    name: `Haunter`,

    image_url: `/images/haunter.png`,

    health: `100`
}


];

let pokemon_json = Cookies.get(`selection`);

let selection_pokemon = [];

function choose_your_pokemon(pokemon_choice) {

    let pokemons = {

        name: `${pokemon_choice[`target`].getAttribute(`pokemon_name`)}`,

        image_url: `${pokemon_choice[`target`].getAttribute(`pokemon_image`)}`,

        health: `${pokemon_choice[`target`].getAttribute(`pokemon_health`)}`

    }

    selection_pokemon.push(pokemons);
    let pokemon_json = JSON.stringify(selection_pokemon);
    Cookies.set(`selection`, pokemon_json);

};


let choose_your_pokemon_page = document.querySelector(`#section_main`);

for (let counter = 0; counter < pokemon.length; counter = counter + 1) {

    choose_your_pokemon_page.insertAdjacentHTML(`beforeend`,


        `<article>
<span class="main_span">

<h2>${pokemon[counter][`name`]}</h3>

<img src="${pokemon[counter][`image_url`]}">

<a href="/pages/battle.html"><button class="clickme"

pokemon_name="${pokemon[counter][`name`]}"
pokemon_health="${pokemon[counter][`health`]}"
pokemon_image="${pokemon[counter][`image_url`]}"

>CHOOSE POKEMON</button></a>


</span>
</article>`);

};

let chosen_pokemon = document.querySelectorAll(`.clickme`);

for (let counter = 0; counter < chosen_pokemon.length; counter = counter + 1) {
    chosen_pokemon[counter].addEventListener(`click`, choose_your_pokemon);
}
