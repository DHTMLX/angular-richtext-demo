import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";

const locale = {
  de: {
    apply: "Anwenden",
    undo: "Rückgängig machen",
    redo: "Wiederholen",
    selectFontFamily: "Schriftfamilie",
    selectFontSize: "Schriftgröße",
    selectFormat: "Textstil",
    selectTextColor: "Textfarbe",
    selectTextBackground: "Texthintergrund",
    markBold: "Fett",
    markItalic: "Kursiv",
    markStrike: "Durchgestrichen",
    markUnderline: "Unterstrichen",
    alignLeft: "Links ausrichten",
    alignCenter: "Mittens ausrichten",
    alignRight: "Rechts ausrichten",
    addLink: "Einen Link hinzufügen",
    clearFormat: "Format entfernen",
    fullscreen: "Vollbildschirm",
    unlink: "Einen Link löschen",
    edit: "Redigieren",
    h1: "Überschrift 1",
    h2: "Überschrift 2",
    h3: "Überschrift 3",
    h4: "Überschrift 4",
    h5: "Überschrift 5",
    h6: "Überschrift 6",
    p: "Normaler Text",
    blockquote: "Blockzitat",
    stats: "Statistiken",
    chars: "Zeichen",
    charsExlSpace: "Zeichen ohne Leerzeichen",
    words: "Wörter",
  },
  en: {
    apply: "Apply",
    undo: "Undo",
    redo: "Redo",
    selectFontFamily: "Font",
    selectFontSize: "Font size",
    selectFormat: "Style",
    selectTextColor: "Text color",
    selectTextBackground: "Background color",
    markBold: "Bold",
    markItalic: "Italic",
    markStrike: "Strike",
    markUnderline: "Underline",
    alignLeft: "Align left",
    alignCenter: "Align center",
    alignRight: "Align right",
    addLink: "Add link",
    clearFormat: "Clear formatting",
    fullscreen: "Fullscreen",
    removeLink: "Remove link",
    edit: "Edit",
    h1: "Heading 1",
    h2: "Heading 2",
    h3: "Heading 3",
    h4: "Heading 4",
    h5: "Heading 5",
    h6: "Heading 6",
    p: "Normal text",
    blockquote: "Block quote",
    stats: "Statistics",
    chars: "chars",
    charsExlSpace: "Characters without spaces ",
    words: "words",
  },
};

@Component({
  selector: "app-RichTextLocalizationCdn",
  template: `
    <div class="dhx-container_inner">
      <section class="dhx_sample-controls">
        <div class="dhx_sample-input__wrapper dhx_sample-input__wrapper--pl-16">
          <input checked name="locale" id="en" (change)="handleChange('en')" type="radio" class="dhx_sample-radio__input" />
          <label for="en" class="dhx_sample-radio__label">English</label>
        </div>
        <div class="dhx_sample-input__wrapper dhx_sample-input__wrapper--pl-16">
          <input name="locale" id="de" (change)="handleChange('de')" type="radio" class="dhx_sample-radio__input" />
          <label for="de" class="dhx_sample-radio__label">Deutsch</label>
        </div>
      </section>
      <div class="dhx_sample-container__widget" #richtext></div>
    </div>
  `,
  styleUrls: ["../app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class RichTextLocalizationCdn implements OnDestroy {
  @ViewChild("richtext", { read: ElementRef })
  container: ElementRef;

  richtext: any;
  wait: Promise<void>;

  handleChange(prefix) {
    // eslint-disable-next-line no-undef
    dhx.i18n.setLocale("richtext", locale[prefix]);
    this.richtext.destructor();
    // eslint-disable-next-line no-undef
    this.richtext = new dhx.Richtext(this.container.nativeElement);
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
