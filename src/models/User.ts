interface UserProps {
    name?: string;
    age?: number;
}

type Callback = () => void // Type alias, so we don't need to clutter our code with an empty function

export class User {
  events: { [key: string]: Callback[]} = {}

  constructor(private data: UserProps) {}

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  on(eventName: string, callback: Callback): void {
     const handlers = this.events[eventName] || [];
     handlers.push(callback)
     this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach(callback => {
      callback();
    })
  }


}
