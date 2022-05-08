class Keyboard {
  constructor(lang, shift, area) {
    this.lang = lang;
    this.shift = shift;
    this.area = area;
  }

  SaveLang() {
    window.localStorage.setItem('keyboard-language', this.lang);
  }

  SwithLang() {
    if (this.lang === 'ru') {
      this.lang = 'eng';
    } else {
      this.lang = 'ru';
    }
    this.UpdateButtons();
    this.SaveLang();
  }

  SwithShift() {
    if (this.shift) {
      this.shift = false;
    } else {
      this.shift = true;
    }
    this.UpdateButtons();
  }

  EnableShift() {
    if (!this.shift) {
      this.shift = true;
    }
    this.UpdateButtons();
  }

  DisableShift() {
    if (this.shift) {
      this.shift = false;
    }
    this.UpdateButtons();
  }

  SetupButtons(buttons) {
    this.buttons = buttons;
  }

  UpdateButtons() {
    this.buttons.map((btn) => {
      btn.SetSymbol(this.lang, this.shift);
      btn.UpdateSymbol();
      return 0;
    });
  }

  SetupEventListeners() {
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
          if (
            key.buttonCode === 'ShiftLeft' || key.buttonCode === 'ShiftRight'
          ) {
            this.EnableShift();
          }
          if (key.buttonCode === 'ChangeLanguage') {
            this.SwithLang();
          }
          if (key.buttonCode === 'CapsLock') {
            this.SwithShift();
          }
        } else {
          this.area.value += key.symbol;
        }
      });
      key.block.addEventListener('mousedown', () => {
        key.block.dispatchEvent(key.event);
      });
      key.block.addEventListener('mouseup', () => {
        key.block.classList.remove('keyboard__button--active');
        if (
          key.buttonCode !== 'ShiftLeft' && key.buttonCode !== 'ShiftRight' && key.buttonCode !== 'CapsLock'
        ) {
          this.DisableShift();
        }
      });
      return 0;
    });

    document.addEventListener('keydown', (e) => {
      this.area.blur();
      this.buttons.map((button) => {
        if (button.buttonCode === e.code) {
          button.DispatchEvent();
          return 0;
        }
        return 0;
      });
    });

    document.addEventListener('keyup', (e) => {
      this.area.focus();
      this.buttons.map((button) => {
        if (button.buttonCode === e.code) {
          button.EndEvent();
          if (
            button.buttonCode === 'ShiftLeft' || button.buttonCode === 'ShiftRight'
          ) {
            this.DisableShift();
          }
          return 0;
        }
        return 0;
      });
    });
  }
}

export default Keyboard;
