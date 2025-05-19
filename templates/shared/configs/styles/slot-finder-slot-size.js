const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('slots-finder-slot-size-fjRdbB')
    /*.withLabel('Slots view')*/
    .withLabel('Kalenderanzeige')
    .withCssClasses(
        cx.cssClass
            /*.withLabel('Automatic')*/
            .withLabel('Start- und Endzeit')
            .withCssClass('default-slots'), 
        cx.cssClass
            /*.withLabel('Only starting times')*/
            .withLabel('Nur Startzeiten')
            .withCssClass('small-slots'));
