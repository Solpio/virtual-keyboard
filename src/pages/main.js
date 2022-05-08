import CreateBlock from '../scripts/createblock';
import createData from '../scripts/createBundle';

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
  async function showButtons(obj) {
    await obj.then((result) => result.map((e) => {
      const line = CreateBlock('div', 'keyboard__buttons_line');
      e.map((elem) => {
        mas.push(elem);
        return line.append(elem.CreateButton());
      });
      return keyboard.append(line);
    }));
  }
  await showButtons(createData());
  textArea.focus();
  document.addEventListener('keydown', (e) => {
    textArea.blur();
    mas.map((button) => {
      if (button.buttonCode === e.code) {
        button.DispatchEvent();
        return console.log(e.code);
      }
      return 0;
    });
  });

  document.addEventListener('keyup', (e) => {
    textArea.focus();
    mas.map((button) => {
      if (button.buttonCode === e.code) {
        button.EndEvent();
        return console.log(e.code);
      }
      return 0;
    });
  });
};

export default MainCreate;
