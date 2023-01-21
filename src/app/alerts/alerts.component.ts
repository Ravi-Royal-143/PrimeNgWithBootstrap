import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {

  expanded = true;

  datasss = ["text with content 0", "text with content 1", "text with content 2", "text with content 3", "text with content 4", "text with content 5", "text with content 6", "text with content 7", "text with content 8", "text with content 9", "text with content 10", "text with content 11", "text with content 12", "text with content 13", "text with content 14", "text with content 15", "text with content 16", "text with content 17", "text with content 18", "text with content 19", "text with content 20", "text with content 21", "text with content 22", "text with content 23", "text with content 24", "text with content 25", "text with content 26", "text with content 27", "text with content 28", "text with content 29", "text with content 30", "text with content 31", "text with content 32", "text with content 33", "text with content 34", "text with content 35", "text with content 36", "text with content 37", "text with content 38", "text with content 39", "text with content 40", "text with content 41", "text with content 42", "text with content 43", "text with content 44", "text with content 45", "text with content 46", "text with content 47", "text with content 48", "text with content 49", "text with content 50", "text with content 51", "text with content 52", "text with content 53", "text with content 54", "text with content 55", "text with content 56", "text with content 57", "text with content 58", "text with content 59", "text with content 60", "text with content 61", "text with content 62", "text with content 63", "text with content 64", "text with content 65", "text with content 66", "text with content 67", "text with content 68", "text with content 69", "text with content 70", "text with content 71", "text with content 72", "text with content 73", "text with content 74", "text with content 75", "text with content 76", "text with content 77", "text with content 78", "text with content 79", "text with content 80", "text with content 81", "text with content 82", "text with content 83", "text with content 84", "text with content 85", "text with content 86", "text with content 87", "text with content 88", "text with content 89", "text with content 90", "text with content 91", "text with content 92", "text with content 93", "text with content 94", "text with content 95", "text with content 96", "text with content 97", "text with content 98", "text with content 99"]

  isTextOverflow(elementId: any): boolean {
    const elem = document.getElementById(elementId);
    if (elem) {
        return (elem.offsetWidth < elem.scrollWidth);
    }
    else {
        return false;
    }
}

}
