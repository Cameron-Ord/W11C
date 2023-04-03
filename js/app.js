



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




};



for (let counter = 0; counter < pokemons.length; counter = counter + 1) {

    choose_your_pokemon_page.insertAdjacentHTML(`beforeend`,


        `<article>
<span class="main_span">

<h2>${pokemons[counter].name}</h3>

<img src="${pokemons[counter].image_url}">

<a href="/pages/battle.html"><button 
pokemon_name="${pokemons[counter].name}"
pokemon_health="${pokemons[counter].health}"
pokemon_image="${pokemons[counter].image_url}"
pokemon_damage="${pokemons[counter].dmg}"

class="clickme"

>CHOOSE POKEMON</button></a>


</span>

</article>`);

};

let rival = [{


    name: `Deoxsys`,

    health: `250`,

    image_url: `/images/deoxsys.jpg`,

    dmg: `25`


}
];

let enemy_json = Cookies.get(`enemy`);

let enemy_selection = [];

function choose_enemy(enemy) {


    let rival = {

        name: `${enemy[`target`].getAttribute(`enemy_name`)}`,

        image_url: `${enemy[`target`].getAttribute(`enemy_image`)}`,

        health: `${enemy[`target`].getAttribute(`enemy_health`)}`,

        dmg: `${enemy[`target`].getAttribute(`enemy_damage`)}`



    }

    enemy_selection.push(rival);

    let enemy_json = JSON.stringify(enemy_selection);

    Cookies.set(`enemy`, enemy_json);

    Cookies.set(`computer_health`, 200);
};


for (counter = 0; counter < rival.length; counter = counter + 1) {


    choose_your_pokemon_page.insertAdjacentHTML(`beforeend`,

        `<article>
    <span class="main_span">
    
    <h2>${rival[counter].name}</h3>
    
    <img src="${rival[counter].image_url}">
 
    <button
    
    enemy_name="${rival[counter].name}"
    enemy_health="${rival[counter].health}"
    enemy_image="${rival[counter].image_url}"
    enemy_damage="${rival[counter].dmg}"

    class="click_enemy"
    

    
    >CHOOSE ENEMY</button>
    
    
    </span>
    </article>
    `)

}

let chosen_pokemon = document.querySelectorAll(`.clickme`);

for (let counter = 0; counter < chosen_pokemon.length; counter = counter + 1) {
    chosen_pokemon[counter].addEventListener(`click`, choose_your_pokemon);

}

let chosen_enemy = document.querySelectorAll(`.click_enemy`);

for (let counter = 0; counter < chosen_enemy.length; counter = counter + 1) {
    chosen_enemy[counter].addEventListener(`click`, choose_enemy);

}