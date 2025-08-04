import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { Item } from '../../data';

@Component({
  selector: 'app-sub-item',
  templateUrl: './sub-item.component.html',
  styleUrls: ['./sub-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubItemComponent {
  @Input() item: Item;
  @Input() connectedTo: string[];
  @Output() itemDrop: EventEmitter<CdkDragDrop<Item>>;

  constructor() {
    this.itemDrop = new EventEmitter();
  }

  public onDragDrop(event: CdkDragDrop<Item, Item>): void {
    this.itemDrop.emit(event);
  }
}
