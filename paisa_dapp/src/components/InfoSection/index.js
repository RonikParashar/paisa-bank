import React from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,description, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
     <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}> {headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        <Button to='home'
                         smooth={true}
                         duration={500}
                         spy={true} //important to use spy = true otherwise it wont add active class to it
                         exact="true"
                         offset={-80} //this will in navbar when we scroll down the underline color will move from about to discover and so on and back to about when we scroll up
                         primary={primary ? 1:0}
                         dark={dark ? 1:0}
                         dark2={dark2 ? 1:0}
                        >{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img src={img} alt={alt}/>
                  </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>

     </InfoContainer>
    </>
  )
}
 
export default InfoSection