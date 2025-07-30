import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RichTextComponent } from "./richtext/richtext.component";

@NgModule({
  declarations: [AppComponent, RichTextComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
