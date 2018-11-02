<template>
  <div class="board">
    <img src="@/assets/logo.png" alt="Pokémain" />
    <PokemonOption v-for="pokemon in pokemons" :input="pokemon" @choice="updateUser(pokemon)"/>
    <h2>Choisis ton Pokémon!</h2>
    <h3 v-if="user">Tu as choisi {{user.name}}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PokemonOption from '@/components/PokemonOption.vue';
import { Pokemon, POKEMONS } from '@/models/pokemon.model';

@Component({
  components: {
    PokemonOption,
  },
  data() {
    return {
      pokemons: POKEMONS,
    };
  }
})
export default class Home extends Vue {
  user: Pokemon | null = null;

  updateUser(pokemon: Pokemon) {
    this.user = pokemon;
  }
}
</script>
