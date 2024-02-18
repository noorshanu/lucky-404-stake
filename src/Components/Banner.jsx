import Paper from "./Paper";
import Typography from "./Typography";

function Banner() {
  return (
    <section>
      <div className="container-wrapper">
        <Paper className="flex lg:justify-center items-center rounded-md py-6 lg:py-10 px-8 sm:px-10 bg-gradient-to-r from-transparent to-primary/30">
          <div className="flex max-lg:flex-col max-lg:items-start lg:items-center max-lg:space-y-4 lg:space-x-5">
            <img src="/logo.png" alt="" className="h-20 lg:h-28" />

            <div className="space-y-2">
              <Typography.threeXl className="max-sm:text-lg font-bold">
                LUCKY 404 Staking
              </Typography.threeXl>
              <p className="text-sm sm:text-base opacity-80">
                STAKE LUCKY 404 TO RECEIVE REWARDS | CURRENT REWARD:{" "}
                <span>12% APY</span>
              </p>
            </div>
          </div>
          <div className=" flex items-baseline"></div>
        </Paper>
      </div>
    </section>
  );
}

export default Banner;
