<script lang="ts">
  import type {BookData} from './data'
  import { base } from '$app/paths';

  export let key = ''
  export let book: BookData | undefined = undefined

</script>

<div class="s-book-details-container">
  <div class="s-details-left">
    <img src="{base}/images/{key}/{key}_front.jpg" alt={book?.title} class="s-card-image">
  </div>
  <div class="s-details-right">
    {book?.title}
    {@html book?.description}
    {book?.storeUrl}
  </div>
</div>

<style lang="scss">
  .s-book-details-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .s-card-image {
    width: 100%;
  }

  .s-details-left {
    padding: 2rem;
  }

  .s-details-right {
    padding: 2rem;
  }

  @media screen and (max-width: 576px) {
    .s-details-left {
      grid-column: span 2;
    }
  }
</style>
