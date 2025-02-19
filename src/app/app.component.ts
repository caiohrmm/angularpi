import { Component } from '@angular/core';
import { TaskManagerComponent } from './task-manager/task-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskManagerComponent], // Importando o componente
  template: `<app-task-manager></app-task-manager>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
