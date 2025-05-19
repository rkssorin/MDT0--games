const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
	.withIdentifier("icon-position-bf83j")
	/*.withLabel('Alignment')*/
	.withLabel("Ausrichtung")
	.withCssClasses(
		cx.cssClass
			/*.withLabel('Align left')*/
			.withLabel("Linksbündig")
			.withCssClass("icon-position-left"),
		cx.cssClass
			/*.withLabel('Center')*/
			.withLabel("Zentriert")
			.withCssClass("icon-position-center"),
		cx.cssClass
			/*.withLabel('Align right')*/
			.withLabel("Rechtsbündig")
			.withCssClass("icon-position-right")
	);
