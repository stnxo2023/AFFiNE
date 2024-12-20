import './test-block.js';

import { literal } from 'lit/static-html.js';

import { BlockViewExtension, type ExtensionType } from '../extension/index.js';
import type { HeadingBlockModel } from './test-schema.js';

export const testSpecs: ExtensionType[] = [
  BlockViewExtension('test:page', literal`test-root-block`),

  BlockViewExtension('test:note', literal`test-note-block`),

  BlockViewExtension('test:heading', model => {
    const h = (model as HeadingBlockModel).type$.value;

    if (h === 'h1') {
      return literal`test-h1-block`;
    }

    return literal`test-h2-block`;
  }),
];