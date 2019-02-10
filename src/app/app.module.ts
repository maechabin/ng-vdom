import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { VDomModule } from 'ng-vdom'

import { AngularComponent, AppComponent } from './app.component'
import { HelloComponent } from './hello.component'

@NgModule({
  declarations: [AppComponent, AngularComponent, HelloComponent],
  imports: [BrowserModule, VDomModule],
  providers: [],
  entryComponents: [HelloComponent, AngularComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
