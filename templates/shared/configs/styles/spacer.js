const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
	.withIdentifier("spacer-yijTs2")
	/*.withLabel('Size of spacing')*/
	.withLabel("Grösse des Abstands")
	.withCssClasses(
		cx.cssClass.withLabel("4 px").withCssClass("pt-1"),
		cx.cssClass.withLabel("8 px").withCssClass("pt-2"),
		cx.cssClass.withLabel("15 px").withCssClass("pt-1-5"),
		cx.cssClass.withLabel("30 px").withCssClass("pt-3-0"),
		cx.cssClass.withLabel("45 px").withCssClass("pt-4-5"),
		cx.cssClass.withLabel("60 px").withCssClass("pt-6-0")
	);
