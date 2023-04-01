

let moves = [
    {

        move: `Air Slash`,

        damage: `75`

    },

    {

        move: `Dragon Pulse`,

        damage: `85`
    },

    {

        move: `Hyper Voice`,

        damage: `80`

    },

    {


        move: `Outrage`,

        damage: `120`

    }



];




let attack_moves = [];

let move_json = Cookies.get(`enemy`);

function attack(attack_move){


    let attacks = {


        move: `${attack_move[`target`].getAttribute(`attack_name`)}`,

        damage: `${attack_move[`target`].getAttribute(`attack_damage`)}`


    }

    attack_moves.push(attacks);
 
    let move_json = JSON.stringify(attack_moves);

    Cookies.set(`enemy`, move_json);
};



let enemy = [{



    name: `Deoxsys`,

    image_url: `/images/deoxsys.jpg`,

    health: `300`



}];


let enemy_json = Cookies.get(`enemy`);


let enemy_array = [];




function enemy_selection(rival) {

    let rival_pokemon = {


        name: `${rival[`target`].getAttribute(`rival_pokemon`)}`,

        image_url: `${rival[`target`].getAttribute(`rival_pokemon_image`)}`,

        health: `${rival[`target`].getAttribute(`rival_pokemon_health`)}`
    }

    enemy_array.push(rival_pokemon);

    let enemy_json = JSON.stringify(enemy_array);

    Cookies.set(`enemy`, enemy_json);

};
































let get_pokemon = Cookies.get(`selection`);

let chosen_pokemon = Cookies.get(`selection`);



if (chosen_pokemon === undefined) {


    let battle_page = document.querySelector(`#section_main`);

    battle_page.insertAdjacentHTML(`afterbegin`, `<h1>Choose a Pokemon`);



} else {

    let battle_page = document.querySelector(`#section_main`);

    let json_parse = JSON.parse(get_pokemon);



    for (let counter = 0; counter < json_parse.length; counter = counter + 1) {



        battle_page.insertAdjacentHTML(`beforeend`,

            `<article>
        <span class="main_span">

        <h2>${json_parse[counter][`name`]}</h2>

        <p>${json_parse[counter][`health`]}</p>

        <img src="${json_parse[counter][`image_url`]}">


        <span class="buttons">
        <button class="moves" 
        attack_name="${moves[counter][`move`]}"
        attack_damage="${moves[counter][`damage`]}"
        rival_pokemon="${enemy[counter][`name`]}"
        rival_pokemon_image="${enemy[counter][`image_url`]}"
        rival_pokemon_health="${enemy[counter][`health`]}"
        >Air Slash</button>

        <button class="moves" 
        attack_name="${moves[counter][`move`]}"
        attack_damage="${moves[counter][`damage`]}"
        rival_pokemon="${enemy[counter][`name`]}"
        rival_pokemon_image="${enemy[counter][`image_url`]}"
        rival_pokemon_health="${enemy[counter][`health`]}"
        >Dragon Pulse</button>

        <button class="moves" 
        attack_name="${moves[counter][`move`]}"
        attack_damage="${moves[counter][`damage`]}"
        rival_pokemon="${enemy[counter][`name`]}"
        rival_pokemon_image="${enemy[counter][`image_url`]}"
        rival_pokemon_health="${enemy[counter][`health`]}"
        >Hyper Voice</button>
        
        <button class="moves" 
        attack_name="${moves[counter][`move`]}"
        attack_damage="${moves[counter][`damage`]}"
        rival_pokemon="${enemy[counter][`name`]}"
        rival_pokemon_image="${enemy[counter][`image_url`]}"
        rival_pokemon_health="${enemy[counter][`health`]}"
        >Outrage</button>
        </span>



        </span>
        </article>

        `
        );



    }


};

let get_enemy = Cookies.get(`enemy`);

let chosen_enemy= Cookies.get(`enemy`);

if(chosen_enemy === undefined){

    let enemy_page = document.querySelector(`#section_main`);

    enemy_page.insertAdjacentHTML(`afterbegin`, `<h1>Choose a Pokemon`);


}else{

    let enemy_page = document.querySelector(`#section_main`);

    for (let counter = 0; counter < enemy.length; counter = counter = +1){

        enemy_page.insertAdjacentHTML(`beforeend`,

        `     <article>
<span class="main_span">

<h2>${enemy[counter][`name`]}</h2>

<p>${enemy[counter][`health`]}</p>

<img src="${enemy[counter][`image_url`]}">
</span>
</article>
`


    );


    };


};






let chosen_move = document.querySelectorAll(`.moves`);

for (let counter = 0; counter < chosen_move.length; counter = counter + 1) {



    chosen_move[counter].addEventListener(`click`, enemy_selection);

};
























