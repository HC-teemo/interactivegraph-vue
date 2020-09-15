/**
 * Created by bluejoe on 2018/2/6.
 */
///////////////////////////////////


export class Utils {
  public static distinct(arr: any[]): any[] {
    const ae: any[] = [];
    arr.forEach((t) => {
      if (ae.indexOf(t) < 0) {
        ae.push(t);
      }
    });
    return ae;
  }

  public static partOf(keys: string[], src: any) {
    const filtered: any = {};
    keys.forEach((key) => {
      if (src[key] !== undefined) {
        filtered[key] = src[key];
      }
    });

    return filtered;
  }

  public static flatMap(arr: any[], func: (t: any) => any[]): any[] {
    const ae: any[] = [];
    arr.forEach((t) => {
      const r = func(t);
      r.forEach((ri) => {
        ae.push(ri);
      });
    });

    return ae;
  }

  public static toArray<T>(it: IterableIterator<T>) {
    const arr = [];
    while (true) {
      const v = it.next();
      if (v.done) {
        break;
      }

      arr.push(v.value);
    }

    return arr;
  }

  public static deepClone(value: any): any {
    if (value === undefined) {
      return undefined;
    }

    if (value === null) {
      return null;
    }

    if (typeof (value) === 'string'
      || typeof (value) === 'number'
      || typeof (value) === 'boolean'
      || value instanceof Function) {
      return value;
    }

    if (value instanceof Array) {
      const arr: any[] = value;
      return arr.map((item) => {
        return Utils.deepClone(item);
      });
    }

    if (typeof (value) === 'object') {
      return Utils._deepCloneObject(value);
    }

    throw new TypeError('unsupported type: ' + typeof (value));
  }

  public static deepExtend(base: any, delta: any): object {
    // do not working on base object
    const dest = Utils._deepCloneObject(base);

    for (const key in delta) {
      if (delta.hasOwnProperty(key)) {
        const baseValue = base[key];
        const extValue = delta[key];

        if (typeof (extValue) == 'object' &&
          typeof (baseValue) == 'object') {
          dest[key] = Utils.deepExtend(baseValue, extValue);
          continue;
        }

        // base={a:{x:...}}, ext={a:2}
        dest[key] = Utils.deepClone(extValue);
      }
    }

    return dest;
  }

  /**
	 * evalate each property which is a Function(currentObject)
	 */
  public static evaluate(o) {
    for (const key in o) {
      if (o[key] instanceof Function) {
        const fun = o[key];
        o[key] = fun(o);
      }
    }
  }

  public static toMap(o): Map<any, any> {
    const m = new Map();
    for (const key in o) {
      if (o.hasOwnProperty(key)) {
        m.set(key, o[key]);
      }
    }

    return m;
  }

  private static _deepCloneObject(src: object): object {
    const dest = {};
    for (const key in src) {
      if (src.hasOwnProperty(key)) {
        const value = src[key];
        dest[key] = Utils.deepClone(value);
      }
    }

    return dest;
  }
}

////////////// Point/////////////////
export class Point {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public delta(delta: Point) {
    this.x += delta.x;
    this.y += delta.y;
  }

  public expand(width: number, height: number) {
    return new Rect(this.x - width / 2, this.y - height / 2, this.x + width / 2, this.y + height / 2);
  }
}

////////////// Rect/////////////////
export class Rect {
  public x1: number;
  public y1: number;
  public x2: number;
  public y2: number;

  public constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = Math.min(x1, x2);
    this.y1 = Math.min(y1, y2);
    this.x2 = Math.max(x1, x2);
    this.y2 = Math.max(y1, y2);
  }

  public center(): Point {
    return new Point((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
  }

  public width() {
    return this.x2 - this.x1;
  }

  public height() {
    return this.y2 - this.y1;
  }
}
