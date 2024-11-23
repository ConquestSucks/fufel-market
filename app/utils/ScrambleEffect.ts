class TextScramble {
    private el: HTMLElement;
    private chars: string;
    private frame: number;
    private queue: Array<{ from: string; to: string; start: number; end: number; char?: string }>;
    private frameRequest?: number;
    private resolve?: () => void;
  
    constructor(el: HTMLElement) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.frame = 0;
      this.queue = [];
      this.update = this.update.bind(this);
    }
  
    setText(newText: string): Promise<void> {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise<void>((resolve) => (this.resolve = resolve));
      this.queue = [];
  
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
  
      if (this.frameRequest) {
        cancelAnimationFrame(this.frameRequest);
      }
      this.frame = 0;
      this.update();
      return promise;
    }
  
    private update(): void {
      let output = '';
      let complete = 0;
  
      for (const item of this.queue) {
        const { from, to, start, end, char } = item;
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            item.char = this.randomChar();
          }
          output += `<span class="dud">${item.char}</span>`;
        } else {
          output += from;
        }
      }
  
      this.el.innerHTML = output;
  
      if (complete === this.queue.length) {
        this.resolve?.();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  
    private randomChar(): string {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }
  

  const phrases: string[] = [
    'Easy. Convenient. Profitable.',
    'Listings for every taste',
    'The best prices near you',
    'Sell what you don’t need quickly',
    'From furniture to electronics',
    'Your new phone is already waiting',
  ];
  

  export const ScrambleEffect = () => {
    const el = document.querySelector('.text') as HTMLElement;
    if (el) {
      const fx = new TextScramble(el);
    
      let counter = 0;
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 800);
        });
        counter = (counter + 1) % phrases.length;
      };
    
      next();
    }
  }
  
  