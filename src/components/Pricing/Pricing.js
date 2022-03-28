import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      benifits: [
        "everything on free",
        "unlimited deals",
        "localized deals",
        "fantastic deals",
        "crazy deals",
      ],
    },
    {
      id: 2,
      name: "Regular",
      price: 9.99,
      benifits: [
        "lifetime on free",
        "unlimited deals",
        "localized deals",
        "fantastic deals",
        "crazy deals",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.99,
      benifits: [
        "everything on regular",
        "unlimited deals",
        "localized deals",
        "fantastic deals",
        "crazy deals",
      ],
    },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8">
      <h1 className="text-6xl font-mono text-white">Best Deals of the Town</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        nesciunt optio deleniti cum, ipsum accusantium similique error porro
        quisquam iure.
      </p>

      <div className="grid md:grid-cols-3 gap-3 mt-8">
        {pricingOptions.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
