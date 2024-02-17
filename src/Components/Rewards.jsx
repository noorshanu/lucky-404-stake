import { GiTrophyCup } from "react-icons/gi";
import Paper from "./Paper";
import IconBox from "./IconBox";
import Typography from "./Typography";
function Rewards() {
  return (
    <Paper>
      <div className="flex flex-col justify-center items-center">
        <IconBox className="mb-4">
          <GiTrophyCup />
        </IconBox>

        <Typography.xl className="font-bold mb-1">0.00 Lucky404</Typography.xl>

        <p className="opacity-80">Your Reward</p>
      </div>
    </Paper>
  );
}

export default Rewards;
