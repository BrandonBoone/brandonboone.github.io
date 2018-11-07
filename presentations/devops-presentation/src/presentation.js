// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear
} from 'spectacle';

import img_born from './images/born.png';
import img_winner from './images/winner.png';
import img_journey from './images/journey.png';
import img_factory from './images/factory.png';
import img_shock from './images/shock.png';
import img_accept from './images/accept.png';
import img_reject from './images/reject.png';
import img_time from './images/time.png';
import img_machine1 from './images/machine1.png';
import img_machine2 from './images/machine2.png';
import img_machine3 from './images/machine3.png';
import img_machine4 from './images/machine4.png';
import img_machine5 from './images/machine5.png';
import img_machine6 from './images/machine6.png';
import img_machine7 from './images/machine7.png';
import img_machine8 from './images/machine8.png';
import img_machine9 from './images/machine9.png';
import img_machine10 from './images/machine10.png';
import img_firstWay from './images/firstWay.png';
import img_sleep from './images/sleep.png';
import img_ballMachine from './images/ballMachine.gif';
import img_secondWay from './images/secondWay.png';
import img_visible from './images/visible.png';
// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const imageStyle ={
  width:'50%',
  height:'auto'
};

const imageStyle2 ={
  width:'25%',
  height:'auto'
};

