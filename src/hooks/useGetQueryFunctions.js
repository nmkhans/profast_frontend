import React from "react";
import useAxios from "./useAxios";
import { toast } from "sonner";

const useGetQueryFunctions = () => {
  const { axiosInstance } = useAxios();

  const getAllParcels = async (email) => {
    try {
      const res = await axiosInstance.get(
        email ? `/parcels?email=${email}` : "/parcels"
      );

      return res.data;
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteParcel = async (id) => {
    try {
      const res = await axiosInstance.delete(`/parcels/delete/${id}`);

      return res.data;
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { getAllParcels, deleteParcel };
};

export default useGetQueryFunctions;
