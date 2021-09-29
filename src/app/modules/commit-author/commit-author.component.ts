import {Component, Input, OnInit} from '@angular/core';
import {IUpdateHistoryPageEdge} from '../../store/update.history.model';

@Component({
  selector: 'app-commit-author',
  templateUrl: './commit-author.component.html',
  styleUrls: ['./commit-author.component.scss']
})
export class CommitAuthorComponent implements OnInit {
  @Input() item: IUpdateHistoryPageEdge;
  constructor() { }

  ngOnInit() {
  }

  get author(): string {
    const { commitAuthor } = this.item.node.source;
    const index = commitAuthor.indexOf('<');
    return commitAuthor.slice(0, index);
  }

  get path(): string {
    // TODO destructing
    const path = this.item.node.source.path;
    return path.slice(10);
  }

  get time() {
    return new Date(this.item.node.source.commitDate);
  }
}
