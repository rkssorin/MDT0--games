
/**
 * @template T
 * @callback onChangeCallback
 * @param {T} item
 * @param {T} oldItem
 */

/**
 * Observable
 *
 * @template T
 * @typedef {Object} Observable
 * @property {() => T} get
 * @property {(newItem: T) => void} set
 * @property {(callback: onChangeCallback<T>) => void} onChange
 */

/**
 * Create an observable
 *
 * @template T
 * @param {T} item
 * @returns {Observable<T>}
 */
export default function Observable(item) {
  /** @type {onChangeCallback<T>[]} */
  const listeners = [];
  return {
    get: () => item,
    set: (newItem) => {
      if (item === newItem) return;
      const oldItem = item;
      item = newItem;
      listeners.forEach((notify) => notify(newItem, oldItem));
    },
    onChange: (callback) => {
      listeners.push(callback);
      callback(item, item);
    },
  };
}