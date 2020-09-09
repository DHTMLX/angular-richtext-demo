import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";

@Component({
  selector: "app-RichTextInitCdn",
  template: ` <div class="dhx_sample-container__widget" #richtext></div> `,
  styleUrls: ["../app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class RichTextInitCdn implements OnDestroy {
  @ViewChild("richtext", { read: ElementRef })
  container: ElementRef;

  richtext: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js",
      "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css",
    ]).then(() => {
      this.richtext = new dhx.Richtext(this.container.nativeElement);
    });
  }

  ngOnDestroy() {
    this.richtext && this.richtext.destructor();
  }
}
