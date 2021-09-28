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

  get errors(): boolean {
    if (this.item.node.errors.length > 0) {
      return true;
    } else {
      return false;
    }
 }

  get revision(): string {
    const revision = this.item.node.source.revision;
    return revision.substring(0, 9);
  }

  get author(): string {
    const author = this.item.node.source.commitAuthor;
    const index = author.indexOf('<');
    return author.slice(0, index);
  }

  get path(): string {
    const path = this.item.node.source.path;
    return path.slice(10);
  }

  get time() {
    return new Date(this.item.node.source.commitDate);
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
