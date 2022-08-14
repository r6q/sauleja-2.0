<script lang="ts">
  import type {BookData} from './data'
  import {base} from '$app/paths'

  export let key = ''
  export let book: BookData | undefined = undefined

</script>

<div class="s-book-details-container">
  <div class="s-details-left">
    <img src="{base}/images/{key}/{key}_front.jpg" alt={book?.title} class="s-main-img">
  </div>
  <div class="s-details-right">
    <div class="s-book-title title">{book?.title}</div>
    <div>
      {@html book?.description}
    </div>
    <a id="buy-button" class="button is-info" href={book?.storeUrl} target="_blank">
      Apskatīt internetveikalā
    </a>
  </div>
</div>

<style lang="scss">
  .s-book-details-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
  }

  .s-main-img {
    width: 98%; // for some reason it add 8 extra pixels compared to parent div
    padding: 1rem 1rem 0 1rem;
  }

  .s-details-left {

  }

  .s-book-title {
    margin-bottom: 0;
  }

  .s-details-right {
    & > * {
      margin: 1rem 1rem 1rem 1rem;
    }
  }

  @media screen and (max-width: 576px) {
    .s-details-left {
      grid-column: span 2;
    }

    .s-details-right {
      grid-column: span 2;
    }

    #buy-button {
      width: 92%;
    }
  }
</style>
