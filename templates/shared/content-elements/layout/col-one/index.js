const { cx, Icon } = require("@bsi-cx/design-build");
const { advancedElements } = require("../../advanced");
const { contentElements } = require("../../base");
const { gameElements } = require("../../../games");

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element
  .withElementId("col-one-l2ZclN")
  .withFile(require("./template.twig"))
  /*.withLabel('1 Column')*/
  .withLabel("1 Spalte")
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(
    require("../../../configs/styles/col-width"),
    require("../../../configs/styles/col-spacing"),
    require("../../../configs/styles/col-gap"),
    require("../../../configs/styles/col-alignment"),
    require("../../../configs/styles/background-color"),
    require("../../../configs/styles/color-gradient"),
    require("../../../configs/styles/background-opacity"),
    require("../../../configs/styles/col-border")
  )
  .withDropzones(
    cx.dropzone.withDropzone("col-one-dropzone-OzGBbS").withAllowedElements(
      //
      element,
      require("../col-one"),
      require("../col-two"),
      require("../col-three"),
      require("../col-four"),
      require("../spacer"),
      require("../../base/banner"),
      ...contentElements,
      ...advancedElements,
      ...gameElements,
      require("../../form/form-container")
    )
  );
