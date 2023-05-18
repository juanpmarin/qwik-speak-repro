import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { List } from "~/components/list/list";

export default component$(() => {
  const show = useSignal(true);
  const items = useSignal(["item1"]);

  useVisibleTask$(() => {
    setTimeout(() => {
      items.value = [...items.value, `item${items.value.length + 1}`];
    }, 3000);
  });

  return (
    <>
      <input
        type="checkbox"
        id="show"
        checked={show.value}
        onInput$={(_, el) => {
          show.value = el.checked;
        }}
      ></input>
      <label for="show">Check to show</label>

      {show.value && (
        <h1>
          {t("app.title@@DEFAULT TRANSLATION: {{parameter}}", {
            parameter: "HI",
          })}
        </h1>
      )}

      <button
        onClick$={() => {
          items.value = [...items.value, `item${items.value.length + 1}`];
        }}
      >
        Add item
      </button>

      <div>
        <List items={items.value} />
      </div>
    </>
  );
});
