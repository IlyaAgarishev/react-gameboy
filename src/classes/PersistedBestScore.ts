class PersistedBestScore {
  private key: string;

  constructor() {
    this.key = "bestScore";
  }

  set(value: number) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  get() {
    const bestScore = localStorage.getItem(this.key);

    if (bestScore) {
      return JSON.parse(localStorage.getItem(this.key) as string);
    }
  }
}

export default new PersistedBestScore();
