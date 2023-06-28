import { Box } from "./components/Box";
import { Header } from "./components/Header";
import * as S from "./styles";

export const ReactTest = () => {
  return (
    <S.Container>
      <S.BannerContent>
        <Header />
      </S.BannerContent>

      <S.Content>
        <h1>Your fucking busness</h1>

        <Box />
      </S.Content>
    </S.Container>
  );
};
