const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
	//
	.withIdentifier("divider-d83di3")
	.withLabel("Trenner")
	.withCssClasses(
		//
		cx.cssClass.withLabel("ohne Trenner").withCssClass("default"),
		cx.cssClass.withLabel("als Trenner 1px").withCssClass("divider1px"),
		cx.cssClass.withLabel("als Trenner 2px").withCssClass("divider2px")
	);
