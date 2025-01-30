import type { DeltaInsert } from '@blocksuite/inline';
import type { Text } from '@blocksuite/store';
import { BlockModel, defineBlockSchema } from '@blocksuite/store';

export type TableCell = {
  text: Text;
};

export interface TableRow {
  rowId: string;
  order: string;
  backgroundColor?: string;
}

export interface TableColumn {
  columnId: string;
  order: string;
  backgroundColor?: string;
  width?: number;
}

export interface TableBlockProps {
  rows: Record<string, TableRow>;
  columns: Record<string, TableColumn>;
  // key = `${rowId}:${columnId}`
  cells: Record<string, TableCell>;
}

export interface TableCellSerialized {
  text: {
    delta: DeltaInsert[];
  };
}

export interface TableBlockPropsSerialized {
  rows: Record<string, TableRow>;
  columns: Record<string, TableColumn>;
  cells: Record<string, TableCellSerialized>;
}

export class TableBlockModel extends BlockModel<TableBlockProps> {}
export const TableModelFlavour = 'affine:table-test1-flavour';
export const TableBlockSchema = defineBlockSchema({
  flavour: TableModelFlavour,
  props: (): TableBlockProps => ({
    rows: {},
    columns: {},
    cells: {},
  }),
  metadata: {
    role: 'content',
    version: 1,
    parent: ['affine:note'],
    children: [],
  },
  toModel: () => new TableBlockModel(),
});

declare global {
  namespace BlockSuite {
    interface BlockModels {
      [TableModelFlavour]: TableBlockModel;
    }
  }
}
