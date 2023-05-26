<script context="module" lang="ts">
  export type WeirdButtonProps = {};
</script>

<script lang="ts">
  export let props: WeirdButtonProps;
  export let href: string | undefined;
  export const onClick = (e: Event) => {};

  function tripleClick() {

  }
</script>

{#if href}
  <a {href} on:click on:click={onClick}>
    <slot />
</a>
{:else}
  <button on:click on:click={onClick}><slot /></button>
{/if}

<style lang="scss">
  a,
  article,
  button {
    all: unset;
    border: 1px solid rebeccapurple;
    padding: 10px 12px;
  }
</style>
