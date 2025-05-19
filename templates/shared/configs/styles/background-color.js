const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
	.withIdentifier("background-color-KJRfob")
	/*.withLabel('Background color')*/
	.withLabel("Hintergrundfarbe")
	.withCssClasses(
		cx.cssClass
			/*.withLabel('Transparent')*/
			.withLabel("Transparent")
			.withCssClass("bsi-bg-color-transparent"),
		// cx.cssClass
		// 	/*.withLabel('Primary color')*/
		// 	.withLabel("Primärfarbe")
		// 	.withCssClass("bsi-bg-color-primary"),
		// cx.cssClass
		//   /*.withLabel('Secondary color')*/
		//   .withLabel('Sekundärfarbe')
		//   .withCssClass('bsi-bg-color-secondary'),
		// cx.cssClass
		//   /*.withLabel('Tertiary color')*/
		//   .withLabel('Tertiärfarbe')
		//   .withCssClass('bsi-bg-color-tertiary'),
		cx.cssClass
			/*.withLabel('Dark')*/
			.withLabel("Grau")
			.withCssClass("bsi-bg-color-grau")
	);
