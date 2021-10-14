import {Component, EventEmitter, OnInit, Output, OnDestroy} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';


export interface FormChanges {
  selectRepo: any;
  eventType: string;
  syncStatus: string;
}

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit, OnDestroy {
  private subs: Subscription;

  @Output() changes: EventEmitter<FormChanges> = new EventEmitter<FormChanges>();
  form: FormGroup;
  eventTypes = [
    { label: 'All', value: 'All'},
    { label: 'Sensor', value: 'Sensor' },
    { label: 'EventSource', value: 'EventSource' },
    { label: 'ClusterWorkflowTemplate', value: 'ClusterWorkflowTemplate' },
  ];
  syncStatus = [
    { label: 'All', value: 'All'},
    { label: 'Fallen', value: 'Fallen' },
    { label: 'Synced', value: 'Synced' },
  ];

  constructor() { }

  ngOnInit() {
   this.form = new FormGroup({
      selectRepo: new FormControl( null),
      eventType: new FormControl('All'),
      syncStatus: new FormControl( 'All')
    });
   this.subs = this.form.valueChanges.pipe(
      tap(data => {
        this.changes.emit(data);
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
