import { NgModule } from '@angular/core';

import { components } from './components';
import { services } from './services';
import { coreInterceptors } from './interceptors';


@NgModule({
  imports: [],
  declarations: [...components],
  exports: [...components]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [...services, ...coreInterceptors],
    };
  }
}
