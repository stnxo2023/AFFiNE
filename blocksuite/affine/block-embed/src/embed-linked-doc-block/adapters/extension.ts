import type { ExtensionType } from '@blocksuite/block-std';

import { EmbedLinkedDocHtmlAdapterExtension } from './html.js';
import { EmbedLinkedDocMarkdownAdapterExtension } from './markdown.js';
import { EmbedLinkedDocBlockPlainTextAdapterExtension } from './plain-text.js';

export const EmbedLinkedDocBlockAdapterExtensions: ExtensionType[] = [
  EmbedLinkedDocHtmlAdapterExtension,
  EmbedLinkedDocMarkdownAdapterExtension,
  EmbedLinkedDocBlockPlainTextAdapterExtension,
];