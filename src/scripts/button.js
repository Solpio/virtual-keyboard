import CreateBlock from './createblock';

class Button {
  constructor(btn) {
    this.buttonCode = btn.code;
    this.button = btn;
  }

  CreateButton(lang, shift) {
    function createButtonBlock(code) {
      const block = CreateBlock('button', 'keyboard__button');
      if (code === 'ShiftLeft') {
        block.classList.add('keyboard__button--shift');
      }
      if (code === 'ShiftRight') {
        block.classList.add('keyboard__button--shift');
      }
      if (code === 'Space') {
        block.classList.add('keyboard__button--space');
      }
      if (code === 'ArrowLeft') {
        block.classList.add('keyboard__button--arrow');
      }
      if (code === 'ArrowDown') {
        block.classList.add('keyboard__button--arrow');
      }
      if (code === 'ArrowRight') {
        block.classList.add('keyboard__button--arrow');
      }
      if (code === 'ArrowUp') {
        block.classList.add('keyboard__button--arrow');
      }
      if (code === 'CapsLock') {
        block.classList.add('keyboard__button--caps');
      }
      if (code === 'Backspace') {
        block.classList.add('keyboard__button--backspace');
      }
      return block;
    }
    this.block = createButtonBlock(this.buttonCode);
    this.CreateEvent  ();
    this.SetSymbol(lang, shift);
    this.AppendSymbol();
    // this.SetEventListener();
    return this.block;
  }

  SetSymbol(lang, shift) {
    if (lang === 'eng') {
      if (shift) {
        this.symbol = this.button.lang.eng.shift.on;
      } else {
        this.symbol = this.button.lang.eng.shift.off;
      }
    } else if (lang === 'ru') {
      if (shift) {
        this.symbol = this.button.lang.ru.shift.on;
      } else {
        this.symbol = this.button.lang.ru.shift.off;
      }
    }
  }

  UpdateSymbol() {
    this.span.textContent = this.symbol;
  }

  AppendSymbol() {
    const span = CreateBlock('span', 'text');
    this.span = span;
    span.textContent = this.symbol;
    this.block.append(span);
  }

  CreateEvent() {
    function CreateEvent(code) {
      const event = new CustomEvent('buttonpressed', {
        detail: {
          keyCode: code,
        },
      });
      return event;
    }
    this.event = CreateEvent(this.buttonCode);
    return this.event;
  }

  DispatchEvent() {
    this.block.dispatchEvent(this.event);
  }

  EndEvent() {
    this.block.classList.remove('keyboard__button--active');
  }
}

export default Button;
