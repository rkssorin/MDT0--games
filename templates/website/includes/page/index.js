const { cx, PageInclude } = require("@bsi-cx/design-build");
const { layoutElements } = require("./../../../shared/content-elements/layout/");

/**
 * @type {PageInclude}
 */
module.exports = cx.pageInclude
	.withName("Content page template")
	.withEditable(true)
	.withFile(require("./template.twig"))
	.withDropzones(
		cx.dropzone.withDropzone("page-header-dropzone-TgF6e2").withMaxAllowedElements(1).withAllowedElements(require("./../../../shared/content-elements/header-image")),
		cx.dropzone.withDropzone("page-content-dropzone-JPzHJO").withAllowedElements(require("./../../../shared/content-elements/base/html"), ...layoutElements)
	);
