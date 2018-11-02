export class Pokemon {
  currentPosition: string;
  highScore: string;

  constructor(currentPosition: string, highScore: string) {
    this.currentPosition = currentPosition;
    this.highScore = highScore;
  }
}
