import { BehaviorSubject } from 'rxjs';

export class BaseModelStream<T> {
  /** Stream that emits whenever the data has been modified. */
  dataStream: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  constructor(itemsData?: T[]) {
    if (!!itemsData && !!itemsData.length) {
      this.addMultiple(itemsData);
    }
  }

  get data(): T[] {
    return this.dataStream.value;
  }

  /** Adds a new item to the database. */
  add(itemData: T) {
    const copiedData = this.data.slice();
    copiedData.push(itemData);
    this.dataStream.next(copiedData);
  }

  addFrist(itemData: T) {
    const copiedData = this.data.slice();
    const result: T[] = [];
    result.push(itemData);
    result.push(...copiedData);
    this.dataStream.next(result);
  }

  addMultiple(itemsData: T[]) {
    const copiedData = this.data.slice();
    copiedData.push(...itemsData);
    this.dataStream.next(copiedData);
  }

  find(itemKey: string, key: string): T | undefined {
    return this.data.find((e: T | any) => e[key].toString() === itemKey);
  }

  update(itemData: T | any) {
    const copiedData = this.data.slice().map((data: T | any) => {
      if (data['id'] !== itemData['id']) {
        return data;
      }
      return itemData;
    });
    this.dataStream.next(copiedData);
  }

  remove(itemKey: string | undefined, key: string) {
    if (itemKey) {
      const copiedData = this.data.slice().filter((e: T | any) => e[key].toString() !== itemKey);
      this.dataStream.next(copiedData);
    }
  }

  get isDataLoaded(): boolean {
    return !!this.data && !!this.data.length;
  }

  clear() {
    this.dataStream.next([]);
  }
}
