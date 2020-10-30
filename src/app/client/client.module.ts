import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './views/desktop/desktop.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientListComponent } from './components/client-list/client-list.component';

@NgModule({
  declarations: [DesktopComponent, ClientListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DesktopComponent]
})
export class ClientModule { }
