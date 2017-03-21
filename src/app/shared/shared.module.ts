import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpPipe} from './up.pipe';
import { TimeagoPipe } from './timeago.pipe';
import {Logger} from "./logger.service";

@NgModule({
  providers: [Logger],
  imports: [
    CommonModule
  ],
  declarations: [UpPipe, TimeagoPipe],
  exports: [UpPipe, TimeagoPipe]
})
export class SharedModule {
}
