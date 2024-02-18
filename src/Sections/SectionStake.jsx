import Stake from "../Components/Stake";
import StakedAmount from "../Components/StakedAmount";
import Rewards from "../Components/Rewards";
import StatsBar from "../Components/StatsBar";
import Icons from "../Components/Icons";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const TabButton = ({ children, active, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "border-b-4 border-transparent py-1.5",
        active ? "border-yellow" : null
      )}
    >
      {children}
    </button>
  );
};

const tabs = {
  STAKE: "stake",
  UNSTAKE: "unstake",
};

function SectionStake() {
  const [tab, setTab] = useState(tabs.STAKE);

  return (
    <div className="container-wrapper">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-4 [&>*]:gap-4">
        <div className="grid sm:grid-cols-2 grid-rows-[auto_1fr]">
          <StatsBar
            title="348.18K Lucky404"
            subtitle="Total Staked TVL"
            Icon={Icons.chart}
          />
          <StatsBar
            title="30 days"
            subtitle="Lockin period"
            Icon={Icons.layers}
          />

          <div className="sm:hidden flex items-center space-x-4 py-4 text-xl [&_button]:flex-1">
            <TabButton
              onClick={() => setTab(tabs.STAKE)}
              active={tab === tabs.STAKE}
            >
              Stake
            </TabButton>
            <TabButton
              onClick={() => setTab(tabs.UNSTAKE)}
              active={tab === tabs.UNSTAKE}
            >
              Unstake
            </TabButton>
          </div>

          <Stake
            title="Stake"
            inputLabel="Enter Stake Amount"
            inputSideText="Balance: 0"
            className={twMerge(
              "max-sm:hidden",
              tab === tabs.STAKE ? "max-sm:block" : null
            )}
          />

          <Stake
            title="Unstake"
            inputLabel="Enter unstake Amount"
            className={twMerge(
              "max-sm:hidden",
              tab === tabs.UNSTAKE ? "max-sm:block" : null
            )}
          />
        </div>

        <div className="grid">
          <StakedAmount />
          <Rewards />
        </div>
      </div>
    </div>
  );
}

export default SectionStake;
