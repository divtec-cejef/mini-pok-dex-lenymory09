/**
 * Exercice : Mini Pokédex
 * @author Steve Fallet <steve.fallet@dvitec.ch>
 * @since 2024-09-01
 */

'use strict';

// Couleur par défaut pour les types de Pokémon non définis
const DEFAULT_COLOR = '#ccc';

const pokemonContainer = document.querySelector(".pokemon-container");
const searchBar = document.getElementById("search-bar");

// Couleurs pour chaque type de Pokémon
const typeColors = {
    'Électrique': '#FFD700',
    'Plante': '#78C850',
    'Poison': '#A040A0',
    'Feu': '#F08030',
    'Eau': '#6890F0',
    'Normal': '#A8A878',
    'Fée': '#EE99AC',
    'Spectre': '#705898',
    'Combat': '#C03028',
    'Vol': '#A890F0',
    'Glace': '#98D8D8',
    'Roche': '#B8A038',
    'Sol': '#E0C068',
    'Psy': '#F85888'
};

// Tableau d'objets représentant les Pokémon

const pokemonsTab = [
    {name: 'Bulbizarre', type: 'Plante,Poison', level: 15, img: 'bulbizarre.png'},
    {name: 'Salamèche', type: 'Feu', level: 20, img: 'salameche.png'},
    {name: 'Carapuce', type: 'Eau', level: 10, img: 'carapuce.png'},
    {name: 'Rondoudou', type: 'Normal,Fée', level: 25, img: 'rondoudou.png'},
    {name: 'Ectoplasma', type: 'Spectre,Poison', level: 45, img: 'ectoplasma.png'},
    {name: 'Évoli', type: 'Normal,Combat', level: 22, img: 'evoli.png'},
    {name: 'Dracaufeu', type: 'Feu,Vol', level: 50, img: 'dracaufeu.png'},
    {name: 'Florizarre', type: 'Plante,Poison', level: 55, img: 'florizarre.png'},
    {name: 'Tortank', type: 'Eau', level: 52, img: 'tortank.png'},
    {name: 'Mélofée', type: 'Fée', level: 18, img: 'melofee.png'},
    {name: 'Raichu', type: 'Électrique', level: 40, img: 'raichu.png'},
    {name: 'Magicarpe', type: 'Eau', level: 5, img: 'magicarpe.png'},
    {name: 'Lokhlass', type: 'Eau,Glace', level: 35, img: 'lokhlass.png'},
    {name: 'Onix', type: 'Roche,Sol', level: 30, img: 'onix.png'},
    {name: 'Ronflex', type: 'Normal', level: 45, img: 'ronflex.png'},
    {name: 'Mewtwo', type: 'Psy', level: 70, img: 'mewtwo.png'},
    {name: 'Pikachu', type: 'Électrique', level: 35, img: 'pikachu.png'}
];

/**
 * Genere le code HTML pour les différentes cartes pokemons
 * @param pokemon à afficher
 * @returns {string} le code HTML permettant d'afficher le pokemon.
 */
function generatePokemonCardHTML(pokemon) {
    let cardHTML = "<div class='pokemon-card' "
    let listeTypes = pokemon['type'].split(',');

    // Ajout couleur du Background
    if (listeTypes.length > 1) {
        cardHTML += `style='background: linear-gradient(to right, ${typeColors[listeTypes[0]]} 50%, ${typeColors[listeTypes[1]]} 50%);'`;
    } else {
        cardHTML += `style='background: ${typeColors[pokemon['type']]};'`;
    }
    cardHTML += `;'> <img src='images/${pokemon['img']}' alt=' ${pokemon['name']}'> <h2> ${pokemon['name']} </h2> <div>Type : `;

    // écriture des types de pokemons
    cardHTML += listeTypes.join(" / ");

    return `${cardHTML} </div> <div>Niveau: ${pokemon['level']} </div> </div>`;
}

/**
 * affiche les pokemons
 */
function displayPokemons(pokemonTries) {
    pokemonContainer.textContent = "";

    if (!pokemonTries.length) {
        pokemonContainer.innerHTML = '<p>Dracaufeu a tout brûlé, aucun Pokémon ne correspond à ta recherche !</p>'
        return;
    }

    let resHTML = '';
    for (let pokemon of pokemonTries) {
        resHTML += generatePokemonCardHTML(pokemon);
    }
    pokemonContainer.innerHTML = resHTML;
}

function filterAndSortPokemons(){
   displayPokemons(pokemonsTab.filter(pokemon => pokemon['name'].toLowerCase().includes(searchBar.value.toLowerCase())));
}

displayPokemons(pokemonsTab);
searchBar.addEventListener('input', filterAndSortPokemons);