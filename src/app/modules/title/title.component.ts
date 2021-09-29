import {Component, Input} from '@angular/core';
import {IUpdateHistoryPageEdge} from '../../store/update.history.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() item: IUpdateHistoryPageEdge;

  get errors(): boolean {
    return this.item.node.errors.length > 0;
  }

  get revision(): string {
    const { revision } = this.item.node.source;
    return revision.substring(0, 9);
  }

}
