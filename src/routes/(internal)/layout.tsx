import { component$, Slot } from "@builder.io/qwik";
import { Speak } from "qwik-speak";

export default component$(() => {
  return (
    <Speak assets={["app"]}>
      <Slot />
    </Speak>
  );
});
