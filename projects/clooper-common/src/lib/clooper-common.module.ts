import { NgModule } from '@angular/core';
import { ClooperCommonComponent } from './clooper-common.component';
import { BaseBtnComponent } from './components/base-btn/base-btn.component';
import { BasePaginationComponent } from './components/base-pagination/base-pagination.component';
import { BaseAccordionComponent } from './components/base-accordion/base-accordion.component';
import { NamePipePipe } from './pipes/name-pipe.pipe';



@NgModule({
  declarations: [
    ClooperCommonComponent,
    BaseBtnComponent,
    BasePaginationComponent,
    BaseAccordionComponent,
    NamePipePipe
  ],
  imports: [
  ],
  exports: [
    ClooperCommonComponent,
    BaseBtnComponent,
    BasePaginationComponent,
    BaseAccordionComponent

  ]
})
export class ClooperCommonModule { }
