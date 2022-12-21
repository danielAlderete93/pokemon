<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>Quien es este pokemon</h1>
    <PokemonPicture :pokemonId="pokemon.id" :show-pokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>

    <template v-if="showAnswer" class="fade-in">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>


  </div>


</template>

<script>
import PokemonOptions from "@/components/PokemonOptions";
import PokemonPicture from "@/components/PokemonPicture";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: {PokemonPicture, PokemonOptions},
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonsArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true
      this.showAnswer = true
      if (this.pokemon.id === pokemonId) {
        this.message = `Correcto. ${this.pokemon.name}`
      } else {
        this.message = `Opps, era ${this.pokemon.name}`
      }
    },
    newGame() {
      this.pokemonArr = []
      this.pokemon = null
      this.showPokemon = false
      this.showAnswer = false
      this.message = ''
      this.mixPokemonsArray()
    }
  },
  mounted() {
    this.mixPokemonsArray()
  }
}
</script>

<style scoped>

</style>