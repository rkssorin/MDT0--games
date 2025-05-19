const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('slots-finder-slots-view-dkKLoi')
    /*.withLabel('Slots view')*/
    .withLabel('Terminanzeige')
    .withCssClasses(
        cx.cssClass
            /*.withLabel('Automatic')*/
            .withLabel('Automatisch')
            .withCssClass('default-view'), 
        cx.cssClass
            /*.withLabel('Only day view')*/
            .withLabel('Nur Tagessicht')
            .withCssClass('day-view'),    
        cx.cssClass
            /*.withLabel('Only week view')*/
            .withLabel('Nur Wochensicht')
            .withCssClass('week-view'));
