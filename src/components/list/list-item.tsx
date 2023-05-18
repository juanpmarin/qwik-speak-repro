import { component$ } from "@builder.io/qwik";

interface ListItemProps {
  label: string;
}

export const ListItem = component$(({ label }: ListItemProps) => {
  return <div>{label}</div>;
});
