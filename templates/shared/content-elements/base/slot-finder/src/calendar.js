import flatpickr from "flatpickr";
import "flatpickr/dist/l10n/de.js";
import "flatpickr/dist/l10n/fr.js";
import "flatpickr/dist/l10n/it.js";
import { fetchSlotsOfMonth } from "./api.js";
import { isSlotOnDay } from "./slot/slot.js";

/**
 * Init calendar
 *
 * @param {import("../prototype/slot-finder.js").Model} model
 * @param {HTMLElement} $element
 */
export function initCalendar(model, $element) {
  $element.innerHTML = ''; // remove static flatpickr instance used in content-editor template
  const calendar = flatpickr($element, {
    locale: model.locale,
    inline: true,
    minDate: 'today',
    enable: [],
    onChange: dates => {
      if (dates && dates.length > 0) {
        model.selectedDate.set(new Date(dates[0]));
      }
    },
    onMonthChange: () => fetchSlots(),
    onYearChange: () => fetchSlots(),
  });

  async function fetchSlots() {
    const month = new Date(calendar.currentYear, calendar.currentMonth);
    const slots = await fetchSlotsOfMonth(model.url, month);
    calendar.set("enable", [day => slots.some(slot => isSlotOnDay(slot, day))]);
    model.slots.set(slots);
  }

  fetchSlots().then(() => calendar.setDate(model.selectedDate.get()));
}
