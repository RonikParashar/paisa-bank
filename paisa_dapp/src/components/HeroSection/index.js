import React, {useState} from 'react';
import video from '../../videos/video1.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg,  HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
 const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>
            Sign up for a new account and receive a welcome bonus of Rs.1000 on your first transaction.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                primary = 'true'
                dark = 'true'
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >
                    Get started {hover ? <ArrowForward /> : <ArrowRight />} {/* on hover it will show arrow forward icon or else arrorw right*/}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection