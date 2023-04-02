

let selected_poke = Cookies.get(`selection`);

let selected_enemy = Cookies.get(`enemy`);

let arena = document.querySelector(`#section_main`);

let player_HP = Cookies.get(`player_health`);

let comp_HP = Cookies.get(`computer_health`);


if (selected_poke && selected_enemy === undefined) {

    arena.insertAdjacentHTML(`beforeend`, `<h1> Choose a pokemon</h1>`);


} else {

    let parse_pokemon = JSON.parse(selected_poke);
    let parse_enemy = JSON.parse(selected_enemy);

    arena.insertAdjacentHTML(`beforeend`, `
    <article>
    <span class="main_span">
    <h2>${parse_pokemon[0].name}</h3>
    <h2>${player_HP} HP</h2>
    <img src="${parse_pokemon[0].image_url}">

    <button class="rematch">Rematch</button>


    <span class="main_span">
    <button pokemon_damage="${parse_pokemon[0].dmg}" class="attack">Outrage</button>
    <button pokemon_damage="${parse_pokemon[0].dmg}" class="attack">Hyper Voice</button>
    <button pokemon_damage="${parse_pokemon[0].dmg}" class="attack">Dragon Pulse</button>
    <button pokemon_damage="${parse_pokemon[0].dmg}" class="attack">Air Slash</button>
    </span>
    </span>
    </article>
    
    
    <article>
    <span class="main_span">

    <h2>${parse_enemy[0].name}</h3>
    <h2 enemy_health="${parse_enemy[0].health}">${comp_HP} HP</h2>
    <img enemy_damage="${parse_enemy[0].dmg}" src="${parse_enemy[0].image_url}">


    </span>
    </article>
    
    

    `);

};





function attack(details) {


    let pokemon_damage = parse_pokemon[0].dmg;

    let enemy_damage = parse_enemy[0].dmg;

    let comp_HP = Cookies.get(`computer_health`);

    let player_HP = Cookies.get(`player_health`);

    let current_player_hp = player_HP -= enemy_damage;

    let current_enemy_hp = comp_HP -= pokemon_damage;

    Cookies.set(`computer_health`, current_enemy_hp);

    Cookies.set(`player_health`, current_player_hp);


    if(current_enemy_hp <=1){

        arena.insertAdjacentHTML(`afterbegin`, `<h1>YOU WIN</h1>`);

        Cookies.remove(`player_health`);
        Cookies.remove(`computer_health`);
    }else if(current_player_hp <=1){

        arena.insertAdjacentHTML(`afterbegin`, `<h1>LOSE</h1>`);
    
        Cookies.remove(`player_health`);
        Cookies.remove(`computer_health`);
    };


};


function rematch(){


Cookies.set(`player_health`, 150);
Cookies.set(`computer_health`, 200);


}


let attack_button = document.querySelectorAll(`.attack`);

for (let counter = 0; counter < attack_button.length; counter = counter + 1) {


    attack_button[counter].addEventListener(`click`, attack);

};


let rematch_button = document.querySelectorAll(`.rematch`);

for (let counter = 0; counter < rematch_button.length; counter = counter + 1) {


    rematch_button[counter].addEventListener(`click`, rematch);

};















