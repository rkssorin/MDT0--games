require("./styles/styles.scss");

const { cx, SchemaVersion, Locale } = require("@bsi-cx/design-build");

module.exports = cx.design
	.withSchemaVersion(SchemaVersion.V_22_0)
	.withTitle("BSI CX Master Template - Website")
	.withAuthor("Design Team - BSI Business Systems Integration AG")
	.withDate("21.01.2022")
	.withDefaultLocale(Locale.EN)
	.withLocales(Locale.EN)
	.withContentElementGroups(
		cx.contentElementGroup.withGroupId("header-Eev4oq").withLabel("Header").withContentElements(require("./../shared/content-elements/logo"), require("./../shared/content-elements/header-image")),
		cx.contentElementGroup
			.withGroupId("layout-EhFpQ7")
			.withLabel("Layout")
			.withContentElements(
				require("./../shared/content-elements/layout/col-one"),
				require("./../shared/content-elements/layout/col-two"),
				require("./../shared/content-elements/layout/col-three"),
				require("./../shared/content-elements/layout/col-four"),
				require("./../shared/content-elements/layout/spacer")
			),
		cx.contentElementGroup
			.withGroupId("headings-J9rRcv")
			/*.withLabel('Headings')*/
			.withLabel("Überschriften")
			.withContentElements(require("./../shared/content-elements/base/h1"), require("./../shared/content-elements/base/h2"), require("./../shared/content-elements/base/h3")),
		cx.contentElementGroup
			.withGroupId("content-JFLFHv")
			/*.withLabel('Content')*/
			.withLabel("Inhalt")
			.withContentElements(
				require("./../shared/content-elements/base/text"),
				require("./../shared/content-elements/base/figure"),
				require("./../shared/content-elements/base/banner"),
				require("./../shared/content-elements/base/button"),
				require("./../shared/content-elements/base/card"),
				require("./../shared/content-elements/base/accordion"),
				require("./../shared/content-elements/base/news-snippet"),
				require("./../shared/content-elements/base/table"),
				require("./../shared/content-elements/base/video"),
				require("./../shared/content-elements/base/social-media-follow"),
				require("./../shared/content-elements/base/social-media-share"),
				require("./../shared/content-elements/advanced/webcam-image-upload"),
				require("./../shared/content-elements/base/slot-finder"),
				require("./../shared/content-elements/base/chart"),
				require("./../shared/content-elements/base/html")
			),
		cx.contentElementGroup
			.withGroupId("forms-NjbmnQ")
			/*.withLabel('Forms')*/
			.withLabel("Formular")
			.withContentElements(
				require("./../shared/content-elements/form/form-container"),
				require("./../shared/content-elements/form/multi-column"),
				require("./../shared/content-elements/form/form-field"),
				require("./../shared/content-elements/form/form-field-tel"),
				require("./../shared/content-elements/form/text-area"),
				require("./../shared/content-elements/form/select"),
				require("./../shared/content-elements/form/checkbox"),
				require("./../shared/content-elements/form/radio"),
				require("./../shared/content-elements/form/poll"),
				require("./../shared/content-elements/form/recaptcha")
			)
	)
	.withWebsite(cx.website.withMaxNavigationLevel(2).withIncludes(require("./includes/navigation"), require("./includes/logo"), require("./includes/header"), require("./includes/page"), require("./includes/footer")));
