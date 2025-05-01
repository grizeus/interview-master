import { CommonModule } from "@angular/common";
import { Component, WritableSignal, signal, effect } from '@angular/core';

@Component({
  selector: 'app-angular',
  imports: [CommonModule],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})
export class AngularComponent {
  questions: WritableSignal<any[]> = signal(['apple', 'banana', 'orange']);

  constructor() {
    effect(() => {
      console.log(`Updated: ${JSON.stringify(this.questions())}`);
    });

    const idx = setTimeout(() => this.addOnce(), 5000);
  }

  addOnce() {
    this.questions.set([...this.questions(), 'mango']);
  }
}
