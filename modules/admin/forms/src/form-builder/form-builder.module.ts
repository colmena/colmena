import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormlyBootstrapModule, FormlyModule } from 'ng-formly';
import { NgxDnDModule } from '@swimlane/ngx-dnd'

import { ColmenaUiModule } from '@colmena/admin-ui';

import { IndexComponent } from './components/index.component'
import { BuilderComponent } from './components/builder.component'
import { PreviewComponent } from './components/preview.component'
import { BuilderService } from './builder.service'
import { BuilderPaletteComponent } from './components/builder-palette.component'
import { BuilderFormComponent } from './components/builder-form.component'
import { CollapseModule } from 'ngx-bootstrap/collapse'

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,

    NgxDnDModule,

    ColmenaUiModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    BuilderComponent,
    BuilderFormComponent,
    BuilderPaletteComponent,
    IndexComponent,
    PreviewComponent,
  ],
  providers: [BuilderService],
  exports: [IndexComponent],
})
export class FormBuilderModule { }
