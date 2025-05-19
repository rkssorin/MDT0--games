const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-poll-6WCmqu')
  /*.withLabel('Type of poll')*/
  .withLabel('Umfrageart')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('NPS survey')*/
      .withLabel('NPS-Umfrage')
      .withCssClass('bsi-poll-nps'),
    cx.cssClass
      /*.withLabel('Star rating')*/
      .withLabel('Sternebewertung')
      .withCssClass('bsi-poll-star'));