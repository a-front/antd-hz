import * as React from 'react';
import { EXPAND_COLUMN, Summary } from 'rc-table';
import type { Reference } from 'rc-table';

import type { AnyObject } from '../_util/type';
import Column from './Column';
import ColumnGroup from './ColumnGroup';
import {
  SELECTION_ALL,
  SELECTION_COLUMN,
  SELECTION_INVERT,
  SELECTION_NONE,
} from './hooks/useSelection';
import type { RefTable } from './interface';
import type { TableProps } from './InternalTable';
import InternalTable from './InternalTable';

const Table = <RecordType extends AnyObject = AnyObject>(
  props: TableProps<RecordType>,
  ref: React.Ref<Reference>,
) => {
  const renderTimesRef = React.useRef<number>(0);
  renderTimesRef.current += 1;
  let { pagination } = props;
  const { dataSource } = props;
  const PAGE_NUM = 5;
  const PROPS_ADD_TO_PAGINATION = {
    showSizeChanger: true,
    showQuickJumper: true,
  };

  if (pagination && typeof pagination === 'object') {
    // 超过5页显示跳转
    const { pageSize = 10, total = dataSource?.length || 0 } = pagination;

    const pageIsOver = !!(pageSize && total && total / pageSize >= PAGE_NUM);
    if (pageIsOver) {
      pagination = {
        ...PROPS_ADD_TO_PAGINATION,
        ...pagination,
      };
    }
  } else if (pagination === undefined && (dataSource?.length || 0) / 10 >= PAGE_NUM) {
    pagination = {
      ...PROPS_ADD_TO_PAGINATION,
    };
  }
  return (
    <InternalTable<RecordType>
      {...props}
      pagination={pagination}
      ref={ref}
      _renderTimes={renderTimesRef.current}
    />
  );
};

const ForwardTable = React.forwardRef(Table) as unknown as RefTable & {
  displayName?: string;
  SELECTION_COLUMN: typeof SELECTION_COLUMN;
  EXPAND_COLUMN: typeof EXPAND_COLUMN;
  SELECTION_ALL: typeof SELECTION_ALL;
  SELECTION_INVERT: typeof SELECTION_INVERT;
  SELECTION_NONE: typeof SELECTION_NONE;
  Column: typeof Column;
  ColumnGroup: typeof ColumnGroup;
  Summary: typeof Summary;
};

ForwardTable.SELECTION_COLUMN = SELECTION_COLUMN;
ForwardTable.EXPAND_COLUMN = EXPAND_COLUMN;
ForwardTable.SELECTION_ALL = SELECTION_ALL;
ForwardTable.SELECTION_INVERT = SELECTION_INVERT;
ForwardTable.SELECTION_NONE = SELECTION_NONE;
ForwardTable.Column = Column;
ForwardTable.ColumnGroup = ColumnGroup;
ForwardTable.Summary = Summary;

if (process.env.NODE_ENV !== 'production') {
  ForwardTable.displayName = 'Table';
}

export default ForwardTable;
