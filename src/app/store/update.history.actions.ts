import {IUpdateHistoryPageEdge} from './update.history.model';

export  class Fetch {
  static readonly type = '[Update history] load data';
}

export class AddFilteredData {
  static readonly type = '[Filtered Arr] load arr';
  constructor(public payload: { data: IUpdateHistoryPageEdge[] }) {
  }
}
