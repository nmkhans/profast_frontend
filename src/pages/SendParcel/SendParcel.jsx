import React from "react";
import Container from "@/layouts/Container";
import { useForm } from "react-hook-form";
import FieldError from "@/components/FieldError/FieldError";
import { useAuthContext } from "@/context/Auth/AuthContext";
import Spinner from "@/components/Spinner/Spinner";
import warehouses from "@/data/warehouses.json";
import { getDistrictsByRegion } from "@/utils/getDistrictsByRegion";
import { calculateCost } from "@/utils/calculateCost";
import Swal from "sweetalert2";
import { generateTrackingId } from "@/utils/generateTrackingId";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { user, loading } = useAuthContext();

  const regions = [...new Set(warehouses.map((wh) => wh.region))];

  const parcelType = watch("parcelType");
  const senderWarehouse = watch("senderWarehouse");
  const reciverWarehouse = watch("reciverWarehouse");

  const onSubmit = async (data) => {
    const totalCost = calculateCost(data);

    const parcelData = {
      ...data,
      totalCost,
      createdBy: user?.email,
      deliveryStatus: "not_collected",
      paymentStatus: "unpaid",
      trackingId: generateTrackingId(),
      createdAt: new Date().toISOString(),
    };

    Swal.fire({
      title: "Confirm booking!",
      text: "Your shipment booking is being placed. Please checkout to confirm!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "gray",
      cancelButtonText: "Keep editing.",
      confirmButtonText: "Proceed to checkout.",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(parcelData);
        /* Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        }); */
      }
    });
  };

  return (
    <section className="py-[40px]">
      <Container>
        <div className="bg-base-100 p-2 lg:p-10 rounded-xl">
          <div>
            <h3 className="text-secondary text-3xl font-bold">
              Send Parcel
            </h3>
            <div className="divider mt-10"></div>
          </div>
          <div>
            {loading ? (
              <div className="text-center">
                <Spinner />
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-base-100 py-4 sm:py-6 lg:py-8">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8">
                      {/* Header */}
                      <h1 className="text-xl sm:text-2xl font-bold text-base-content mb-6 sm:mb-8">
                        Enter your parcel details
                      </h1>

                      {/* Document Type Selection */}
                      <div className="mb-6 sm:mb-8">
                        <div className="flex flex-wrap gap-4 sm:gap-6">
                          <div className="form-control">
                            <label className="label cursor-pointer gap-2">
                              <input
                                type="radio"
                                name="document-type"
                                className="radio text-primary"
                                defaultChecked
                                value="document"
                                {...register("parcelType")}
                              />
                              <span className="label-text font-medium">
                                Document
                              </span>
                            </label>
                          </div>

                          <div className="form-control">
                            <label className="label cursor-pointer gap-2">
                              <input
                                type="radio"
                                name="document-type"
                                className="radio text-primary"
                                value="non-document"
                                {...register("parcelType")}
                              />
                              <span className="label-text font-medium">
                                Non-Document
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Parcel Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-medium">
                              Parcel Name
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Parcel Name"
                            className="input input-bordered w-full text-sm sm:text-base"
                            {...register("parcelName", {
                              required: {
                                value: true,
                                message: "Parcel name is required!",
                              },
                            })}
                          />
                          <FieldError
                            name="parcelName"
                            type="required"
                            errors={errors}
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-medium">
                              Parcel Weight (KG)
                            </span>
                          </label>
                          <input
                            disabled={
                              !parcelType || parcelType === "document"
                            }
                            type="text"
                            placeholder="Parcel Weight (KG)"
                            className="input input-bordered w-full text-sm sm:text-base"
                            defaultValue={0}
                            {...register("parcelWeight", {
                              required: {
                                value: true,
                                message: "Weight is required!",
                              },
                              validate: {
                                min: (value) => {
                                  return parcelType === "non-document"
                                    ? value < 1
                                      ? "Weight can not be less than 1kg"
                                      : true
                                    : true;
                                },
                              },
                            })}
                          />
                          <FieldError
                            name="parcelWeight"
                            type="required"
                            errors={errors}
                          />
                          <FieldError
                            name="parcelWeight"
                            type="min"
                            errors={errors}
                          />
                        </div>
                      </div>

                      {/* Sender and Receiver Details */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 sm:mb-8">
                        {/* Sender Details */}
                        <div>
                          <h2 className="text-lg font-semibold text-base-content mb-4 sm:mb-6">
                            Sender Details
                          </h2>
                          <div className="space-y-4">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-medium">
                                  Sender Name
                                </span>
                              </label>
                              <input
                                type="text"
                                placeholder="Sender Name"
                                className="input input-bordered w-full text-sm sm:text-base"
                                defaultValue={user?.displayName}
                                {...register("senderName")}
                              />
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-medium">
                                  Sender Pickup Ware House
                                </span>
                              </label>
                              <select
                                className="select select-bordered w-full text-sm sm:text-base"
                                defaultValue={"default"}
                                {...register("senderWarehouse", {
                                  validate: {
                                    default: (value) =>
                                      value === "default"
                                        ? "Select a warehouse"
                                        : true,
                                  },
                                })}
                              >
                                <option disabled value="default">
                                  Select Ware House
                                </option>
                                {regions.map((region) => (
                                  <option key={region} value={region}>
                                    {region}
                                  </option>
                                ))}
                              </select>
                              <FieldError
                                name="senderWarehouse"
                                type="default"
                                errors={errors}
                              />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-medium">
                                    Address
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Address"
                                  className="input input-bordered w-full text-sm sm:text-base"
                                  {...register("senderAddress", {
                                    required: {
                                      value: true,
                                      message: "Address is required!",
                                    },
                                  })}
                                />
                                <FieldError
                                  name="senderAddress"
                                  type="required"
                                  errors={errors}
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-medium">
                                    Sender Contact No
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Sender Contact No"
                                  className="input input-bordered w-full text-sm sm:text-base"
                                  {...register("senderNumber", {
                                    required: {
                                      value: true,
                                      message:
                                        "Sender Number is required!",
                                    },
                                  })}
                                />
                                <FieldError
                                  name="senderNumber"
                                  type="required"
                                  errors={errors}
                                />
                              </div>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-medium">
                                  Your Region
                                </span>
                              </label>
                              <select
                                className="select select-bordered w-full text-sm sm:text-base"
                                defaultValue="default"
                                disabled={
                                  !senderWarehouse ||
                                  senderWarehouse === "default"
                                }
                                {...register("senderRegion", {
                                  validate: {
                                    default: (value) =>
                                      value === "default"
                                        ? "Select a region"
                                        : true,
                                  },
                                })}
                              >
                                <option value="default" disabled>
                                  Select your region
                                </option>
                                {getDistrictsByRegion(
                                  senderWarehouse
                                ).map((district) => (
                                  <option
                                    key={district}
                                    value={district}
                                  >
                                    {district}
                                  </option>
                                ))}
                              </select>
                              <FieldError
                                name="senderRegion"
                                type="default"
                                errors={errors}
                              />
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-medium">
                                  Pickup Instruction
                                </span>
                              </label>
                              <textarea
                                placeholder="Pickup Instruction"
                                className="textarea textarea-bordered w-full text-sm sm:text-base h-20 sm:h-24"
                                {...register("pickupInstruction", {
                                  required: {
                                    value: true,
                                    message:
                                      "An instruction is required!",
                                  },
                                })}
                              ></textarea>
                              <FieldError
                                name="pickupInstruction"
                                type="required"
                                errors={errors}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Receiver Details */}
                        <div>
                          <h2 className="text-lg font-semibold text-base-content mb-4 sm:mb-6">
                            Receiver Details
                          </h2>
                          <div className="space-y-4">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-medium">
                                  Receiver Name
                                </span>
                              </label>
                              <input
                                type="text"
                                placeholder="Receiver Name"
                                className="input input-bordered w-full text-sm sm:text-base"
                                {...register("reciverName", {
                                  required: {
                                    value: true,
                                    message:
                                      "Reciver name is required!",
                                  },
                                })}
                              />
                              <FieldError
                                name="reciverName"
                                type="required"
                                errors={errors}
                              />
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-medium">
                                  Receiver Delivery Wire House
                                </span>
                              </label>
                              <select
                                className="select select-bordered w-full text-sm sm:text-base"
                                defaultValue="default"
                                {...register("reciverWarehouse", {
                                  validate: {
                                    default: (value) =>
                                      value === "default"
                                        ? "Select a warehouse"
                                        : true,
                                  },
                                })}
                              >
                                <option value="default" disabled>
                                  Select Wire House
                                </option>
                                {regions.map((region) => (
                                  <option key={region} value={region}>
                                    {region}
                                  </option>
                                ))}
                              </select>
                              <FieldError
                                name="reciverWarehouse"
                                type="default"
                                errors={errors}
                              />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-medium">
                                    Receiver Address
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Address"
                                  className="input input-bordered w-full text-sm sm:text-base"
                                  {...register("reciverAddress", {
                                    required: {
                                      value: true,
                                      message: "Address is required!",
                                    },
                                  })}
                                />
                                <FieldError
                                  name="reciverAddress"
                                  type="required"
                                  errors={errors}
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-medium">
                                    Receiver Contact No
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Sender Contact No"
                                  className="input input-bordered w-full text-sm sm:text-base"
                                  {...register("reciverNumber", {
                                    required: {
                                      value: true,
                                      message:
                                        "Reciver number is required!",
                                    },
                                  })}
                                />
                                <FieldError
                                  name="reciverNumber"
                                  type="required"
                                  errors={errors}
                                />
                              </div>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-medium">
                                  Receiver Region
                                </span>
                              </label>
                              <select
                                className="select select-bordered w-full text-sm sm:text-base"
                                defaultValue="default"
                                disabled={
                                  !reciverWarehouse ||
                                  reciverWarehouse === "default"
                                }
                                {...register("reciverRegion", {
                                  validate: {
                                    default: (value) =>
                                      value === "default"
                                        ? "Select a region"
                                        : true,
                                  },
                                })}
                              >
                                <option value="default" disabled>
                                  Select reciver region
                                </option>
                                {getDistrictsByRegion(
                                  reciverWarehouse
                                ).map((district) => (
                                  <option
                                    key={district}
                                    value={district}
                                  >
                                    {district}
                                  </option>
                                ))}
                              </select>
                              <FieldError
                                name="reciverRegion"
                                type="default"
                                errors={errors}
                              />
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text font-medium">
                                  Delivery Instruction
                                </span>
                              </label>
                              <textarea
                                placeholder="Delivery Instruction"
                                className="textarea textarea-bordered w-full text-sm sm:text-base h-20 sm:h-24"
                                {...register("deliveryInstruction", {
                                  required: {
                                    value: true,
                                    message:
                                      "An instruction is required!",
                                  },
                                })}
                              ></textarea>
                              <FieldError
                                name="deliveryInstruction"
                                type="required"
                                errors={errors}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="border-t border-base-300 pt-4 sm:pt-6">
                        <p className="text-xs sm:text-sm text-base-content/70 mb-4">
                          * PickUp Time 4pm-7pm Approx
                        </p>
                        <button className="btn text-white font-medium w-full sm:w-auto px-6 sm:px-8 text-sm sm:text-base bg-primary border-primary">
                          Proceed to Confirm Booking
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default SendParcel;
