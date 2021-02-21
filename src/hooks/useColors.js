import { useTheme } from "@material-ui/core";

export default function useColors() {
  const theme = useTheme();

  const colors = [
    ...Object.values(theme.palette.primary),
    ...Object.values(theme.palette.secondary)
  ].filter(color => color != "#fff");

  return colors;
}