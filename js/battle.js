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

        </span>
        </article>
        `
        )



    }


}