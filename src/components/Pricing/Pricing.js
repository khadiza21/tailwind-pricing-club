import React from "react";

const Pricing = () => {
  const pricingOptions = [
    { id: 1, name: "Free", price: 0 },
    { id: 2, name: "Regular", price: 9.99 },
    { id: 3, name: "Premium", price: 19.99 },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8">
      <h1 className="text-6xl font-mono text-white">Best Deals of the Town</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        nesciunt optio deleniti cum, ipsum accusantium similique error porro
        quisquam iure.
      </p>

      {pricingOptions.map((option) => (
        <Pricing key={option.key} option={option}></Pricing>
      ))}
    </div>
  );
};

export default Pricing;
