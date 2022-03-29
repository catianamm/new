import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Works</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}></ServicesIcon>
          <ServicesH2>Work 1</ServicesH2>
          {/* <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <ServicesH2>Work 2</ServicesH2>
          {/* <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}></ServicesIcon>
          <ServicesH2>Work 3</ServicesH2>
          {/* <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ServicesP> */}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
