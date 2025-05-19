const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('slots-finder-flow-fGBdiu')
    /*.withLabel('Slots view')*/
    .withLabel('Ausrichtung')
    .withCssClasses(
        cx.cssClass
            /*.withLabel(Horizontal')*/
            .withLabel('Horizontal')
            .withCssClass('default-flow'),    
        cx.cssClass
            /*.withLabel('Vertical')*/
            .withLabel('Vertikal')
            .withCssClass('column-flow'));
