import CreateBlock from './createblock';

class Button {
  constructor(btn) {
    this.buttonCode = btn.code;
    this.button = btn;
    this.symbol = this.button.lang.eng.shift.off;
  }

  CreateButton() {
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
    this.SetSymbol();
    this.SetEventListener();
    return this.block;
  }

  SetSymbol() {
    const span = CreateBlock('span', 'text');
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

  SetEventListener() {
    this.CreateEvent();
    this.block.addEventListener('buttonpressed', () => {
      this.block.classList.add('keyboard__button--active');

      if (this.button.special) {
        if (this.buttonCode === 'Backspace') {
          document.querySelector('.area').value = document.querySelector('.area').value.slice(0, -1); // FIX QUERY SELECTOR;
        }
        if (this.buttonCode === 'Tab') {
          document.querySelector('.area').value += ' '; // FIX QUERY SELECTOR;
        }
        if (this.buttonCode === 'Enter') {
          document.querySelector('.area').value += '\n'; // FIX QUERY SELECTOR;
        }
      } else {
        document.querySelector('.area').value += this.symbol; // FIX QUERY SELECTOR;
      }
    });
    this.block.addEventListener('mousedown', () => {
      this.block.dispatchEvent(this.event);
    });
    this.block.addEventListener('mouseup', () => {
      this.block.classList.remove('keyboard__button--active');
    });
  }

  DispatchEvent() {
    this.block.dispatchEvent(this.event);
  }

  EndEvent() {
    this.block.classList.remove('keyboard__button--active');
  }
}

export default Button;
