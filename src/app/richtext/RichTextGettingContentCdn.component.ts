import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";

const initialContent = `
  # Meet DHTMLX Rich Text Editor! \nThis JavaScript rich text editor is highly customizable. It makes text editing quick and comfortable due to the inbuilt set of handy formatting tools. \nBesides, it will convert your text into HTML or Markdown in the blink of an eye. Another bonus of DHTMLX Rich Text is its flexible configuration settings which allow you to fine-tune the look and feel of the editor without effort. \nTo learn more, read our [documentation](https://docs.dhtmlx.com/richtext/index.html) and check the [samples](https://docs.dhtmlx.com/richtext/samples/).
`;

@Component({
  selector: "app-RichTextGettingContentCdn",
  template: `
    <div class="dhx-container_inner">
      <section class="dhx_sample-controls">
        <button class="dhx_sample-btn dhx_sample-btn--flat" (click)="serialize('html')">Serialize HTML</button>
        <button class="dhx_sample-btn dhx_sample-btn--flat" (click)="serialize('markdown')">Serialize Markdown</button>
        <button class="dhx_sample-btn dhx_sample-btn--flat" (click)="serialize('text')">Serialize Plain Text</button>
      </section>
      <div class="dhx-container_setting">
        <div class="dhx_sample-container__widget setting" #richtext></div>
        <div class="dhx_sample-container__sidebar setting">
          <textarea class="dhx_sample-textarea" placeholder="The result will be here:">{{ textareaValue }}</textarea>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class RichTextGettingContentCdn implements OnDestroy {
  @ViewChild("richtext", { read: ElementRef })
  container: ElementRef;

  richtext: any;
  wait: Promise<void>;
  textareaValue: "";

  serialize(value) {
    let result = this.richtext.getValue(value);
    this.textareaValue = result;
  }

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js",
      "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css",
    ]).then(() => {
      this.richtext = new dhx.Richtext(this.container.nativeElement);
      this.richtext.setValue(initialContent, "markdown");
    });
  }

  ngOnDestroy() {
    this.richtext && this.richtext.destructor();
  }
}
