import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default () => (
  <Tabs>
    <TabList>
      <Tab>Optimal Lineups</Tab>
      <Tab>The Future!</Tab>
    </TabList>

    <TabPanel>
      <h2>Insert optimal lineup code here!</h2>
    </TabPanel>
    <TabPanel>
      <h2>What's coming next?</h2>
      <p>Soon <i>(the definition of soon in this case is completely subjective)</i> you will see new statistics that will reveal just how bad you are at this game. </p>
      <p>These stats include Luck, Team Performance, Rankings and Awards.</p>
    </TabPanel>
  </Tabs>
);
