require("./styles.scss");

const { cx, Icon } = require("@bsi-cx/design-build");
const { contentElements } = require("../../base");

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element
	.withFile(require("./template.twig"))
	.withElementId("col-two-ILRIL0")
	/*.withLabel('2 Columns')*/
	.withLabel("2 Spalten")
	.withIcon(Icon.TWO_COLUMNS)
	.withStyleConfigs(
		require("../../../configs/styles/col-width"),
		require("../../../configs/styles/col-two-ratio"),
		require("../../../configs/styles/col-two-order"),
		require("../../../configs/styles/col-spacing"),
		require("../../../configs/styles/col-gap"),
		require("../../../configs/styles/col-alignment"),
		require("../../../configs/styles/col-mobile"),
		require("../../../configs/styles/background-color"),
		require("../../../configs/styles/color-gradient"),
		require("../../../configs/styles/background-opacity"),
		require("../../../configs/styles/col-border")
	);
// .withDropzones(
// 	cx.dropzone //
// 		.withDropzone("col-two-dropzone-1-aDxFmN")
// 		.withAllowedElements(
// 			//
// 			element,
// 			require("../col-one"),
// 			require("../col-three"),
// 			require("../col-four"),
// 			require("../spacer"),
// 			...contentElements,
// 			require("../../base/banner"),
// 			require("../../form/form-container")
// 		),
// 	cx.dropzone
// 		//
// 		.withDropzone("col-two-dropzone-2-BSeopF")
// 		.withAllowedElements(
// 			//
// 			element,
// 			require("../col-one"),
// 			require("../col-three"),
// 			require("../col-four"),
// 			require("../spacer"),
// 			...contentElements,
// 			require("../../base/banner"),
// 			require("../../form/form-container")
// 		)
// );
