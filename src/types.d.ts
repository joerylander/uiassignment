export {};

declare global {
  interface DataType {
    version: string;
    devices: DeviceType[];
  }

  interface DeviceType extends IdType {
    sysid: string;
    sysids: string[];
    icon: IconType;
    line: LineType;
    guids: string[];
    uisp: UispType;
    product: ProductType;
    shortnames: string[];
    triplets: object[];
    unifi?: UnifiType;
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

  interface ColumnType {
    Header: string;
    accessor: string;
    Cell?: ({ cell: { value } }: CellProps<{}>) => JSX.Element | undefined;
  }

  interface UnifiType {
    adoptability?: string;
    network: {
      bleServices?: BleServicesType[];
      chipset?: string;
      deviceCapabilities?: string[];
      ethernetMaxSpeedMegabitsPerSecond?: number;
      features?: FeaturesType;
      hybrid?: string;
      minimumFirmwareRequired?: string;
      numberOfPorts?: number;
      ports?: PortsType;
      radios?: RadiosType;
      systemIdHexadecimal?: string;
      type?: string;
    };
  }

  interface BleServicesType {
    configured: string;
    default: string;
  }

  interface FeaturesType {
    atfDisabled: boolean;
    ax: boolean;
    bandsteer: boolean;
    gen: number;
  }

  interface PortsType {
    standard: number;
  }

  interface RadiosType {
    na: {
      gain: number;
      maxPower: number;
      maxSpeedMegabitsPerSecond: number;
    };
    ng: {
      gain: number;
      maxPower: number;
      maxSpeedMegabitsPerSecond: number;
    };
  }
}
