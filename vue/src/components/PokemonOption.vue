<template>
  <label @click="iChooseYou()">
    <input type="radio" :v-model="pokemon" name="user"/>
    {{pokemon.type}}
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Pokemon } from '@/models/pokemon.model';

@Component
export default class PokemonOption extends Vue {
  @Prop() input?: Pokemon;
  pokemon = this.input

  @Emit('choice')
  iChooseYou() {
    return this.pokemon;
  }
}
</script>

<style scoped lang="scss">
</style>
