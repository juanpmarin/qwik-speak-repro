import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { $translate as t } from "qwik-speak";

export const useRemoteData = routeLoader$(async () => {
  return {
    embed: {
      foo: "bar",
    },
  };
});

export default component$(() => {
  const remoteData = useRemoteData();

  return (
    <div>
      {t("test.translation@@Envío para {{recipient}}", {
        recipient: remoteData.value.embed?.foo,
      })}
    </div>
  );
});
