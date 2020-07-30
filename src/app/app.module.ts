import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SuccessAlertComponent } from "./successAlert/successAlert.component";
import { WarningComponent } from "./warningAlert/warningAlert.component";

@NgModule({
  declarations: [AppComponent, WarningComponent, SuccessAlertComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
