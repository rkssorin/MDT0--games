import { formatSlot } from "./slot/slot.js";
import { formatDate, getWeekday } from "./utils/date-utils.js";
import { bookSlot } from "./api.js";

/**
 * @typedef {import("../prototype/slot-finder.js").Model} Model
 */

/**
 * Init summary view
 *
 * @param {Model} model
 * @param {HTMLElement} $element
 * @param {HTMLButtonElement} $bookButton
 */
export function initSummary(model, $element, $bookButton) {
  $bookButton?.addEventListener("click", () =>
    bookSlot(model.url, model.selectedSlot.get())
  );

  model.selectedSlot.onChange(() => {
    renderSummary(model, $element);
    if (model.selectedSlot.get()) {
      $bookButton.disabled = false;
    }
  });
}

/**
 * Render summary view
 *
 * @param {Model} model
 * @param {HTMLElement} $element
 */
function renderSummary(model, $element) {
  const slot = model.selectedSlot.get();
  if (slot === null) return;
  $element.innerHTML = `
    <p class="prefix-calendar">${getWeekday(model.locale, slot.from)}, ${formatDate(model.locale, slot.from)}</p>
    <p class="prefix-clock">${formatSlot(slot)}</p>
  `;
}
