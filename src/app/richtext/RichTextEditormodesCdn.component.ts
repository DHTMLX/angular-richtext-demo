import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";

@Component({
  selector: "app-RichTextEditormodesCdn",
  template: `
    <div class="dhx-container_inner">
      <section class="dhx_sample-controls">
        <div class="dhx_sample-input__wrapper dhx_sample-input__wrapper--pl-16">
          <input
            checked
            name="mode"
            value="classic"
            id="classic"
            (change)="handleChange('classic')"
            type="radio"
            class="dhx_sample-radio__input"
          />
          <label for="classic" class="dhx_sample-radio__label">Classic mode</label>
        </div>
        <div class="dhx_sample-input__wrapper dhx_sample-input__wrapper--pl-16">
          <input
            name="mode"
            value="document"
            id="document"
            (change)="handleChange('document')"
            type="radio"
            class="dhx_sample-radio__input"
          />
          <label for="document" class="dhx_sample-radio__label">Document mode</label>
        </div>
      </section>
      <div class="dhx_sample-container__widget" #richtext></div>
    </div>
  `,
  styleUrls: ["../app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class RichTextEditormodesCdn implements OnDestroy {
  @ViewChild("richtext", { read: ElementRef })
  container: ElementRef;

  richtext: any;
  wait: Promise<void>;

  handleChange(mode) {
    this.richtext.destructor();
    // eslint-disable-next-line no-undef
    this.richtext = new dhx.Richtext(this.container.nativeElement, { mode: mode });
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
