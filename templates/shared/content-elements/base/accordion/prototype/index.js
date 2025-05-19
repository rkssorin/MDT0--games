require('./styles.scss');

const {cx, Icon, Version} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} titlePartId
 * @param {string} titlePartLabel
 * @param {string} contentDropzoneId
 * @returns {ContentElement}
 */
module.exports = (
    template = require('../template.twig'),
    elementId = 'accordion-OowSb3',
    /*elementLabel = 'Accordion',*/
    elementLabel = 'Akkordion',
    titlePartId = 'accordion-title-74AGOw',
    /*titlePartLabel = 'Title',*/
    titlePartLabel = 'Titel',
    contentDropzoneId = 'accordion-content-dropzone-O93IRR'
) => cx
    .contentElement
    .withFile(template)
    .withMinVersion(Version.CX_1_3)
    .withElementId(elementId)
    .withLabel(elementLabel)
    .withIcon(Icon.DROPDOWN)
    .withStyleConfigs(
        require('../../../../configs/styles/accordion-active')
    )
    .withParts(
        cx.part.plainText
            .withId(titlePartId)
            .withLabel(titlePartLabel))
    .withDropzones(
        cx.dropzone
            .withDropzone(contentDropzoneId)
            .withAllowedElements(   
                require('../../../base/h1'),
                require('../../../base/h2'),
                require('../../../base/h3'),
                require('../../../base/text'),
                require('../../../base/button'),
                require('../../../base/figure'),
                require('../../../base/card'),
                require('../../../base/table'),
                require('../../../base/video'),
                require('../../../base/social-media-share'),
                require('../../../base/social-media-follow'),
                require('../../../base/chart'),
                require('../../../base/html'),
                require('../../../layout/spacer')
            ));