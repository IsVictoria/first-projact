import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {AddFilteredData, Fetch} from '../../store/update.history.actions';
import {UpdateHistoryState} from '../../store/update-history.state';
import {Observable} from 'rxjs';
import {IUpdateHistoryPageEdge} from '../../store/update.history.model';

@Component({
  selector: 'app-update-history',
  templateUrl: './update-history.component.html',
  styleUrls: ['./update-history.component.scss']
})
export class UpdateHistoryComponent implements OnInit {
  filteredValue: IUpdateHistoryPageEdge[];
  edges: IUpdateHistoryPageEdge[];

  @Select(UpdateHistoryState.getEdges) edges$: Observable<IUpdateHistoryPageEdge[]>;

  constructor(
    private store: Store
  ) {
  }
  ngOnInit(): void {
    this.edges$.subscribe(data => {
      this.edges = data;
      this.filteredValue = this.edges;
    });

    this.store.dispatch(new Fetch());
  }

  formFilter(formChanges) {
    const {eventType, selectRepo} = formChanges;
    this.filteredValue = this.edges.filter(edge => (edge.node.metadata.kind === eventType || eventType === 'All') &&
      (edge.node.source.revision.includes(selectRepo) || !selectRepo));
    this.sendFilteredArr();
  }

  sendFilteredArr() {
    this.store.dispatch(new AddFilteredData(  { data: this.filteredValue}));
  }

}
