const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} titlePartId
 * @param {string} titlePartLabel
 * @returns {ContentElement}
 */
module.exports = (
	template = require("../template.twig"),
	elementId = "title-h3-gbnkTT",
	/*elementLabel = 'Heading H3',*/
	elementLabel = "H3 Überschrift",
	titlePartId = "title-h3-part-mJ0yli",
	/*titlePartLabel = 'Heading H3'*/
	titlePartLabel = "H3 Überschrift"
) =>
	cx.contentElement
		.withFile(template)
		.withElementId(elementId)
		.withLabel(elementLabel)
		.withIcon(Icon.TEXT)
		.withStyleConfigs(
			//
			require("../../../../configs/styles/text-color"),
			require("../../../../configs/styles/text-weight"),
			require("../../../../configs/styles/text-size-h3"),
			require("../../../../configs/styles/text-transform-title")
		)
		.withParts(cx.part.plainText.withId(titlePartId).withLabel(titlePartLabel));
