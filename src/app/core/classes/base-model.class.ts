export class BaseModelClass<T> {
  constructor() {}

  static fromJS<T>(data: T): BaseModelClass<T> {
    data = typeof data === 'object' ? data : ({} as T);
    const result = new this<T>();
    result.init(data);
    return result;
  }

  init(data?: T | any) {
    if (data) {
      for (const property in this) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }

  toJSON(data?: T): T {
    data = typeof data === 'object' ? data : ({} as T);
    for (const property in this) {
      if (this.hasOwnProperty(property)) {
        (data as any)[property] = (this as any)[property];
      }
    }
    return data;
  }

  clone(): T {
    const json = this.toJSON();
    const result = Object.create(this);
    result.init(json);
    return result;
  }

  get keys(): string[] {
    return Object.keys(this);
  }
}
