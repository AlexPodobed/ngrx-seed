import { Directive, HostListener } from '@angular/core';
import { environment } from '../../../environments/environment';

@Directive({
  selector: '[appPreventLeave]'
})
export class PreventLeaveDirective {
  @HostListener('window:beforeunload', ['$event'])
  displayBrowserNotification(event) {
    if (environment.dev) {
      return;
    }
    event.returnValue = 'are you sure?';
  }

  constructor() {

  }
}
