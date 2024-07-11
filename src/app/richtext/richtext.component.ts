import { Richtext } from "@dhx/trial-richtext";
import { getData } from "./data";

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "richtext",
  styleUrls: ["./richtext.component.css"],
  template: `<div #here class="widget"></div>`,
})
export class RichtextComponent implements OnInit, OnDestroy {
  @ViewChild("here", { static: true }) container!: ElementRef;

  private _richtext!: Richtext;

  ngOnInit() {
    const initText = getData();
    const richtext = new Richtext(this.container.nativeElement, {});
    this._richtext = richtext;

    richtext.setValue(initText, "markdown");
  }

  ngOnDestroy(): void {
    this._richtext.destructor();
  }
}
