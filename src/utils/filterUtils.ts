export const filterProducts = (
  data: DeviceType[],
  value: string,
  labelValue: string[]
): DeviceType[] => {
  const regEx = new RegExp(value, "gi");
  const checkBox = filteredCheckBox(data, labelValue);
  const searchBar = filteredSearch(checkBox, regEx);

  return searchBar;
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
  if (labelValue.length > 0) {
    return data.filter((item) => labelValue.includes(item.line.name));
  }
  return data;
};

const filteredSearch = (data: DeviceType[], regEx: RegExp): DeviceType[] => {
  return data.filter(
    (item) =>
      (regEx.test(item.product.name) || regEx.test(item.line.name)) && item
  );
};
