import { LuRefreshCcwDot } from "react-icons/lu";
import ConnectWallet from "./ConnectWallet";
import Paper from "./Paper";
import Typography from "./Typography";

function Stake({ title, inputLabel, inputSideText }) {
  return (
    <Paper className="flex flex-col">
      <main className="flex-1">
        <div className=" flex items-center justify-between border-b border-white/30 pb-3 mb-6">
          <Typography.xl className="font-bold">{title}</Typography.xl>

          <button className="bg-yellow/20 transition-all duration-500 hover:rotate-[360deg] w-7 h-7 flex items-center justify-center rounded-full text-base">
            <LuRefreshCcwDot />
          </button>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <Typography.sm>{inputLabel}</Typography.sm>

            {inputSideText ? (
              <Typography.sm>{inputSideText}</Typography.sm>
            ) : null}
          </div>

          <div className="bg-primary/40 rounded-lg border border-yellow/20 pr-4 flex items-center justify-between h-10">
            <input
              type="text"
              className="bg-transparent text-white outline-none w-full flex-1 h-full px-6"
            />

            <button>Max</button>
          </div>
        </div>
      </main>

      <div className="mt-8">
        <ConnectWallet className="text-base w-full">
          Connect Wallet
        </ConnectWallet>
      </div>
    </Paper>
  );
}

export default Stake;
