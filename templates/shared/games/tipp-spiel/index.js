require("./styles.scss");
const { cx, Icon } = require("@bsi-cx/design-build");
const { contentElements } = require("../../content-elements/base");
const { formElements } = require("../../content-elements/form/index");

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element
	.withFile(require("./template.twig"))
	.withElementId(`tipp-spiel-RKS1`)
	/*.withLabel('Form')*/
	.withLabel("Tipp Spiel")
	.withIcon(Icon.ONE_COLUMN)
	.withStyleConfigs(
		require("../../configs/styles/form-width"),
		require("../../configs/styles/form-layout"),
		require("../../configs/styles/border-radius"),
		require("../../configs/styles/form-color"),
		require("../../configs/styles/form-btn-layout"),
		require("../../configs/styles/form-label"),
		require("../../configs/styles/form-info-text"),
		require("../../configs/styles/form-btn-alignment")
	)
	.withParts(
		cx.part.form
			.withId("tipp-spiel-part-6eHZEX")
			/*.withLabel('Form'))*/
			.withLabel("Formular")
	)
	.withDropzones(
		cx.dropzone
			.withDropzone("tipp-spiel-dropzone-zsY6UI")
			.withAllowedElements(
				...formElements,
				require("../../content-elements/form/multi-column"),
				...contentElements,
				require("../../content-elements/layout/col-one"),
				require("../../content-elements/layout/col-two"),
				require("../../content-elements/layout/col-three"),
				require("../../content-elements/layout/col-four"),
				require("../../content-elements/layout/spacer")
			),
		cx.dropzone.withDropzone("tipp-spiel-dropzone-btn-left-Q2L32x").withAllowedElements(require("../../content-elements/base/button")),
		cx.dropzone.withDropzone("tipp-spiel-dropzone-btn-right-uIS6Nj").withAllowedElements(require("../../content-elements/base/button")),
		cx.dropzone.withDropzone("tipp-spiel-dropzone-bottom-cJFI8U").withAllowedElements(
			//
			...contentElements,
			require("../../content-elements/layout/col-one"),
			require("../../content-elements/layout/col-two"),
			require("../../content-elements/layout/col-three"),
			require("../../content-elements/layout/col-four"),
			require("../../content-elements/layout/spacer")
		)
	);
