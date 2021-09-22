import { Component, OnInit } from '@angular/core';
import {UpdateHistoryService} from '../services/update-history.service';

@Component({
  selector: 'app-update-history',
  templateUrl: './update-history.component.html',
  styleUrls: ['./update-history.component.scss']
})
export class UpdateHistoryComponent implements OnInit {

  constructor(private updateService: UpdateHistoryService) { }

  ngOnInit(): void {
    this.updateService.getData()
      .subscribe(response => {
      console.log(response);
    });
  }

}
