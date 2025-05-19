require("./styles.scss");

const contentElement = require("../base/figure/prototype");

module.exports = contentElement(
	require("./template.twig"),
	"logo-right-pnrt42",
	"Logo-right",
	"logo-part-image-1rKWxD",
	/*'Logo image',*/
	"Logo Bild",
	"logo-part-text-ySZsrw",
	/*'Logo text'*/
	"Logo Text"
).withStyleConfigs();
