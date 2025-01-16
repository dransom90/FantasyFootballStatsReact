import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { act, useEffect, useReducer, useState } from "react";
import BestLineup from "./BestLineup";
import OptimalLineupTab from "./OptimalLineupTab";

export default () => (
  <Tabs>
    <TabList>
      <Tab>Optimal Lineups</Tab>
      <Tab>The Future!</Tab>
    </TabList>

    <TabPanel>
      <OptimalLineupTab />
    </TabPanel>
    <TabPanel>
      <h2>What's coming next?</h2>
      <p>
        Soon{" "}
        <i>(the definition of soon in this case is completely subjective)</i>{" "}
        you will see new statistics that will reveal just how bad you are at
        this game.{" "}
      </p>
      <p>These stats include Luck, Team Performance, Rankings and Awards.</p>
    </TabPanel>
  </Tabs>
);
