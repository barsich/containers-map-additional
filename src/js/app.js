export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
    this.themes = ['dark', 'light', 'gray'];
    this.music = ['trance', 'pop', 'rock', 'chillout', 'off'];
    this.difficulties = ['easy', 'normal', 'hard', 'nightmare'];
  }

  setSettings(name, value) {
    this.userSettings.set(name, value);
  }

  getSettings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
