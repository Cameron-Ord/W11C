

let selected_poke = Cookies.get(`selection`);

let parse_pokemon = JSON.parse(selected_poke);

let selected_enemy = Cookies.get(`enemy`);

let parse_enemy = JSON.parse(selected_enemy);

let arena = document.querySelector(`#section_main`);



let player_HP = Cookies.get(`player_health`);

let comp_HP = Cookies.get(`computer_health`);


if(parse_pokemon && parse_enemy === undefined){

    arena.insertAdjacentHTML(`beforeend`, `<h1> Choose a pokemon</h1>`);
    
    
    }else{
    
    
    arena.insertAdjacentHTML(`beforeend`, `
    <article>
    <span class="main_span">
    <h2>${parse_pokemon[0].name}</h3>
    <h2>${player_HP} HP</h2>
    <img src="${parse_pokemon[0].image_url}">
    <button pokemon_damage="${parse_pokemon[0].dmg}" class="attack">Attack</button>
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





 function attack(details){


let pokemon_damage = parse_pokemon[0].dmg;

let enemy_damage = parse_enemy[0].dmg;

let comp_HP = Cookies.get(`computer_health`);

let player_HP = Cookies.get(`player_health`);

let current_player_hp = player_HP -= enemy_damage;

let current_enemy_hp = comp_HP -= pokemon_damage;

Cookies.set(`computer_health`, current_enemy_hp);

Cookies.set(`player_health`, current_player_hp);



 };





 let attack_button = document.querySelectorAll(`.attack`);

 for(let counter = 0; counter < attack_button.length; counter = counter +1 ){


attack_button[counter].addEventListener(`click`, attack)

 };















