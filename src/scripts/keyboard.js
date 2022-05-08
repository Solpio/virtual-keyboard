class Keyboard {
  constructor(lang, shift, area) {
    this.lang = lang;
    this.shift = shift;
    this.area = area;
  }

  SwithLang() {
    if (this.lang === 'ru') {
      this.lang = 'eng';
    } else {
      this.lang = 'ru';
    }
  }

  SwithShift() {
    if (this.shift) {
      this.shift = false;
    } else {
      this.shift = true;
    }
  }

  SetupButtons(buttons) {
    this.buttons = buttons;
  }

  SetupEventListeners() {
    console.log(this.buttons);
    this.buttons.map((key) => {
      key.block.addEventListener('buttonpressed', () => {
        key.block.classList.add('keyboard__button--active');

        if (key.button.special) {
          if (key.buttonCode === 'Backspace') {
            this.area.value = this.area.value.slice(0, -1);
          }
          if (key.buttonCode === 'Tab') {
            this.area.value += ' ';
          }
          if (key.buttonCode === 'Enter') {
            this.area.value += '\n';
          }
        } else {
          this.area.value += key.symbol;
          console.log(key);
        }
      });
      key.block.addEventListener('mousedown', () => {
        key.block.dispatchEvent(key.event);
      });
      key.block.addEventListener('mouseup', () => {
        key.block.classList.remove('keyboard__button--active');
      });
      return 0;
    });

    document.addEventListener('keydown', (e) => {
      this.area.blur();
      this.buttons.map((button) => {
        if (button.buttonCode === e.code) {
          button.DispatchEvent();
          return console.log(e.code);
        }
        return 0;
      });
    });

    document.addEventListener('keyup', (e) => {
      this.area.focus();
      this.buttons.map((button) => {
        if (button.buttonCode === e.code) {
          button.EndEvent();
          return console.log(e.code);
        }
        return 0;
      });
    });
  }
}

export default Keyboard;
