import { GiChaingun } from "react-icons/gi";
import CountdownTimer from "./Timer";
import Paper from "./Paper";
import Typography from "./Typography";
import IconBox from "./IconBox";

function StakedAmount() {
  return (
    <Paper>
      <IconBox className="mb-4">
        <GiChaingun />
      </IconBox>

      <Typography.xl className="text-center font-bold">0.00 5ire</Typography.xl>
      <Typography.base className="text-center">
        Your staked Amount
      </Typography.base>
      <hr className="opacity-40 my-3" />

      <Typography.sm className="text-center mb-4">Lockin Period</Typography.sm>

      <CountdownTimer />
    </Paper>
  );
}

export default StakedAmount;
