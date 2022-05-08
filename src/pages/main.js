import CreateBlock from '../scripts/createblock';
import createData from '../scripts/createBundle';
import Keyboard from '../scripts/keyboard';

const MainCreate = async function CreatePage() {
  const { body } = document;
  const main = CreateBlock('main', 'main');
  const mainWrapper = CreateBlock('div', 'main__wrapper');

  const textArea = CreateBlock('textarea', 'area', 'textarea');
  const keyboard = CreateBlock('div', 'keyboard');
  const keyboardWrapper = CreateBlock('div', 'keyboard__wrapper');

  main.append(mainWrapper);
  mainWrapper.append(textArea);
  mainWrapper.append(keyboard);
  keyboard.append(keyboardWrapper);
  body.append(main);
  const mas = [];
  const savedLanguage = window.localStorage.getItem('keyboard-language');
  const objKeyboard = savedLanguage ? new Keyboard(savedLanguage, false, textArea) : new Keyboard('eng', false, textArea);
  async function showButtons(obj) {
    await obj.then((result) => result.map((e) => {
      const line = CreateBlock('div', 'keyboard__buttons_line');
      e.map((elem) => {
        mas.push(elem);
        return line.append(elem.CreateButton(objKeyboard.lang, objKeyboard.shift));
      });
      return keyboard.append(line);
    }));
  }
  await showButtons(createData(objKeyboard.lang, objKeyboard.shift));
  objKeyboard.SetupButtons(mas);
  objKeyboard.SetupEventListeners();
  textArea.focus();
};

export default MainCreate;
