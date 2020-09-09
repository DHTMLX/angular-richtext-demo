import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";

@Component({
  selector: "app-RichTextGetStatsCdn",
  template: `
    <div class="dhx-container_inner">
      <section class="dhx_sample-controls">
        <button class="dhx_sample-btn dhx_sample-btn--flat" (click)="getStats()">Get Statistics</button>
      </section>
      <div class="dhx-container_setting">
        <div class="dhx_sample-container__widget setting" #richtext></div>
        <div class="dhx_sample-container__sidebar setting">
          <ul>
            <li>
              Characters: <span>{{ charsAmount }}</span
              ><br />
            </li>
            <li>
              Characters without spaces: <span>{{ charsExlSpaceAmount }}</span
              ><br />
            </li>
            <li>
              Words: <span>{{ wordsAmount }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class RichTextGetStatsCdn implements OnDestroy {
  @ViewChild("richtext", { read: ElementRef })
  container: ElementRef;

  richtext: any;
  wait: Promise<void>;
  charsAmount: "";
  charsExlSpaceAmount: "";
  wordsAmount: "";

  getStats() {
    this.charsAmount = this.richtext.getStats().chars;
    this.charsExlSpaceAmount = this.richtext.getStats().charsExlSpace;
    this.wordsAmount = this.richtext.getStats().words;
  }

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
