import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic';
  @ViewChild('inputTimeRef',{static: false }) inputTimeRef!:ElementRef

  show() {
    console.log(this.inputTimeRef)
    this.open()
  }

  open() {
    this.inputTimeRef.nativeElement.showPicker();
  }
}
