import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
    const pokemonsArr = Array.from(Array(650))
    return pokemonsArr.map((_, index) => index + 1)
}

const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons()
        .sort(() => Math.random() - 0.5)
        .splice(0, 4)

    return await getPokemonNames(mixedPokemons)
}

const getPokemonNames = async ([a, b, c, d] = []) => {
    const arrPromises = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]


    const [pk1, pk2, pk3, pk4] = await Promise.all(
        arrPromises
    )
    return [
        {name: pk1.data.name, id: pk1.data.id},
        {name: pk2.data.name, id: pk2.data.id},
        {name: pk3.data.name, id: pk3.data.id},
        {name: pk4.data.name, id: pk4.data.id}
    ]
}

export default getPokemonOptions