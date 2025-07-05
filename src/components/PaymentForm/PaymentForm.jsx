import { useAuthContext } from "@/context/Auth/AuthContext";
import useGetQueryFunctions from "@/hooks/useGetQueryFunctions";
import { useStripe } from "@stripe/react-stripe-js";
import { useElements } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { toast } from "sonner";

const PaymentForm = () => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuthContext();
  const {
    getParcelDetail,
    createPaymentIntent,
    createPaymentHistory,
  } = useGetQueryFunctions();

  const { data } = useQuery({
    queryKey: ["parcel", id],
    queryFn: () => getParcelDetail(id),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod(
      {
        type: "card",
        card,
      }
    );

    if (error) {
      setError(error.message);
    } else {
      const res = await createPaymentIntent(data);

      const result = await stripe.confirmCardPayment(
        res.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: user.name,
              email: user.email,
            },
          },
        }
      );

      if (result.paymentIntent.status === "succeeded") {
        const res = await createPaymentHistory({
          ...data.data,
          paymentMethod: paymentMethod.type,
          transactionId: result.paymentIntent.id,
        });

        toast.success(res.message);
        navigate("/dashboard/my-parcels");
      }
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        className="w-2/5 border border-gray-300 rounded-xl mx-auto shadow-lg"
        onSubmit={handleSubmit}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          className="p-5 border-gray-300 rounded"
        />
        <div className="text-center">
          <button
            className="btn btn-success text-secondary w-[250px] my-5"
            type="submit"
          >
            Pay ${data?.data?.totalCost}
          </button>
          {error && <p className="my-2 text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
