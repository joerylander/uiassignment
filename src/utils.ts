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
  value: string
): DeviceType[] => {
  const regEx = new RegExp(value, "gi");
  const items = data.filter((item) => {
    return (
      (regEx.test(item.product.name) || regEx.test(item.line.name)) && item
    );
  });
  return items;
};

export const filterUniqueProductName = (data: DeviceType[]): Set<string> => {
  const lineNameArr = data.map((device: DeviceType) => device.line.name);
  const uniqueArr = new Set(lineNameArr);
  return uniqueArr;
};
