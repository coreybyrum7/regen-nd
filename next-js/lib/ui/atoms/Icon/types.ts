type Icons = "arrow-right" | "message";

export type Props = React.ComponentPropsWithoutRef<"svg"> & {
  name: Icons;
  height: Number;
  width: Number;
  className?: string;
};
