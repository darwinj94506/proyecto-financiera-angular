import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';

//modal: importar NgbModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule, NgbModule.forRoot()], //modal: NgbModule.forRoot()
    declarations: [TablesComponent]
})
export class TablesModule {}