const imageStyle3 ={
  width:'75%',
  height:'auto'
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            DevOps
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          A story in IV Acts
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Act I
          </Heading>
          <Heading size={4} lineHeight={1} textColor="tertiary">
            Inception
          </Heading>
          <Appear>
          <img src={img_born} style={imageStyle} />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            From inception to delivery
          </Heading>
          <List>
            <Appear><ListItem>People</ListItem></Appear>
            <Appear><ListItem>Money</ListItem></Appear>
            <Appear><ListItem>Tools</ListItem></Appear>
            <Appear><ListItem>Time</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_accept} style={imageStyle} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_reject} style={imageStyle} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_time} style={imageStyle3} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>DevOps, ...the process required to convert a business hypothesis into a technology-enabled service that delivers value to the customer.</Quote>
            <Cite>The Devops Handbook</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Investments
          </Heading>
          <List>
            <Appear><ListItem>Cost</ListItem></Appear>
            <Appear><ListItem>Quality</ListItem></Appear>
            <Appear><ListItem>Speed</ListItem></Appear>
          </List>
          <Appear>
            <div>
              <Text>"Focusing on cost or quality without considering the impact on flow is... an antipattern for successful IT...."</Text>
              <Cite>DevOps for the Modern Enterprise, Mirco Hering</Cite>
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Is Moving Fast Dangerous?
          </Heading>
          <Appear>
            <div>
              <Text>The research in the State of DevOps report, "refutes the bimodal IT notion that you have to choose between speed and stability—instead, speed depends on stability, so good IT practices give you both."</Text>
              <Cite>Accelerate: The Science of Lean Software and DevOps, Nicole Forsgren PhD</Cite>
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Act II
          </Heading>
          <Heading size={4} lineHeight={1} textColor="tertiary">
            Journey
          </Heading>
          <img src={img_journey} style={imageStyle2} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_factory} style={imageStyle} />
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary">
          <img src={img_shock} style={imageStyle3} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_journey} style={{
              width:'25px',
              height:'auto',
              marginRight:'5px'
            }} 
          />
          <img src={img_ballMachine} style={imageStyle} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_machine1} style={imageStyle} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_machine2} style={imageStyle} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_machine3} style={imageStyle3} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_machine4} style={imageStyle3} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_machine5} style={imageStyle3} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_machine6} style={imageStyle3} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_machine7} style={imageStyle3} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_machine8} style={imageStyle3} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_machine9} style={imageStyle3} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_machine10} style={imageStyle3} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Even more important than daily work is the improvement of daily work.</Quote>
            <Cite>Gene Kim</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            CONTINUOUS DELIVERY CAPABILITIES 
          </Heading>
          <List>
            <Appear><ListItem>Use version control for all production artifacts</ListItem></Appear>
            <Appear><ListItem>Automate your deployment process</ListItem></Appear>
            <Appear><ListItem>Implement continuous integration</ListItem></Appear>
            <Appear><ListItem>Use trunk-based development methods</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            CONTINUOUS DELIVERY CAPABILITIES 
          </Heading>
          <List>
            <Appear><ListItem>Implement test automation</ListItem></Appear>
            <Appear><ListItem>Support test data management</ListItem></Appear>
            <Appear><ListItem>Shift left on security</ListItem></Appear>
            <Appear><ListItem>Implement continuous delivery (CD). </ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            ARCHITECTURE CAPABILITIES
          </Heading>
          <List>
            <Appear><ListItem>Use a loosely coupled architecture</ListItem></Appear>
            <Appear><ListItem>Architect for empowered teams</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            PRODUCT AND PROCESS CAPABILITIES
          </Heading>
          <List>
            <Appear><ListItem>Gather and implement customer feedback</ListItem></Appear>
            <Appear><ListItem>Make the flow of work visible through the value stream</ListItem></Appear>
            <Appear><ListItem>Work in small batches</ListItem></Appear>
            <Appear><ListItem>Foster and enable team experimentation</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            LEAN MANAGEMENT AND MONITORING CAPABILITIES
          </Heading>
          <List>
            <Appear><ListItem>Have a lightweight change approval processes</ListItem></Appear>
            <Appear><ListItem>Monitor across application and infrastructure to inform business decisions</ListItem></Appear>
            <Appear><ListItem>Check system health proactively</ListItem></Appear>
            <Appear><ListItem>Improve processes and manage work with work-in-process (WIP) limits</ListItem></Appear>
            <Appear><ListItem>Visualize work to monitor quality and communicate throughout the team</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            LEAN MANAGEMENT AND MONITORING CAPABILITIES
          </Heading>
          <List>
            <Appear><ListItem>Have a lightweight change approval processes</ListItem></Appear>
            <Appear><ListItem>Monitor across application and infrastructure to inform business decisions</ListItem></Appear>
            <Appear><ListItem>Check system health proactively</ListItem></Appear>
            <Appear><ListItem>Improve processes and manage work with work-in-process (WIP) limits</ListItem></Appear>
            <Appear><ListItem>Visualize work to monitor quality and communicate throughout the team</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            CULTURAL CAPABILITIES
          </Heading>
          <List>
            <Appear><ListItem>Support a generative culture</ListItem></Appear>
            <Appear><ListItem>Encourage and support learning</ListItem></Appear>
            <Appear><ListItem>Support and facilitate collaboration among teams</ListItem></Appear>
            <Appear><ListItem>Provide resources and tools that make work meaningful</ListItem></Appear>
            <Appear><ListItem>Support or embody transformational leadership</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Act III
          </Heading>
          <Heading size={4} lineHeight={1} textColor="tertiary">
            Enlightenment
          </Heading>
          <img src={img_firstWay} style={imageStyle} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={4} textColor="tertiary" caps>
            The First Way
          </Heading>
          <Heading size={6} textColor="tertiary">
            From Dev to Ops to the customer
          </Heading>
          <List textColor="quartenary">  
            <Appear><ListItem>Make work visible</ListItem></Appear>
            <Appear><ListItem>Reduce batch sizes &amp; work intervals</ListItem></Appear>
            <Appear><ListItem>Prevent defects from moving downstream</ListItem></Appear>
            <Appear><ListItem>Continually optimize for global goals</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_visible} style={imageStyle3} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={4} textColor="tertiary" caps>
            The Second Way
          </Heading>
          <Heading size={6} textColor="tertiary">
            From customer to Ops to Dev, etc.
          </Heading>
          <List textColor="quartenary">  
            <Appear><ListItem>Amplified feedback at all stages</ListItem></Appear>
            <Appear><ListItem>Prevent problems from recurring</ListItem></Appear>
            <Appear><ListItem>Enable faster detection &amp; recovery</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_secondWay} style={imageStyle3} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={4} textColor="tertiary" caps>
            The Third Way
          </Heading>
          <Heading size={6} textColor="tertiary">
          Create a generative, high-trust culture
          </Heading>
          <List textColor="quartenary">  
            <Appear><ListItem>Disciplined, scientific experimentation &amp; risk-taking</ListItem></Appear>
            <Appear><ListItem>Organizational learning</ListItem></Appear>
            <Appear><ListItem>Curious &amp; colaborative study of success and failure</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <img src={img_sleep} style={imageStyle} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Act IV
          </Heading>
          <Heading size={4} lineHeight={1} textColor="tertiary">
            Commencement
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Avoid the big bang approach..., choosing instead to focus our efforts in a few areas of the organization</Quote>
            <Cite>The DevOps Handbook</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} textColor="tertiary" caps>
            Measure
          </Heading>
          <List>  
            <Appear><ListItem>Deployment Frequency</ListItem></Appear>
            <Appear><ListItem>Lead time for changes</ListItem></Appear>
            <Appear><ListItem>Mean time to recover</ListItem></Appear>
            <Appear><ListItem>Change failure rate</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={4} textColor="tertiary" caps>
           Technical Debt
          </Heading>
          <BlockQuote>
            <Quote>Left unchecked, technical debt will ensure that the only work that gets done is unplanned work!</Quote>
            <Cite>The Phoenix Project</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} textColor="tertiary" caps>
           Signs Of Technical Debt
          </Heading>
          <List>  
            <Appear><ListItem>Configuration difficulty</ListItem></Appear>
            <Appear><ListItem>Issues at scale</ListItem></Appear>
            <Appear><ListItem>Tightly-coupled components</ListItem></Appear>
            <Appear><ListItem>Lack of tests</ListItem></Appear>
            <Appear><ListItem>Lack of documentation</ListItem></Appear>
            <Appear><ListItem>Parallel development (the merge)</ListItem></Appear>
            <Appear><ListItem>Compensating post development (workarounds)</ListItem></Appear>
            <Appear><ListItem>Tribal Knowledge</ListItem></Appear>
            <Appear><ListItem>Any technical thing causing misery</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary">
          <BlockQuote>
            <Quote>It almost doesn’t matter what you improve.... Why? Because ...entropy guarantees that you are actually getting worse</Quote>
            <Cite>Mike Rother</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Credits
          </Heading>
          <List>
            <ListItem>Brain by BomSymbols from the Noun Project</ListItem>
            <ListItem>Backpack by Joost from the Noun Project</ListItem>
            <ListItem>hat by Hycan from the Noun Project</ListItem>
            <ListItem>Factory by Isabel Martínez Isabel from the Noun Project</ListItem>
            <ListItem>blue ball machine gif by KeyserSosa</ListItem>
            <ListItem>palm by Kevin from the Noun Project</ListItem>
            <ListItem>Fist by Mahmure Alp from the Noun Project</ListItem>
            <ListItem>dead by Ben Davis from the Noun Project</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Credits
          </Heading>
          <List>
            <ListItem>Time by Nikita Kozin from the Noun Project</ListItem>
            <ListItem>robot assembly line by Eucalyp from the Noun Project</ListItem>
            <ListItem>Assembly machine by Becris from the Noun Project</ListItem>
            <ListItem>Top Hat by Andrea Mazzini from the Noun Project</ListItem>
            <ListItem>beard by Felipe Alvarado from the Noun Project</ListItem>
            <ListItem>Machine by Dinosoft Labs from the Noun Project</ListItem>
            <ListItem>drooling by Kaleo from the Noun Project</ListItem>
            <ListItem>Infinity by Yeong Rong Kim from the Noun Project</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Demo
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
