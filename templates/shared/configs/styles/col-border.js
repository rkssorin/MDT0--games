const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
	.withIdentifier("col-border-hj5s0")
	/*.withLabel('Layout width')*/
	.withLabel("Column Border")
	.withCssClasses(
		cx.cssClass
			/*.withLabel('Fixed width')*/
			.withLabel("Yes")
			.withCssClass("col_border"),
		cx.cssClass
			/*.withLabel('Fixed width')*/
			.withLabel("No")
			.withCssClass("no_col_border")
	);
