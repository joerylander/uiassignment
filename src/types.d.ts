export {};

declare global {
  interface DataType {
    version: string;
    devices: DeviceType[];
  }

  interface DeviceType extends IdType {
    sysids: string[];
    icon: IconType;
    line: LineType;
    guids: string[];
    uisp: UispType;
    product: ProductType;
    shortnames: string[];
    triplets: string[];
  }

  interface IconType extends IdType {
    resolutions: number[][];
  }

  interface LineType extends IdType {
    name: string;
  }

  interface UispType {
    nameLegacy: string[];
    bleServices: {};
    line: string;
    firmware: FirmwareType;
  }

  interface ProductType {
    abbrev: string;
    name: string;
  }

  interface FirmwareType {
    platform?: string;
    board: string[];
  }

  interface IdType {
    id: string;
  }
}
