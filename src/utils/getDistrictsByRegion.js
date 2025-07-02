import warehouses from "@/data/warehouses.json";

export const getDistrictsByRegion = (district) => {
  const districts = warehouses
    .filter((wh) => wh.region === district)
    .map((wh) => wh.district);

  return districts;
};
