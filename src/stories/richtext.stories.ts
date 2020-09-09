import { RichTextInitCdn } from "../app/richtext/RichTextInitCdn.component";
import { RichTextEventsCdn } from "../app/richtext/RichTextEventsCdn.component";
import { RichTextSettingHTMLContentCdn } from "../app/richtext/RichTextSettingHTMLContentCdn.component";
import { RichTextGettingContentCdn } from "../app/richtext/RichTextGettingContentCdn.component";
import { RichTextEditormodesCdn } from "../app/richtext/RichTextEditormodesCdn.component";
import { RichTextToolbarBlocksCdn } from "../app/richtext/RichTextToolbarBlocksCdn.component";
import { RichTextLocalizationCdn } from "../app/richtext/RichTextLocalizationCdn.component";
import { RichTextGetStatsCdn } from "../app/richtext/RichTextGetStatsCdn.component";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";

export default {
  title: "Richtext",
  component: RichTextInitCdn,
  decorators: [
    moduleMetadata({
      declarations: [
        RichTextInitCdn,
        RichTextEventsCdn,
        RichTextSettingHTMLContentCdn,
        RichTextGettingContentCdn,
        RichTextEditormodesCdn,
        RichTextToolbarBlocksCdn,
        RichTextLocalizationCdn,
        RichTextGetStatsCdn,
      ],
      imports: [CommonModule],
    }),
  ],
};

export const initialization = () => ({
  component: RichTextInitCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Basic initialization. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-richtext-demo/blob/master/src/app/richtext/RichTextInitCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/initialization.html"
            target="_blank"
          >
            Initialization.
          </a>
        </div>
      </div>
      <app-RichTextInitCdn></app-RichTextInitCdn>
    </section>
  `,
});

export const events = () => ({
  component: RichTextEventsCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>RichText Events. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-richtext-demo/blob/master/src/app/richtext/RichTextEventsCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/event_handling.html"
            target="_blank"
          >
            Event Handling.
          </a>
        </div>
      </div>
      <app-RichTextEventsCdn></app-RichTextEventsCdn>
    </section>
  `,
});

export const settingHTMLContent = () => ({
  component: RichTextSettingHTMLContentCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Setting HTML content. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-richtext-demo/blob/master/src/app/richtext/RichTextSettingHTMLContentCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/loading_data.html#formatofcontent"
            target="_blank"
          >
            Format of content.
          </a>
          <a
            href="https://docs.dhtmlx.com/richtext/loading_data.html#addingcontentintoeditor"
            target="_blank"
          >
            Adding content into editor.
          </a>
        </div>
      </div>
      <app-RichTextSettingHTMLContentCdn></app-RichTextSettingHTMLContentCdn>
    </section>
  `,
});

export const gettingContent = () => ({
  component: RichTextGettingContentCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Getting content. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-richtext-demo/blob/master/src/app/richtext/RichTextGettingContentCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/working_with_richtext.html#gettingcontentfromeditors"
            target="_blank"
          >
            Getting content from editor.
          </a>
          <a
            href="https://docs.dhtmlx.com/richtext/loading_data.html#formatofcontent"
            target="_blank"
          >
            Format of content.
          </a>
        </div>
      </div>
      <app-RichTextGettingContentCdn></app-RichTextGettingContentCdn>
    </section>
  `,
});

export const textEditorModes = () => ({
  component: RichTextEditormodesCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>RichText Editor modes. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-richtext-demo/blob/master/src/app/richtext/RichTextEditormodesCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/configuration.html#workingmodes"
            target="_blank"
          >
            Working modes.
          </a>
        </div>
      </div>
      <app-RichTextEditormodesCdn></app-RichTextEditormodesCdn>
    </section>
  `,
});

export const toolbarBlocks = () => ({
  component: RichTextToolbarBlocksCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Configuration of toolbar blocks. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-richtext-demo/blob/master/src/app/richtext/RichTextToolbarBlocksCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/configuration.html#toolbar"
            target="_blank"
          >
            Toolbar.
          </a>
        </div>
      </div>
      <app-RichTextToolbarBlocksCdn></app-RichTextToolbarBlocksCdn>
    </section>
  `,
});

export const locale = () => ({
  component: RichTextLocalizationCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Localization. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-richtext-demo/blob/master/src/app/richtext/RichTextLocalizationCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/localization.html"
            target="_blank"
          >
            Localization.
          </a>
        </div>
      </div>
      <app-RichTextLocalizationCdn></app-RichTextLocalizationCdn>
    </section>
  `,
});

export const getStats = () => ({
  component: RichTextGetStatsCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Getting statistics. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-richtext-demo/blob/master/src/app/richtext/RichTextGetStatsCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/working_with_richtext.html#statistics"
            target="_blank"
          >
            Getting statistics.
          </a>
        </div>
      </div>
      <app-RichTextGetStatsCdn></app-RichTextGetStatsCdn>
    </section>
  `,
});
