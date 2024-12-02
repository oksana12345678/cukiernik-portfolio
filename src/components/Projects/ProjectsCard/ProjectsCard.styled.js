import styled from "styled-components";

export const ContainerDesc = styled.div`
  @media screen and (min-width: 320px) {
    border-radius: 16px;
    padding: 24px;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 550px;
    width: 100%;
  }
`;

export const PortfolioImage = styled.img`
  @media screen and (min-width: 320px) {
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
    height: 164px;
  }

  @media screen and (min-width: 768px) {
    height: 550px;
  }
`;

export const TechnologyAndRepoContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
  }
`;
