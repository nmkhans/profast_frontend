import React from "react";
import useGetQueryFunctions from "@/hooks/useGetQueryFunctions";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useAuthContext } from "@/context/Auth/AuthContext";
import Spinner from "@/components/Spinner/Spinner";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const MyParcel = () => {
  const { getAllParcels, deleteParcel } = useGetQueryFunctions();
  const { user } = useAuthContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isPending } = useQuery({
    queryKey: ["my-parcels", user?.email],
    queryFn: () => getAllParcels(user?.email),
  });

  const { mutate } = useMutation({
    mutationFn: (id) => deleteParcel(id),
  });

  const handleDelete = (id) => {
    mutate(id, {
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({
          queryKey: ["my-parcels", user.email],
        });
      },
    });
  };

  const handlePay = (id) => {
    navigate(`/payment/${id}`);
  };

  return (
    <section className="py-[80px]">
      <div className="px-2 lg:px-10">
        <div className="mb-10">
          <h2 className="text-secondary text-3xl font-bold text-center">
            My parcels
          </h2>
        </div>
        <div>
          {isPending ? (
            <div className="text-center">
              <Spinner />
            </div>
          ) : data?.data?.length > 0 ? (
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Created At</th>
                    <th>Cost</th>
                    <th>Payment</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((parcel, i) => (
                    <tr key={parcel._id}>
                      <th>{i + 1}</th>
                      <td>{parcel.parcelType}</td>
                      <td>
                        {new Date(parcel.createdAt).toLocaleString()}
                      </td>
                      <td>{parcel.totalCost}</td>
                      <td>
                        <span
                          className={`badge badge-soft ${
                            parcel.paymentStatus === "unpaid"
                              ? "badge-error"
                              : "badge-success"
                          }`}
                        >
                          {parcel.paymentStatus}
                        </span>
                      </td>
                      <td className="flex gap-5">
                        <button className="btn btn-sm btn-outline">
                          View
                        </button>
                        <button
                          disabled={parcel.paymentStatus === "paid"}
                          onClick={() => handlePay(parcel._id)}
                          className="btn btn-sm btn-outline btn-success"
                        >
                          Pay
                        </button>
                        <button
                          onClick={() => handleDelete(parcel._id)}
                          className="btn btn-sm btn-outline btn-error"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>No Parcel Available!</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyParcel;
