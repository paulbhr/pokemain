<template>
  <div class="board">
    <img src="@/assets/logo.png" alt="Pokémain"  width="100%"/>
    <PokemonOption v-for="pokemon in pokemons" :input="pokemon" @choice="updateUser(pokemon)"/>
    <h2>Choisis ton Pokémon!</h2>
    <h3 v-if="user">
      Tu as choisi {{user.name}}
    </h3>
    <h3 v-if="computer">
      {{result.message}}!
      L'ordinateur a choisi {{computer.name}}
    </h3>
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
})
export default class Home extends Vue {
  user: Pokemon | null = null;
  computer: Pokemon | null = null;
  pokemons: Pokemon[] = POKEMONS;
  result: any = null;

  private updateUser(pokemon: Pokemon) {
    this.user = pokemon;
    this.computer = this.computeComputer();
    this.result = this.computeGame(this.user, this.computer);
  }

  private computeComputer(): Pokemon {
    const rndm = Math.floor(Math.random() * this.pokemons.length);

    return this.pokemons[rndm];
  }

  private computeGame(user: Pokemon, computer: Pokemon): string {
    if(user.type == computer.type) {
      return {
        score: 0,
        message: "Égalité"
      };
    } else if(user.weakness.indexOf(computer.type) >= 0) {
      return {
        score: 0,
        message: "Défaite"
      };
    } else {
      return {
        score: 1,
        message: "Victoire"
      };
    }
  }
}
</script>
