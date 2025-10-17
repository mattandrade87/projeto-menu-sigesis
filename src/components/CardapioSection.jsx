import FoodCardDestaque from "./FoodCardDestaque";
import FoodCardGeral from "./FoodCardGeral";

import { acaiData, hamrburgerData, pizzaData } from "../mock/FoodMock";

export default function CardapioSection() {
  return (
    <div className="mx-auto container  2xl:px-22  px-4 pb-4">
      <h1 className="text-xl font-bold">Destaques da Semana</h1>

      <div className="flex gap-3 mt-2 overflow-x-auto pb-5">
        <FoodCardDestaque
          name="Açai"
          description="Açai 500 Ml com leite ninho, leite condensado, morango, paçoca, granola, mousse de chocolate, calda, sorvete"
          price="R$5.99"
          imageUrl="/acai.jpeg"
        />
        <FoodCardDestaque
          name="Pizza"
          description="Delicious pizza with fresh ingredients"
          price="R$5.99"
          imageUrl="/pizza.jpg"
        />
        <FoodCardDestaque
          name="Hambúrguer"
          description="Delicious hamburger with fresh ingredients"
          price="R$5.99"
          imageUrl="/hamburguer.png"
        />
        <FoodCardDestaque
          name="Açai"
          description="Açai 500 Ml com leite ninho, leite condensado, morango, paçoca, granola, mousse de chocolate, calda, sorvete"
          price="R$5.99"
          imageUrl="/acai.jpeg"
        />
        <FoodCardDestaque
          name="Pizza"
          description="Delicious pizza with fresh ingredients"
          price="R$5.99"
          imageUrl="/pizza.jpg"
        />
        <FoodCardDestaque
          name="Hambúrguer"
          description="Delicious hamburger with fresh ingredients"
          price="R$5.99"
          imageUrl="/hamburguer.png"
        />
      </div>
      <div className="pt-6">
        <h2 className="text-xl font-semibold">Açai</h2>
        <div className="grid lg:grid-cols-2 items-center mt-2 gap-1 lg:gap-1 ">
          {acaiData.map((item, index) => {
            return (
              <FoodCardGeral
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </div>
      </div>
      <div className="pt-6">
        <h2 className="text-xl font-semibold ">Pizza</h2>
        <div className="grid lg:grid-cols-2 items-center mt-2 gap-1 lg:gap-1 ">
          {pizzaData.map((item, index) => {
            return (
              <FoodCardGeral
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </div>
      </div>
      <div className="pt-6">
        <h2 className="text-xl font-semibold">Hamburguer</h2>
        <div className="grid lg:grid-cols-2 items-center mt-2 gap-1 lg:gap-1 ">
          {hamrburgerData.map((item, index) => {
            return (
              <FoodCardGeral
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
