<script lang="ts">
  import { onMount } from "svelte";

  // This variable will always have the latest value of the input field
  let value: string;
  let input: HTMLInputElement;

  onMount(() => {
    input.style.backgroundColor = "rebeccapurple";
  });
</script>

<pre>{value}</pre>
<!--Since the variable is named the same as the thing we want to bind we don't need the brackets-->
<input type="text" bind:value bind:this={input} />
