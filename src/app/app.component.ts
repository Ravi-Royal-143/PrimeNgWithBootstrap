import { Component } from '@angular/core';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic';
  test = "test"

  removeFormComp  = false
  constructor(private testService: TestService) { }

  ngOnInit() {
    setTimeout(() => {
      console.log('inside parennt ngOnit')
      this.test = "test"
    }, 4000);
  }

  changeBehaviourSub() {
    this.testService.testSub$.next(new Date().toDateString())
  }

  toggleForm() {
    this.removeFormComp = !this.removeFormComp
  }
}
