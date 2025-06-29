import React from "react";
import Container from "@/layouts/Container";
import MerchantBoxImg from "@/assets/marchent_book.png";
import MerchantBackgroundImg from "@/assets/merchant_bg.png";

const BeAMerchant = () => {
  return (
    <section className="py-[80px]">
      <Container>
        <div
          style={{
            backgroundImage: `url(${MerchantBackgroundImg})`,
          }}
          className="bg-secondary text-white p-10 rounded-xl bg-no-repeat bg-top bg-contain"
        >
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <div className="w-full lg:w-2/3">
              <h3 className="text-3xl font-bold mb-5">
                Merchant and Customer Satisfaction <br /> is Our First
                Priority
              </h3>
              <p className="text-gray-300">
                We offer the lowest delivery charge with the highest
                value along with 100% safety of your product. Pathao
                courier delivers your parcels in every corner of
                Bangladesh right on time.
              </p>
              <div className="mt-5 flex flex-col lg:flex-row gap-5">
                <button className="btn btn-primary text-secondary rounded-4xl">
                  Become a Merchant
                </button>
                <button  className="btn btn-primary btn-outline text-primary rounded-4xl">Earn With Profast Courier</button>
              </div>
            </div>
            <div>
              <img src={MerchantBoxImg} alt="Merchant box" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BeAMerchant;
