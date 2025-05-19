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
	.withElementId("col-three-MEOl1p")
	/*.withLabel('3 Columns')*/
	.withLabel("3 Spalten")
	.withIcon(Icon.THREE_COLUMNS)
	.withStyleConfigs(
		require("../../../configs/styles/col-width"),
		require("../../../configs/styles/col-three-ratio"),
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
		cx.dropzone.withDropzone("col-three-dropzone-1-gZDmPP").withAllowedElements(
			//
			element,
			require("../col-one"),
			require("../col-two"),
			require("../col-four"),
			require("../spacer"),
			...contentElements,
			require("../../base/banner"),
			require("../../form/form-container"),
			require("../../../games/tipp-spiel")
		),
		cx.dropzone.withDropzone("col-three-dropzone-2-9kRnnj").withAllowedElements(
			//
			element,
			require("../col-one"),
			require("../col-two"),
			require("../col-four"),
			require("../spacer"),
			...contentElements,
			require("../../base/banner"),
			require("../../form/form-container")
		),
		cx.dropzone.withDropzone("col-three-dropzone-3-M3XKDm").withAllowedElements(
			//
			element,
			require("../col-one"),
			require("../col-two"),
			require("../col-four"),
			require("../spacer"),
			...contentElements,
			require("../../base/banner"),
			require("../../form/form-container")
		)
	);
