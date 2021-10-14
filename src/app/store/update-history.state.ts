import { IUpdateHistoryModel } from './update.history.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AddFilteredData, Fetch} from './update.history.actions';
import {UpdateHistoryService} from '../services/update-history.service';
import {tap} from 'rxjs/operators';

const defaults = {
  edges: [],
  pageInfo: null,
  filters: null,
  loading: false,
  filteredData: []
};

@State<IUpdateHistoryModel>({
  name: 'updateHistory',
  defaults
})
@Injectable()
export class UpdateHistoryState {

  constructor(private updateService: UpdateHistoryService) {
  }

  @Selector()
  static getHistory(state: IUpdateHistoryModel) {
    return state;
  }

  @Selector()
  static getEdges(getHistory: IUpdateHistoryModel) {
    return getHistory.edges;
  }


  @Action(Fetch)
  fetch(ctx: StateContext<IUpdateHistoryModel>) {
    return this.updateService.getData().pipe(
      tap(response => {
        ctx.patchState({edges: response.data.pipeline.history.edges});
      })
    );
  }

  @Action(AddFilteredData)
  AddFilteredData(ctx: StateContext<IUpdateHistoryModel>, payload: AddFilteredData) {
    ctx.patchState({filteredData: payload.payload.data});
  }
}
