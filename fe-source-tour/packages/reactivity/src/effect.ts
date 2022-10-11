

let activeEffect: Function = () => { };
export function getActiveEffect(): Function {
  return activeEffect;
}

export function effect(fn: Function) {
  activeEffect = fn;
  fn();
}