import { Component, inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic';

  appservice = inject(AppService)

  constructor(private router: Router) {}
  
  navigation(url: string) {
    this.router.navigateByUrl(url)
  }

  chageActiveModule() {
    this.appservice.change()
  }
}
