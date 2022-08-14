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

  const handleViewClick = () => {
    goto(`${base}/books/${key}`)
  }

</script>

<div class="s-base-card">
  <div class="s-card-layout">
    <div class="s-card-left">
      <svelte:component this={Carousel} bind:this={carousel} let:showPrevPage let:showNextPage>
        <div slot="prev" on:click={showPrevPage} class="custom-arrow custom-arrow-prev">
          <i></i>
        </div>
        <img src="{base}/images/{key}/{key}_front.jpg" loading="lazy" alt={book?.title} class="s-card-image">
        <img src="{base}/images/{key}/{key}_back.jpg" loading="lazy" alt={book?.title} class="s-card-image">
        <div slot="next" on:click={showNextPage} class="custom-arrow custom-arrow-next">
          <i></i>
        </div>
      </svelte:component>
    </div>
    <div class="s-card-right">
      <div class="has-text-centered s-card-title">{book?.title}</div>
      {#if book?.hasDetails}
        <button class="button is-info s-card-button" on:click={handleViewClick}>Apskatīt</button>
      {:else}
        <a class="button is-info s-card-button" href={book?.storeUrl}>Pirkt</a>
      {/if}
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

  .custom-arrow {
    width: 20px;
    background-color: #000000;
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    transition: opacity 150ms ease;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    & > i {
      border: solid white;
      border-width: 0 5px 5px 0;
      padding: 5px;
      position: relative;
    }
  }

  .s-card-left:hover .custom-arrow {
    opacity: 0.5;
  }

  .custom-arrow-prev > i {
    transform: rotate(135deg);
    right: -4px;
  }

  .custom-arrow-next {
    right: 0;
  }

  .custom-arrow-next > i {
    transform: rotate(-45deg);
    left: -4px;
  }

</style>
