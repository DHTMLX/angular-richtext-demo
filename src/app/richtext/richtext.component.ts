import { Richtext } from "@dhx/trial-richtext";
import { getData } from "./data";

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "richtext",
  styleUrls: ["./richtext.component.css"],
  template: `<div class="component_container">
    <div #richtext_container class="widget"></div>
  </div>`
})
export class RichTextComponent implements OnInit, OnDestroy {
  @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

  private _richtext!: Richtext;

  ngOnInit() {
    const { value } = getData();
    const baseURL = "https://docs.dhtmlx.com/richtext-backend";
    const imageUploadUrl = `${baseURL}/images`;

    this._richtext = new Richtext(this.richtext_container.nativeElement, {
      value,
      imageUploadUrl,
      menubar: true
    });
  }

  ngOnDestroy(): void {
    this._richtext.destructor();
  }
}
