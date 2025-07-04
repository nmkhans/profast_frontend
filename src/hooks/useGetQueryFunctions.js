import React from "react";
import useAxios from "./useAxios";

const useGetQueryFunctions = () => {
  const { axiosInstance } = useAxios();

  const getAllParcels = async (email) => {
    const res = await axiosInstance.get(
      email ? `/parcels?email=${email}` : "/parcels"
    );

    return res.data;
  };

  return { getAllParcels };
};

export default useGetQueryFunctions;
