import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { directives } from './directives';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...directives],
  exports: [...directives]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
