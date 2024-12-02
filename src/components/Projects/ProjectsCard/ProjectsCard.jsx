import {
  ContainerDesc,
  ImageContainer,
  PortfolioImage,
} from "./ProjectsCard.styled";

const ProjectsCard = ({ project }) => {
  return (
    <ContainerDesc>
      <ImageContainer>
        <PortfolioImage src={project} />
      </ImageContainer>
    </ContainerDesc>
  );
};

export default ProjectsCard;
