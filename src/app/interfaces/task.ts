export interface Task {
  id: number;
  title: string;
  description: string;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface Pageable {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort2 {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface ResponseTask {
  content: Task[];
  pageable: Pageable;
  totalPages: number;
  last: boolean;
  totalElements: number;
  numberOfElements: number;
  sort: Sort2;
  first: boolean;
  size: number;
  number: number;
  empty: boolean;
}
