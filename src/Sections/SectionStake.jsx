import Stake from "../Components/Stake";
import StakedAmount from "../Components/StakedAmount";
import Rewards from "../Components/Rewards";
import StatsBar from "../Components/StatsBar";
import Icons from "../Components/Icons";

function SectionStake() {
  return (
    <div className="container-wrapper">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-4 [&>*]:gap-4">
        <div className="grid sm:grid-cols-2 grid-rows-[auto_1fr]">
          <StatsBar
            title="348.18K 5ire"
            subtitle="Total Staked TVL"
            Icon={Icons.chart}
          />
          <StatsBar
            title="341.59K 5ire"
            subtitle="Total Staked TVL"
            Icon={Icons.layers}
          />

          <Stake
            title="Stake"
            inputLabel="Enter Stake Amount"
            inputSideText="Balance: 0"
          />
          <Stake title="Unstake" inputLabel="Enter unstake Amount" />
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
