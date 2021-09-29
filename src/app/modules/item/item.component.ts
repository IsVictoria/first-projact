import {Component, Input, OnInit} from '@angular/core';
import {IUpdateHistoryPageEdge} from '../../store/update.history.model';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: IUpdateHistoryPageEdge;
  constructor() {
  }

  ngOnInit() {
  }

  get kind(): string {
    return this.item.node.metadata.kind;
  }

  get color(): string {
    switch (this.kind) {
      case 'EventSource' :
        return 'orange';
      case 'Sensor' :
        return 'cyan';
      default:
        return 'purple';

    }
  }
}
