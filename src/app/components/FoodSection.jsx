export default function FoodSection(
  nomeSection,
  nomeFood,
  descriptionFood,
  priceFood,
  imageUrlFood
) {
  return (
    <div className="pt-6">
      <h2 className="text-xl font-semibold">{nomeSection}</h2>
      <div className="grid lg:grid-cols-2 items-center mt-4 gap-1 lg:gap-0 ">
        <FoodCardGeral
          name={nomeFood}
          description={descriptionFood}
          price={priceFood}
          imageUrl={imageUrlFood}
        />
      </div>
    </div>
  );
}
