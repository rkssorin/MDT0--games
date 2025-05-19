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
	elementId = "title-h2-KNs10G",
	/*elementLabel = 'Heading H2',*/
	elementLabel = "H2 Überschrift",
	titlePartId = "title-h2-part-vD6omt",
	/*titlePartLabel = 'Heading H2'*/
	titlePartLabel = "H2 Überschrift"
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
			require("../../../../configs/styles/text-size-h2"),
			require("../../../../configs/styles/text-transform-title")
		)
		.withParts(cx.part.plainText.withId(titlePartId).withLabel(titlePartLabel));
