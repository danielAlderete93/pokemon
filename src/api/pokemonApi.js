import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

const pokemonApi = axios.create({
    baseURL: baseUrl,

})

export default pokemonApi