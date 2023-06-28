import * as S from "./styles";
import producImg from "../../../../assets/product.jpg";
import { Button } from "../Button";
export const Box = () => {
  return (
    <S.Container>
      <div className="product-image">
        <img src={producImg} />
      </div>

      <S.CardContent>
        <div>
          <p data-testid="title-product">Ugly Glasses</p>
          <p data-testid="price-product">R$ 199,99</p>
        </div>

        <div>
          <Button>Comprar</Button>
        </div>
      </S.CardContent>
    </S.Container>
  );
};
