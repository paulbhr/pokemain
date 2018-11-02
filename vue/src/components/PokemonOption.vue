<template>
  <label @change="iChooseYou()">
    <img :src="pokemon.avatar" />
    <div class="type" :class="pokemon.type"></div>
    <input class="avatar" type="radio" :v-model="pokemon" name="user"/>
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
label {
  cursor: pointer;
  display: inline-block;
  margin: 2vmax;
}
input {
  display: none;
}
.type {
  height: 25px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  &.eau{
    background-image: url('../assets/type/eau.png');
  }
  &.electrik{
    background-image: url('../assets/type/electrik.png');
  }
  &.feu{
    background-image: url('../assets/type/feu.png');
  }
  &.plante{
    background-image: url('../assets/type/plante.png');
  }
  &.psy{
    background-image: url('../assets/type/psy.png');
  }
}
</style>
