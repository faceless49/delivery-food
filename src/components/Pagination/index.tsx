import React, { FC } from 'react';

import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

import { ReturnComponentType } from 'types';
import { NEXT_PAGE_VALUE } from 'vars';

type PaginationProps = {
  onChangePage: (value: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  onChangePage,
}): ReturnComponentType => (
  <div>
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={event => onChangePage(event.selected + NEXT_PAGE_VALUE)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      // renderOnZeroPageCount={null}
    />
  </div>
);
