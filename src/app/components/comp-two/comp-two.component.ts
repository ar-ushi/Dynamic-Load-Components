import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  standalone: true,
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.scss']
})
export class CompTwo{
  @Input() Title : string | undefined;
  @Input() Review : string | undefined;
}
