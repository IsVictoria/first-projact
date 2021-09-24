import { Component, OnInit } from '@angular/core';
import {UpdateHistoryService} from '../../services/update-history.service';
import {Select, Store} from '@ngxs/store';
import {Fetch} from '../../store/update.history.actions';
import {UpdateHistoryState} from '../../store/update-history.state';
import {Observable} from 'rxjs';
import {IUpdateHistoryPageEdge} from '../../store/update.history.model';

@Component({
  selector: 'app-update-history',
  templateUrl: './update-history.component.html',
  styleUrls: ['./update-history.component.scss']
})
export class UpdateHistoryComponent implements OnInit {
  @Select(UpdateHistoryState.getEdges) edges: Observable<IUpdateHistoryPageEdge[]>;

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new Fetch());
  }
}
