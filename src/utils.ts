const resolutionsMap = {
  xs: 25,
  sm: 51,
  md: 101,
  lg: 129,
  xl: 257,
};

type SizeTypes = "xs" | "sm" | "md" | "lg" | "xl";

export const resolutionSelector = (
  size: SizeTypes,
  resolutions: number[][]
): number[] => {
  const resolution = resolutionsMap[size];
  const sortedRes =
    resolutions.find((res) => {
      return res[0] === resolution;
    }) ?? [];

  return sortedRes;
};

export const iconUrlGenerator = (id: string, resolutions: number[]): string => {
  const resString = resolutions.join("x");
  return `https://static.ui.com/fingerprint/ui/icons/${id}_${resString}.png`;
};

export const filterProducts = (
  data: DeviceType[],
  value: string,
  labelValue: string[]
): DeviceType[] => {
  const regEx = new RegExp(value, "gi");

  if (labelValue.length > 0) {
    return filteredCheckBox(data, labelValue);
  }

  return filteredSearch(data, regEx);
};

export const filterUniqueProductList = (data: DeviceType[]): Set<string> => {
  const lineNameArr = data.map((device: DeviceType) => device.line.name);
  const uniqueArr = new Set(lineNameArr);
  return uniqueArr;
};

const filteredCheckBox = (
  data: DeviceType[],
  labelValue: string[]
): DeviceType[] => {
  return data.filter((item) => labelValue.includes(item.line.name));
};

const filteredSearch = (data: DeviceType[], regEx: RegExp): DeviceType[] => {
  return data.filter(
    (item) =>
      (regEx.test(item.product.name) || regEx.test(item.line.name)) && item
  );
};
