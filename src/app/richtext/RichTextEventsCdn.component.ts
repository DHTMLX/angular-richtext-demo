import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";

@Component({
  selector: "app-RichTextEventsCdn",
  template: `
    <div class="dhx-container_inner">
      <section class="dhx_sample-controls">
        <button class="dhx_sample-btn dhx_sample-btn--flat" (click)="clearAll()">Clear events</button>
      </section>
      <div class="dhx-events">
        <div class="dhx_sample-container__widget" #richtext></div>
        <div class="dhx_sample-container__sidebar">
          <div class="events-list--element" *ngIf="this.isEmpty">No events yet</div>
          <div class="events-list--element dhx_sample-event" *ngFor="let event of events">
            <p>{{ event.name }}</p>
            <p>{{ event.value }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class RichTextEventsCdn implements OnDestroy {
  @ViewChild("richtext", { read: ElementRef })
  container: ElementRef;

  richtext: any;
  wait: Promise<void>;

  isEmpty = true;
  events = [];
  eventsArray = ["change", "action", "selectionChange", "selectionRefresh"];

  clearAll() {
    this.isEmpty = true;
    this.events.length = 0;
  }

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js",
      "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css",
    ]).then(() => {
      this.richtext = new dhx.Richtext(this.container.nativeElement);

      this.eventsArray.forEach(event => {
        this.richtext.events.on(event, (...args) => {
          this.isEmpty = false;
          args = args.map(item => JSON.stringify(item));
          this.events = [{ name: event, value: `${args}` }].concat(this.events);
        });
      });
    });
  }

  ngOnDestroy() {
    this.richtext && this.richtext.destructor();
  }
}
