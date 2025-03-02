import Card from "./Card";

export const Products = ({ products }) => {
    console.log(products);
    
    return (
      <div>
        <h1 className="text-4xl font-bold text-amber-400 text-center">
          Products
        </h1>
        <div className="flex justify-around">
          {products.map((product, index) => {
            return <Card key={index + 1} product={product}/>;
          })}
        </div>
      </div>
    );
}
