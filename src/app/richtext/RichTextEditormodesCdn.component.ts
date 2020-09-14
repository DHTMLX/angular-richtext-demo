import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";

@Component({
  selector: "app-RichTextEditormodesCdn",
  template: `
    <div class="dhx-container_inner">
      <section class="dhx_sample-controls">
        <label class="dhx_form-group dhx_radiobutton dhx_form-group--inline dhx_form-group--no-message-holder dhx_sample-input__wrapper--pl-16">
          <input type="radio" name="mode" class="dhx_radiobutton__input" (change)="handleChange('classic')" checked />
          <span class="dhx_radiobutton__visual-input"></span>
          <span class="dhx_label">Classic mode</span>
        </label>
        <label class="dhx_form-group dhx_radiobutton dhx_form-group--inline dhx_form-group--no-message-holder dhx_sample-input__wrapper--pl-16">
          <input type="radio" name="mode" class="dhx_radiobutton__input" (change)="handleChange('document')" />
          <span class="dhx_radiobutton__visual-input"></span>
          <span class="dhx_label">Document mode</span>
        </label>
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
