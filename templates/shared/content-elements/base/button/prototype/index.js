const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementPartId
 * @param {string} elementPartLabel
 * @param {string} iconPartId
 * @param {string} iconPartLabel
 * @returns {ContentElement}
 */
module.exports = (
	template = require("../template.twig"),
	elementId = "button-new-v3cFFn",
	elementLabel = "Button",
	elementPartId = "button-part-0Cq8Xc",
	elementPartLabel = "Button",
	iconPartId = "button-part-icon-f1TI9P",
	/*iconPartLabel = 'Icon identifier (select an icon here: https://icons.getbootstrap.com/ and enter its name, e.g. "arrow-right")'*/
	iconPartLabel = 'Icon Bezeichner (wählen Sie hier ein Icon aus: https://icons.getbootstrap.com/ und geben Sie den Namen ein, z.B. "arrow-right")'
) =>
	cx.contentElement
		.withFile(template)
		.withElementId(elementId)
		.withLabel(elementLabel)
		.withIcon(Icon.MEGAPHONE)
		.withStyleConfigs(
			require("../../../../configs/styles/btn-icon"),
			require("../../../../configs/styles/btn-color"),
			require("../../../../configs/styles/btn-layout"),
			require("../../../../configs/styles/btn-size"),
			require("../../../../configs/styles/btn-width"),
			require("../../../../configs/styles/border-radius"),
			require("../../../../configs/styles/btn-letter-case")
		)
		.withParts(cx.part.link.withId(elementPartId).withLabel(elementPartLabel), cx.part.plainText.withId(iconPartId).withLabel(iconPartLabel));
