



let pokemons = [{


    name: ` Magikarp`,

    image_url: `/images/magikarp.jpg`,

    health: `80`,

    
    dmg: `50`
},

{


    name: `Rayquaza`,

    image_url: `/images/rayqauza.png`,

    health: `150`,

    dmg: `50`
},

{


    name: `Haunter`,

    image_url: `/images/haunter.png`,

    health: `100`,

    dmg: `50`
}


];


let choose_your_pokemon_page = document.querySelector(`#section_main`);

let pokemon_json = Cookies.get(`selection`);

let selection_pokemon = [];

function choose_your_pokemon(pokemon_choice) {

    let pokemons = {

        name: `${pokemon_choice[`target`].getAttribute(`pokemon_name`)}`,

        image_url: `${pokemon_choice[`target`].getAttribute(`pokemon_image`)}`,

        health: `${pokemon_choice[`target`].getAttribute(`pokemon_health`)}`,

        dmg: `${pokemon_choice[`target`].getAttribute(`pokemon_damage`)}`

    }

    selection_pokemon.push(pokemons);
    let pokemon_json = JSON.stringify(selection_pokemon);
    Cookies.set(`selection`, pokemon_json);

    Cookies.set(`player_health`, 150);
    Cookies.set(`computer_health`, 200);



};



for (let counter = 0; counter < pokemons.length; counter = counter + 1) {

    choose_your_pokemon_page.insertAdjacentHTML(`beforeend`,


        `<article>
<span class="main_span">

<h2>${pokemons[counter].name}</h3>

<img src="${pokemons[counter].image_url}">

<a href="/pages/battle.html"><button class="clickme"

pokemon_name="${pokemons[counter].name}"
pokemon_health="${pokemons[counter].health}"
pokemon_image="${pokemons[counter].image_url}"
pokemon_damage"${pokemons[counter].dmg}"

>CHOOSE POKEMON</button></a>


</span>
</article>`);

};

let rival ={



    
}



let chosen_pokemon = document.querySelectorAll(`.clickme`);

for (let counter = 0; counter < chosen_pokemon.length; counter = counter + 1) {
    chosen_pokemon[counter].addEventListener(`click`, choose_your_pokemon);
}
