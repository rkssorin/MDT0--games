const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @returns {ContentElement}
 */
module.exports = (
	template = require("../template.twig"),
	elementId = "spacer-jarY9b",
	/*elementLabel = 'Spacing',*/
	elementLabel = "Abstand"
) =>
	cx.contentElement
		//
		.withFile(template)
		.withElementId(elementId)
		.withLabel(elementLabel)
		.withIcon(Icon.DIVIDER)
		.withStyleConfigs(
			//
			require("../../../../configs/styles/spacer"),
			require("../../../../configs/styles/divider")
		);
