import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { DataBoundComponent } from './data-bound/data-bound.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningMessageComponent,
    SuccessMessageComponent,
    DataBoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
