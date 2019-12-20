import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RockedTest';
  data; bindedData;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.bindedData = data['results'];
    });
  }
  onDropdownChange(event) {
    if (event.target.value == 'asc') {
      this.bindedData.sort(((a, b) => a.id - b.id));
    }
    if (event.target.value == 'desc') {
      this.bindedData.sort(((a, b) => b.id - a.id));
    }
  }
}
