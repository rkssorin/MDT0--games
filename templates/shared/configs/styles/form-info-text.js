const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('form-info-nJ0575')
    .withLabel('Info-Text Position')
    .withCssClasses(
        cx.cssClass
            .withLabel('Unterhalb des Labels')
            .withCssClass('bsi-form-info-as-text'),
        cx.cssClass
            .withLabel('Als Tooltip')
            .withCssClass('bsi-form-info-as-tooltip'));