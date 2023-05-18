import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { ListItem } from "./list-item";

interface ListProps {
  items: string[];
}

export const List = component$(({ items }: ListProps) => {
  return (
    <div>
      {items.map((item) => (
        <ListItem key={item} label={t(`app.items.${item}`)} />
      ))}
    </div>
  );
});
