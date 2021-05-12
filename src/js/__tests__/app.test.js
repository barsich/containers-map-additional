import Settings from '../app';

test('creating settings', () => {
  expect(new Settings()).toBeInstanceOf(Settings);
});

test('add two user settings', () => {
  const settings = new Settings();
  settings.setSettings('theme', 'gray');
  settings.setSettings('difficulty', 'nightmare');
  expect(settings.userSettings.size).toBe(2);
});

test('getSettings', () => {
  const settings = new Settings();
  settings.setSettings('theme', 'gray');
  settings.setSettings('difficulty', 'nightmare');
  expect(settings.getSettings()).toEqual(
    new Map([
      ['theme', 'gray'],
      ['music', 'trance'],
      ['difficulty', 'nightmare'],
    ]),
  );
});
