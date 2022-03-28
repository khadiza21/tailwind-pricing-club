import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benifits from "../Benifits/Benifits";

const PricingOption = (props) => {
  const { name, price, benifits } = props.option;

  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 rounded text-xl font-bold">{name}</h2>
      <p className="my-4">
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div>
        <h3 className="text-xl text-left py-2">Benefits:</h3>
        {benifits.map((benifit) => (
          <Benifits benifit={benifit}></Benifits>
        ))}
      </div>
      <button className="bg-green-500 flex justify-center w-full py-3 my-5 text-white hover:text-green-900 font-bold  rounded-lg">Buy Now <ArrowRightIcon className="w-6 h-6 ml-3"></ArrowRightIcon> </button>
    </div>
  );
};

export default PricingOption;
