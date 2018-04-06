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
} from 'spectacle';

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
          “Even more important than daily work is the improvement of daily work.”
          </Text>
          <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by Cornecoba - Freepik.com</a>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          "“Eliyahu M. Goldratt, who created the Theory of Constraints, showed us how any improvements made anywhere besides the bottleneck are an illusion."
          The Phoenix Project
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          “Mike Rother says that it almost doesn’t matter what you improve, as long as you’re improving something. Why? Because if you are not improving, entropy guarantees that you are actually getting worse, which ensures that there is no path to zero errors, zero work-related accidents, and zero loss.”
          The Phoenix Project
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          In DevOps, we typically define our technology value stream as the process required to convert a business hypothesis into a technology-enabled service that delivers value to the customer.
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          because of how interdependent our systems are, our ability to make changes to any of these systems is limited by the system that is most difficult to safely change,
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          reduce hardship and drudgery in our daily work through continual learning in order to achieve the organization’s goals.
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          “It’s impossible for a developer to learn anything when someone yells at them for something they broke six months ago—that’s why we need to provide feedback to everyone as quickly as possible, in minutes, not months.”
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          suggestions for improvement “apt to meet a brick wall of indifference.”
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          Teams are often not able or not willing to improve the processes they operate within. The result is not only that they continue to suffer from their current problems, but their suffering also grows worse over time.
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          In the technology value stream, we can introduce the same type of tension into our systems by seeking to always reduce deployment lead times, increase test coverage, decrease test execution times, and even by re-architecting if necessary to increase developer productivity or increase reliability.
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Where to Start?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          avoid the big bang approach (i.e., starting everywhere all at once), choosing instead to focus our efforts in a few areas of the organization,
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          Organizations that struggle with financial debt only make interest payments and never reduce the loan principal, and may eventually find themselves in situations where they can no longer service the interest payments. Similarly, organizations that don’t pay down technical debt can find themselves so burdened with daily workarounds for problems left unfixed that they can no longer complete any new work.
          </Text>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          "Left unchecked, technical debt will ensure that the only work that gets done is unplanned work!”
          The Phoenix Project
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          Measuring Effectiveness

          *Deployment Frequency* - How often you release software. Should not be constrained by Development or Operations but by simply stating your desired release cycle. Monthly, Weekly, Daily, Hourly, all the way down to every checkin. As _mean time to recover_ gets lower, frequency and confidence in deployments gets higher since risk is mitigated.

          *Lead time for changes* - The time it takes for a bug fix, new feature or any other change to go from idea to deployment to production. The lower the better.

          > The fact is that IT is changing faster than ever as businesses get more competitive and as disruptive new technologies come from every corner. Microsoft is under tremendous customer pressure to deliver new features, and to deliver them fast. Smaller, more frequent releases will let Microsoft target today’s problems today, rather than always being a bit behind the curve.

          *Mean time to recover*. - The time it takes to recover from a production failure.

          > If your system goes down several times in a year, but recovery takes a minute or seconds, then your customer may not care and may not even notice. If your system goes down once a year for an entire day, then you may lose that customer.

          *Change failure rate* - The percentage of failed deployments. The failure rate should be continually trending down toward 0% over time. (edited)

          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
