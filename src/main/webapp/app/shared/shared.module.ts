import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TemplateJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TemplateJhipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TemplateJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TemplateJhipsterSharedModule {
  static forRoot() {
    return {
      ngModule: TemplateJhipsterSharedModule
    };
  }
}
