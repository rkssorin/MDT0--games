require("./styles.scss");
const { cx, Icon } = require("@bsi-cx/design-build");
const { contentElements } = require("../../content-elements/base");
const { formElements } = require("../../content-elements/form");

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element
	.withFile(require("./template.twig"))
	.withElementId(`form-container-game-4244`)
	/*.withLabel('Form')*/
	.withLabel("Formular GAME")
	.withIcon(Icon.ONE_COLUMN)
	.withStyleConfigs(
		require("../../configs/styles/form-width"),
		require("../../configs/styles/form-layout"),
		require("../../configs/styles/border-radius"),
		require("../../configs/styles/form-label"),
		require("../../configs/styles/form-color"),
		require("../../configs/styles/form-btn-layout"),
		require("../../configs/styles/form-btn-alignment")
	)
	.withParts(
		cx.part.form
			.withId("form-container-part-track-event")
			/*.withLabel('Form'))*/
			.withLabel("Formular Track Event"),
		cx.part.form
			.withId("form-container-part-6eHZEX")
			/*.withLabel('Form'))*/
			.withLabel("Formular")
	)
	.withDropzones(
		cx.dropzone
			.withDropzone("form-container-dropzone-game-5655")
			.withAllowedElements(
				...formElements,
				require("../../content-elements/form/multi-column"),
				...contentElements,
				require("../../content-elements/layout/col-one"),
				require("../../content-elements/layout/col-two"),
				require("../../content-elements/layout/col-three"),
				require("../../content-elements/layout/col-four"),
				require("../../content-elements/layout/spacer")
			)
	);
