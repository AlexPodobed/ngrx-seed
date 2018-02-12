import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './http-error.interceptor';

export const coreInterceptors: any[] = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
];
