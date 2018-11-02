export class Pokemon {
  name: string;
  type: string;
  avatar: string;
  weakness: string[];

  constructor(name: string, type: string, avatar: string, weakness: string[]) {
    this.name = name;
    this.type = type;
    this.avatar = avatar;
    this.weakness = weakness;
  }
}

export const POKEMONS: Pokemon[] = [
  {
    name: 'Bulbizarre',
    type: 'plante',
    avatar: require('../assets/pokemon/bulbizarre.png'),
    weakness: ['feu', 'electrik'],
  },
  {
    name: 'Salamèche',
    type: 'feu',
    avatar: require('../assets/pokemon/salameche.png'),
    weakness: ['eau', 'psy'],
  },
  {
    name: 'Carapuce',
    type: 'eau',
    avatar: require('../assets/pokemon/carapuce.png'),
    weakness: ['plante', 'electrik'],
  },
  {
    name: 'Pikachu',
    type: 'electrik',
    avatar: require('../assets/pokemon/pikachu.png'),
    weakness: ['feu', 'psy'],
  },
  {
    name: 'Ramoloss',
    type: 'psy',
    avatar: require('../assets/pokemon/ramoloss.png'),
    weakness: ['plante', 'eau'],
  }
]
