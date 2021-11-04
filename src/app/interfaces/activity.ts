import { Activity } from "../models/activity.entities";
import { Pageable } from "../models/pageable.entities";
import { Sort } from "../models/sort.entities";

export interface ActivityPageable {
  content: Activity[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface ActivityWithId {
  id: number;
  title: string;
  description: string;
}

export interface ActivityForm {
  title: string;
  description: string;
}
