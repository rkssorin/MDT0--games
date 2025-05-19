const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} newsPartId
 * @param {string} newsPartLabel
 * @param {string} btnPartId
 * @param {string} btnPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'news-snippet-4E7jFg',
  /*elementLabel = 'News snippet',*/
  elementLabel = 'News Snippet',
  newsPartId = 'news-snippet-part-Z6vBxS',
  /*newsPartLabel = 'News snippet',*/
  newsPartLabel = 'News Snippet',
  btnPartId = 'news-snippet-part-btn-BplEx2',
  /*btnPartLabel = 'Button text'*/
  btnPartLabel = 'Button Text'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.SNIPPET)
  .withStyleConfigs(
    require('../../../../configs/styles/fixed-height'),
    require('../../../../configs/styles/news-background-color'),
    require('../../../../configs/styles/image-content-position'),
    require('../../../../configs/styles/image-content-ratio'),
    require('../../../../configs/styles/news-button'),
    require('../../../../configs/styles/btn-color'),
    require('../../../../configs/styles/btn-layout'))
  .withParts(
    cx.part.newsSnippet
      .withId(newsPartId)
      .withLabel(newsPartLabel),
    cx.part.plainText
      .withId(btnPartId)
      .withLabel(btnPartLabel));