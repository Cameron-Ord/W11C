let moves = [
    {
    
    move : `Air Slash`,
    
    damage: `75`
    
    },
    
    {
    
        move : `Dragon Pulse`,
    
        damage : `85`
    }
    
    ];
    
    
    
    let attack_json = Cookies.get(`attack`);
    
    let attack_moves = [];
    
    
    
    function attack(attack_move){
    
    
        let attacks = {
    
    
            move: `${attack_move[`target`].getAttribute(`attack_name`)}`,
    
            damage: `${attack_move[`target`].getAttribute(`attack_damage`)}`
    
    
        }
    
        attack_moves.push(attacks);
    
        let attack_json = JSON.stringify(attack_moves);
    
        Cookies.set(`attack`, attack_json);
    
    };
    
    let chosen_move = document.querySelectorAll(`.moves`);
    
    for(let counter = 0; counter < chosen_move.length; counter = counter +1){
    
    
    chosen_move[counter].addEventListener(`click`,attack);
    
    };

    let get_pokemon = Cookies.get(`selection`);

    let chosen_pokemon = Cookies.get(`selection`);
    

if(chosen_pokemon === undefined) {


    let battle_page = document.querySelector(`#section_main`);

    battle_page.insertAdjacentHTML(`afterbegin`, `<h1>Choose a Pokemon`);



}else{

    let battle_page = document.querySelector(`#section_main`);

    let json_parse = JSON.parse(get_pokemon);



    for(let counter = 0; counter < json_parse.length; counter = counter +1){



        battle_page.insertAdjacentHTML(`beforeend`, 
        
        `<article>
        <span class="main_span">

        <h2>${json_parse[counter][`name`]}</h2>

        <p>${json_parse[counter][`health`]}</p>

        <img src="${json_parse[counter][`image_url`]}">


        <button class="moves" 
        attack_name="${moves[counter][`move`]}"
        attack_damage="${moves[counter][`damage`]}"
        >Air Slash</button>

        <button class="moves" 
        attack_name="${moves[counter][`move`]}"
        attack_damage="${moves[counter][`damage`]}"
        >Dragon Pulse</button>

        </span>
        </article>
        `
        );



    }


};

