import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isActive = false

  change() {
    this.isActive = !this.isActive
  }
}
