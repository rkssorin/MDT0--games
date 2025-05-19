/**
 * Creates Element from HTML template string
 *
 * @param {String} html
 * @returns {Element}
 */
export function Template(html) {
  const $template = document.createElement("div");
  $template.innerHTML = html;
  return $template.firstElementChild || $template;
}
