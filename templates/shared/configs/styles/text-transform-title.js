const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
	.withIdentifier("text-transform-tiel4266")
	/*.withLabel('Weight')*/
	.withLabel("Textwandlung")
	.withCssClasses(
		cx.cssClass
			/*.withLabel('Normal')*/
			.withLabel("Normal")
			.withCssClass("tt-normal"),
		cx.cssClass
			/*.withLabel('Bold')*/
			.withLabel("Großbuchstaben")
			.withCssClass("tt-uppercase"),
		cx.cssClass
			/*.withLabel('Light')*/
			.withLabel("Großschreibung")
			.withCssClass("tt-capitalize")
	);
