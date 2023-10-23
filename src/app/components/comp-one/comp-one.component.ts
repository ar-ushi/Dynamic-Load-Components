import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, OnChanges, Component, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-one',
  standalone :true,
  imports:[CommonModule, FormsModule],
  changeDetection : ChangeDetectionStrategy.OnPush,
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss'],
})
export class CompOne implements OnChanges{
  @Input() Title : string | undefined;

  ngOnChanges(changes: SimpleChanges) : void {
    for (const propName in changes){
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
}
