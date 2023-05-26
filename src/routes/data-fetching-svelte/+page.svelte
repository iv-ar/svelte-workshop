<script lang="ts">
  import { onMount } from "svelte";
  let data: unknown;
  let eventualData: unknown;
  onMount(async () => {
    data = await (
      await fetch("https://jsonplaceholder.typicode.com/users/1")
    ).json();
  });
  async function setData() {
    eventualData = await (
      await fetch("//jsonplaceholder.typicode.com/users/2")
    ).json();
  }
  async function theData() {
    const request = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return request.json();
  }
</script>

<pre>
{JSON.stringify(data, null, 2)}
</pre>
<hr />
{#await theData()}
  <!-- promise is pending -->
  <p>Loading users...</p>
{:then value}
  <!-- promise was fulfilled -->
  <pre>{JSON.stringify(value, null, 2)}</pre>
{:catch error}
  <!-- promise was rejected -->
  <p>Something went wrong: {error.message}</p>
{/await}
<hr />
<pre>{JSON.stringify(eventualData, null, 2)}</pre>
<button on:click={setData}>load</button>
