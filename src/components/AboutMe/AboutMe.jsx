import { useEffect, useRef, useState } from "react";
import meSrc from "../../assets/FB_IMG_1519849053589.jpg";
import { TitleProjects } from "../Projects/Projects.styled";
import {
  AboutMeSection,
  ContainerAboutMe,
  DescAboutMe,
  DescContainerAboutMeLeft,
  DescContainerAboutMeRight,
  Image,
  MainContainerAboutMe,
} from "./AboutMe.styled";
import Skills from "./Skills/Skills";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <AboutMeSection id="about-me" ref={sectionRef}>
      <MainContainerAboutMe>
        <TitleProjects>About me</TitleProjects>
        <ContainerAboutMe>
          <DescContainerAboutMeLeft $isVisible={isVisible}>
            <DescAboutMe>
              Jako cukiernik, mam pasję do tworzenia wyjątkowych deserów, które
              zachwycają nie tylko smakiem, ale także estetyką. Moja praca
              polega na przygotowywaniu różnorodnych wypieków, od klasycznych
              ciast po innowacyjne desery, które łączą tradycję z nowoczesnymi
              technikami. Zawsze staram się dbać o jakość składników i precyzję
              wykonania, aby każdy wypiek był niepowtarzalny. Pasjonuję się
              także dekorowaniem ciast, co pozwala mi wyrazić swoją kreatywność
              w pełni. Praca cukiernika to dla mnie nie tylko zawód, ale
              prawdziwa pasja, która daje mi ogromną satysfakcję, gdy mogę
              dzielić się swoimi dziełami z innymi.
            </DescAboutMe>
          </DescContainerAboutMeLeft>
          <DescContainerAboutMeRight $isVisible={isVisible}>
            <Image src={meSrc} alt="Frontend Developer" />
          </DescContainerAboutMeRight>
        </ContainerAboutMe>
      </MainContainerAboutMe>
      <Skills />
    </AboutMeSection>
  );
};

export default AboutMe;
