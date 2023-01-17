import React from 'react';
import Icon1 from '../../images/svg-4.png'
import Icon2 from '../../images/svg-5.png'
import Icon3 from '../../images/svg-6.png'
import { ServiceContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2,ServicesIcon, ServicesP} from './ServicesElements';

const Services = () => {
  return (
    <ServiceContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Premium Bank</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>

    </ServiceContainer>
  )
}

export default Services