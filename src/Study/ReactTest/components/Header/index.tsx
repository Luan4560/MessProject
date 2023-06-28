import * as S from "./styles";

export const Header = () => {
  const headerNavigation = ["Home", "Contact", "About Us"];

  return (
    <S.Header data-testid="header">
      <div data-testid="logo">
        <h3>Logo</h3>
      </div>
      <S.HeaderNavigation>
        {headerNavigation.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </S.HeaderNavigation>
    </S.Header>
  );
};
