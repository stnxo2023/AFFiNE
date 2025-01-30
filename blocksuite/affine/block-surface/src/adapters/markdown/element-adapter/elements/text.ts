import { getTextElementText } from '../../../utils/text.js';
import { ElementToMarkdownAdapterExtension } from '../type.js';

export const textToMarkdownAdapterMatcher = ElementToMarkdownAdapterExtension({
  name: 'text',
  match: elementModel => elementModel.type === 'text',
  toAST: elementModel => {
    const content = getTextElementText(elementModel);
    if (!content) {
      return null;
    }

    return {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: content,
        },
      ],
    };
  },
});
