import { Activity } from "../models/activity";
import { Pageable } from "../models/pageable";
import { Sort } from "../models/sort";

export interface ActivityResponse {
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
