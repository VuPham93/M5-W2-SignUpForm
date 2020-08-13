import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'M5-W2-SignUpForm';

  show:boolean = false;

  showForm() {
    this.show = !this.show;
  }
}
