const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
	.withIdentifier("col-width-pv2OCc")
	/*.withLabel('Layout width')*/
	.withLabel("Breite des Layouts")
	.withCssClasses(
		cx.cssClass
			/*.withLabel('Fixed width')*/
			.withLabel("Slim")
			.withCssClass("container-slim"),
		cx.cssClass
			/*.withLabel('Fixed width')*/
			.withLabel("Feste Breite")
			.withCssClass("container"),
		cx.cssClass
			/*.withLabel('Full width')*/
			.withLabel("Volle Breite")
			.withCssClass("container-fluid")
	);
