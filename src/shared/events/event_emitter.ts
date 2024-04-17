export class EventEmitter {
  private dispatcher: EventTarget;

  constructor() {
    this.dispatcher = document.createElement('div');
  }

  protected emitEvent<T>(eventName: string, detail?: T) {
    const event = new CustomEvent<T>(eventName, { detail });
    this.dispatcher.dispatchEvent(event);
  }

  protected onEvent<T>(eventName: string, callback: (detail: T) => void) {
    const listener = (event: Event) => {
      const customEvent = event as CustomEvent<T>;
      callback(customEvent.detail);
    };
    this.dispatcher.addEventListener(eventName, listener);
    return () => this.dispatcher.removeEventListener(eventName, listener);
  }
}
