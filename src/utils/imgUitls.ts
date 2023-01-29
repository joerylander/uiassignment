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
