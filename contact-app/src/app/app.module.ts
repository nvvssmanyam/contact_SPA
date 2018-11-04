import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { DataTableModule,DialogModule,ButtonModule,InputTextModule,PanelModule,MenuModule} from 'primeng/primeng';
import { ReactiveFormsModule} from '@angular/forms';
import { ContextMenuModule} from 'primeng/contextmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    HttpModule,
    ModalModule,
    MenuModule,
    ContextMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
