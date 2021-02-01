import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

const components = [MainLayoutComponent];

const entryComponents = [];

@NgModule({
  declarations: [...components, ...entryComponents],
  entryComponents: [...entryComponents],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [...components, ...entryComponents],
  providers: [],
})
export class SharedComponentsModule {}
