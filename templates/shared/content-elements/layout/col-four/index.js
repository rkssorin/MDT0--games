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
	.withElementId("col-four-yFAGKM")
	/*.withLabel('4 Columns')*/
	.withLabel("4 Spalten")
	.withIcon(Icon.THREE_COLUMNS)
	.withStyleConfigs(
		require("../../../configs/styles/col-width"),
		require("../../../configs/styles/col-spacing"),
		require("../../../configs/styles/col-gap"),
		require("../../../configs/styles/col-alignment"),
		require("../../../configs/styles/col-mobile"),
		require("../../../configs/styles/background-color"),
		require("../../../configs/styles/color-gradient"),
		require("../../../configs/styles/background-opacity"),
		require("../../../configs/styles/col-border")
	)
	.withDropzones(
		cx.dropzone.withDropzone("col-four-dropzone-1-CKCyLC").withAllowedElements(
			//
			element,
			require("../col-one"),
			require("../col-two"),
			require("../col-three"),
			require("../spacer"),
			require("../../form/form-container"),
			require("../../../games/tipp-spiel"),
			require("../../base/banner"),
			...contentElements
		),
		cx.dropzone.withDropzone("col-four-dropzone-2-4UemGW").withAllowedElements(
			//
			element,
			require("../col-one"),
			require("../col-two"),
			require("../col-three"),
			require("../spacer"),
			require("../../form/form-container"),
			require("../../../games/tipp-spiel"),
			require("../../base/banner"),
			...contentElements
		),
		cx.dropzone.withDropzone("col-four-dropzone-3-Iuejt6").withAllowedElements(
			//
			element,
			require("../col-one"),
			require("../col-two"),
			require("../col-three"),
			require("../spacer"),
			require("../../form/form-container"),
			require("../../../games/tipp-spiel"),
			require("../../base/banner"),
			...contentElements
		),
		cx.dropzone.withDropzone("col-four-dropzone-4-HVE6UW").withAllowedElements(
			//
			element,
			require("../col-one"),
			require("../col-two"),
			require("../col-three"),
			require("../spacer"),
			require("../../form/form-container"),
			require("../../../games/tipp-spiel"),
			require("../../base/banner"),
			...contentElements
		)
	);
