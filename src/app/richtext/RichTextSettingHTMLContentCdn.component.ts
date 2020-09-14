import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";

@Component({
  selector: "app-RichTextSettingHTMLContentCdn",
  template: `
    <div class="dhx-container_inner">
      <section class="dhx_sample-controls">
        <button class="dhx_sample-btn dhx_sample-btn--flat" (click)="handleSetValue(textarea.value)">Set HTML Value</button>
      </section>
      <div class="dhx_container">
        <div class="dhx_sample-container__widget" #richtext></div>
        <textarea class="dhx_sample-container__textarea" ref-textarea [(ngModel)]="textValue"></textarea>
      </div>
    </div>
  `,
  styleUrls: ["../app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class RichTextSettingHTMLContentCdn implements OnDestroy {
  @ViewChild("richtext", { read: ElementRef })
  container: ElementRef;

  richtext: any;
  wait: Promise<void>;
  textValue = `
    <h1>Meet DHTMLX Rich Text Editor!</h1>
    <p>This JavaScript rich text editor is highly customizable. It makes text editing quick and comfortable due to the inbuilt set of handy formatting tools.</p>
    <p>
      Besides, it will convert your text into HTML or Markdown in the blink of an eye.
      Another bonus of DHTMLX Rich Text is its flexible configuration settings which allow you to fine-tune the look and feel of the editor without effort.
    </p>
    <p>
      To learn more, read our
      <a href="https://docs.dhtmlx.com/richtext/index.html" title="documentation">documentation</a>
      and check the
      <a href="https://docs.dhtmlx.com/richtext/samples/" title="samples">samples</a>.
    </p>
  `;

  handleSetValue(value: string): void {
    let contentToParse = value;
    contentToParse && this.richtext.setValue(contentToParse, "html");
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
