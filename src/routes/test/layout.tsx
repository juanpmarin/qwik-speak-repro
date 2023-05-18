import { Slot, component$ } from "@builder.io/qwik";
import { Speak } from "qwik-speak";

export default component$(() => {
  return (
    <Speak assets={["test"]}>
      <Slot />
    </Speak>
  );
});
