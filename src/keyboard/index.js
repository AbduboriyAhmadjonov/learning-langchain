import { Markup } from 'telegraf';

export const buttons = {
  login: Markup.keyboard([[Markup.button.callback('Login', 'LOGIN')]]).resize(),

  mainMenu: Markup.keyboard([
    [
      Markup.button.callback('📊 View Hisotory', 'VIEW_HISOTORY'),
      Markup.button.callback('⚙️ Settings', 'SETTINGS'),
    ],
  ]).resize(),

  submitKeyboard: Markup.keyboard([['✅ Submit']]).resize(),

  cancelKeyboard: Markup.keyboard([['❌ Cancel']]).resize(),

  removeKeyboard: Markup.removeKeyboard(),
};
