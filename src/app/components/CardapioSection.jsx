import FoodCard from "./FoodCard";

export default function CardapioSection() {
  return (
    <div className="mx-auto container lg:px-0 px-4">
      <h1 className="text-xl font-bold">Açai</h1>
      <div className="flex gap-5 mt-2 overflow-x-auto pb-5">
        <FoodCard
          name="Açai"
          description="Açai 500 Ml com leite ninho, leite condensado, morango, paçoca, granola, mousse de chocolate, calda, sorvete"
          price="R$5.99"
          imageUrl="/acai.jpeg"
        />
        <FoodCard
          name="Açai"
          description="Delicious açai bowl with fresh fruits"
          price="R$5.99"
          imageUrl="/acai.jpeg"
        />
        <FoodCard
          name="Açai"
          description="Delicious açai bowl with fresh fruits"
          price="R$5.99"
          imageUrl="/acai.jpeg"
        />
        <FoodCard
          name="Açai"
          description="Delicious açai bowl with fresh fruits"
          price="R$5.99"
          imageUrl="/acai.jpeg"
        />
        <FoodCard
          name="Açai"
          description="Delicious açai bowl with fresh fruits"
          price="R$5.99"
          imageUrl="/acai.jpeg"
        />
        <FoodCard
          name="Açai"
          description="Delicious açai bowl with fresh fruits"
          price="R$5.99"
          imageUrl="/acai.jpeg"
        />
        <FoodCard
          name="Açai"
          description="Delicious açai bowl with fresh fruits"
          price="R$5.99"
          imageUrl="/acai.jpeg"
        />
      </div>
      <h1 className="text-xl font-bold">Pizza</h1>
      <div className="flex gap-5 mt-2 overflow-x-auto pb-5">
        <FoodCard
          name="Pizza"
          description="Delicious pizza with fresh ingredients"
          price="R$5.99"
          imageUrl="/pizza.jpg"
        />
        <FoodCard
          name="Pizza"
          description="Delicious pizza with fresh ingredients"
          price="R$5.99"
          imageUrl="/pizza.jpg"
        />
        <FoodCard
          name="Pizza"
          description="Delicious pizza with fresh ingredients"
          price="R$5.99"
          imageUrl="/pizza.jpg"
        />
      </div>
      <h1 className="text-xl font-bold">Hambúrguer</h1>
      <div className="flex gap-5 mt-2 overflow-x-auto pb-5">
        <FoodCard
          name="Hambúrguer"
          description="Delicious hamburger with fresh ingredients"
          price="R$5.99"
          imageUrl="/hamburguer.png"
        />
        <FoodCard
          name="Hambúrguer"
          description="Delicious hamburger with fresh ingredients"
          price="R$5.99"
          imageUrl="/hamburguer.png"
        />
        <FoodCard
          name="Hambúrguer"
          description="Delicious hamburger with fresh ingredients"
          price="R$5.99"
          imageUrl="/hamburguer.png"
        />
      </div>
    </div>
  );
}
