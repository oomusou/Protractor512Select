import { Component } from '@angular/core';
import { Cloud } from './cloud';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedId = '0';
  clouds: Cloud[] = [
    {id: '0', name: 'AWS'},
    {id: '1', name: 'Azure'},
    {id: '2', name: 'GCP'}
  ];

  onChange(element: HTMLSelectElement) {
    this.selectedId = element.value;
  }
}
