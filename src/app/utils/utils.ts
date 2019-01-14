import { FormControl } from "@angular/forms";
declare var $: any;

export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const Phone_REGEX = /^[0-9]*$/;
export const Number_REGEX = /^[0-9]*$/;
export const AlphaNumeric_REGEX = /^[a-z\d\-_\s]+$/i;
export const Alphabatic_REGEX = /^[a-zA-Z ]*$/;
export const Date_REGEX = /^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/;
export const Number_REGEX_withComma = /(\d{0,3},)?(\d{3},)?\d{0,3}/
export class JsUIUtils {
  constructor() { }
  public jsCollapse = (query: string) => {
    console.log("jsCollapse");
    $("" + query).collapse("toggle");
  };
}
export const integerVld = (min: number) => {
  return (control: FormControl) => {
    let value = control.value;
    if (("" + value).length > 0) {
      if (isNaN(value)) {
        return { integerVld: true };
      }
      if (value < min) {
        return { integerVld: true };
      }
    }
    return null;
  };
};
export const getNewUniqueTimeKey = (): string => {
  return "Key_" + Date.now();
}
export const PositiveFloating = (min: number) => {
  return (control: FormControl) => {
    let value = control.value;

    if ((value + "").trim().length > 0) {
      if (value < 0) {
        return { positivefloating: true };
      } else if (("" + value).startsWith("-")) {
        return { positivefloating: true };
      } else {
        if (("" + value).length < 50) {
          if (("" + value).includes("-")) {
            return { positivefloating: true };
          } else {
            if (isNaN(value)) {
              return { positivefloating: true };
            }
          }
        } else {
          return { positivefloating: true };
        }
      }
      if (value < min) {
        return { positivefloating: true };
      }
    }
    return null;
  };
};

export const getInt = (vl: any): number => {
  var x = parseInt(vl);
  return isNaN(x) ? 0 : x;
};
export const getDateString = (val: any): string => {
  var Date1 = new Date(val);
  var dd = Date1.getDate();
  var mm = Date1.getMonth() + 1; //January is 0!

  var dds = "" + dd;
  var mms = "" + mm;
  var yyyy = Date1.getFullYear();
  if (dd < 10) {
    dds = "0" + dd;
  }
  if (mm < 10) {
    mms = "0" + mm;
  }
  return yyyy + "-" + mms + "-" + dds;
};
export const get_uuid32 = () => {
  if (typeof window !== "undefined" && typeof window.crypto !== "undefined" && typeof window.crypto.getRandomValues !== "undefined") {
    var buf = new Uint16Array(8);
    window.crypto.getRandomValues(buf);
    return (
      this.pad4(buf[0]) +
      this.pad4(buf[1]) +
      this.pad4(buf[2]) +
      this.pad4(buf[3]) +
      this.pad4(buf[4]) +
      this.pad4(buf[5]) +
      this.pad4(buf[6]) +
      this.pad4(buf[7])
    );
  } else {
    return (
      this.random4() + this.random4() + this.random4() + this.random4() + this.random4() + this.random4() + this.random4() + this.random4()
    );
  }
};
export const get_uuid8 = () => {
  if (typeof window !== "undefined" && typeof window.crypto !== "undefined" && typeof window.crypto.getRandomValues !== "undefined") {
    var buf = new Uint16Array(4);
    window.crypto.getRandomValues(buf);
    return this.pad4(buf[0]) + this.pad4(buf[1]) + this.pad4(buf[2]) + this.pad4(buf[3]);
  } else {
    return this.random4() + this.random4() + this.random4() + this.random4();
  }
};
export const pad4 = num => {
  var ret = num.toString(16);
  while (ret.length < 4) {
    ret = "0" + ret;
  }
  return ret;
};
export const random4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

export const getIDFromURL = (url1: string) => {
  var index = (url1 + "").lastIndexOf("/");
  var id = (url1 + "").substring(index + 1, url1.length);
  return id;
};
export const parseLangCode = (langcode: string) => {
  return langcode == "en" ? 0 : langcode == "si" ? 1 : langcode == "ta" ? 2 : -1;
};
export const shuffle = listData => {
  for (let i = listData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [listData[i], listData[j]] = [listData[j], listData[i]];
  }
  return listData;
};

export const cloneObject = (data: any): any => {
  return JSON.parse(JSON.stringify(data));
};
export const cloneMap = (data: Map<any, any>): Map<any, any> => {
  let clonedMap = new Map<any, any>();
  data.forEach((v: any, k: any) => {
    clonedMap.set(k, cloneObject(v));
  });
  return clonedMap;
};
export const getKeys = (map: Map<string, any>): Array<string> => {
  const ar: Array<string> = [];
  map.forEach((v: any, k: string) => {
    ar.push(k);
  });
  return ar;
};
