import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";

const initialValue = `
  <p style="font-size: 18px; text-align: center;">
    Note that newly set blocks are added to the end of the toolbar.
  </p>
  <p style="font-size: 18px; text-align: center;">
    Use the checkboxes to hide/show related toolbar blocks.
  </p>
`;
let toolbarBlocks = ["undo", "style", "decoration", "colors", "align", "link"];

@Component({
  selector: "app-RichTextToolbarBlocksCdn",
  template: `
    <div class="dhx-container_inner">
      <section class="dhx_sample-controls">
        <form class="dhx_sample-toolbar-blocks" (change)="eventHandler($event)">
          <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
            <input type="checkbox" id="undo" checked class="dhx_checkbox__input" />
            <span class="dhx_checkbox__visual-input"></span>
            <span class="dhx_label">undo</span>
          </label>
          <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
            <input type="checkbox" id="style" checked class="dhx_checkbox__input" />
            <span class="dhx_checkbox__visual-input"></span>
            <span class="dhx_label">style</span>
          </label>
          <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
            <input type="checkbox" id="decoration" checked class="dhx_checkbox__input" />
            <span class="dhx_checkbox__visual-input"></span>
            <span class="dhx_label">decoration</span>
          </label>
          <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
            <input type="checkbox" id="colors" checked class="dhx_checkbox__input" />
            <span class="dhx_checkbox__visual-input"></span>
            <span class="dhx_label">colors</span>
          </label>
          <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
            <input type="checkbox" id="align" checked class="dhx_checkbox__input" />
            <span class="dhx_checkbox__visual-input"></span>
            <span class="dhx_label">align</span>
          </label>
          <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
            <input type="checkbox" id="link" checked class="dhx_checkbox__input" />
            <span class="dhx_checkbox__visual-input"></span>
            <span class="dhx_label">link</span>
          </label>
          <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
            <input type="checkbox" id="clear" class="dhx_checkbox__input" />
            <span class="dhx_checkbox__visual-input"></span>
            <span class="dhx_label">clear</span>
          </label>
          <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
            <input type="checkbox" id="fullscreen" class="dhx_checkbox__input" />
            <span class="dhx_checkbox__visual-input"></span>
            <span class="dhx_label">fullscreen</span>
          </label>
          <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
            <input type="checkbox" id="stats" class="dhx_checkbox__input" />
            <span class="dhx_checkbox__visual-input"></span>
            <span class="dhx_label">stats</span>
          </label>
        </form>
      </section>
      <div class="dhx_sample-container__widget" #richtext></div>
    </div>
  `,
  styleUrls: ["../app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class RichTextToolbarBlocksCdn implements OnDestroy {
  @ViewChild("richtext", { read: ElementRef })
  container: ElementRef;

  richtext: any;
  wait: Promise<void>;

  eventHandler(event: any) {
    if (event.target.checked) {
      toolbarBlocks.push(event.target.id);
    } else {
      let filtered = [];
      for (let i = 0; i < toolbarBlocks.length; i++) {
        if (toolbarBlocks[i] !== event.target.id) {
          filtered.push(toolbarBlocks[i]);
        }
      }
      toolbarBlocks = filtered;
    }
    let value = this.richtext.getValue();
    this.richtext.destructor();
    // eslint-disable-next-line no-undef
    this.richtext = new dhx.Richtext(this.container.nativeElement, {
      toolbarBlocks: toolbarBlocks,
    });
    this.richtext.setValue(value, "html");
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
