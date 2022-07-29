<script lang="ts">
  import type {BookData} from './data'
  import {goto} from '$app/navigation'
  import {base} from '$app/paths'
  import {onMount} from 'svelte'

  export let key: string = undefined
  export let book: BookData | undefined = undefined

  let Carousel
  let carousel
  onMount(async () => {
    const module = await import('svelte-carousel')
    Carousel = module.default
  })

  const handleClick = () => {
    goto(`${base}/books/${key}`)
  }

</script>

<div class="s-base-card">
  <div class="s-card-layout">
    <div>
      <svelte:component this={Carousel} bind:this={carousel} arrows={false}>
        <img src="{base}/images/{key}.jpg" alt={book?.title} class="s-card-image">
        <img src="{base}/images/{key}.jpg" alt={book?.title} class="s-card-image">
      </svelte:component>
    </div>
    <div class="s-card-right">
      <div class="has-text-centered s-card-title">{book?.title}</div>
      <button class="button is-info s-card-button" on:click={handleClick}>Apskatīt</button>
    </div>
  </div>
</div>

<style lang="scss">
  .s-base-card {
    background-color: hsl(0deg, 0%, 100%);
    border-radius: 0.5rem;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    color: hsl(0deg, 0%, 29%);
    overflow: hidden;
    height: 300px;
  }

  .s-card-layout {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .s-card-image {
    height: 270px;
  }

  .s-card-title {
    font-size: 1.75rem;
  }

  .s-card-button {
    margin-top: 3rem;
    width: 10rem;
  }

  .s-card-right {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }

</style>
