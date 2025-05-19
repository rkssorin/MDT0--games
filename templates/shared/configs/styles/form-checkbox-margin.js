const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-checkbox-margin-TYlke6')
  /*.withLabel('Spacing')*/
  .withLabel('Abstand nach Checkbox')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Show spacing after checkbox')*/
      .withLabel('Ja')
      .withCssClass('bsi-checkbox-spacing-visible'),
    cx.cssClass
      /*.withLabel('Hide spacing after checkbox')*/
      .withLabel('Nein')
      .withCssClass('bsi-checkbox-spacing-hide'));