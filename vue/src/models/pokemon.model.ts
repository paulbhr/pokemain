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
    avatar: '',
    weakness: ['feu', 'electrik'],
  },
  {
    name: 'Salamèche',
    type: 'feu',
    avatar: '',
    weakness: ['eau', 'psy'],
  },
  {
    name: 'Carapuce',
    type: 'eau',
    avatar: '',
    weakness: ['plante', 'electrik'],
  },
  {
    name: 'Pikachu',
    type: 'electrik',
    avatar: '',
    weakness: ['feu', 'psy'],
  },
  {
    name: 'Ramoloss',
    type: 'psy',
    avatar: '',
    weakness: ['plante', 'eau'],
  }
]
