import Paper from "./Paper";
import Typography from "./Typography";

function StatsBar({ title, subtitle, Icon }) {
  return (
    <Paper>
      <Typography.xl className="font-black mb-2">{title}</Typography.xl>
      <div className="flex items-center space-x-2 opacity-80">
        {Icon ? <Icon /> : null}
        <Typography.lg>{subtitle}</Typography.lg>
      </div>
    </Paper>
  );
}

export default StatsBar;
