import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DEMO_DATA, Item } from '../data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public root: Item;
  public get connectedTo(): string[] {
    return this.getIdsRecursive(this.root).reverse();
  }

  constructor() {
    this.root = { uId: '-1', name: 'root', children: DEMO_DATA } as Item;
  }

  onDragDrop = (event: CdkDragDrop<Array<Item>>) => {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  };

  private getIdsRecursive(item: Item): string[] {
    let ids = [item.uId];
    item.children.forEach(childItem => {
      ids = ids.concat(this.getIdsRecursive(childItem));
    });
    return ids;
  }
}
