<script lang="ts">
  import type {BookData} from './data'
  import { base } from '$app/paths';

  export let key = ''
  export let book: BookData | undefined = undefined

</script>

<div class="s-book-details-container">
  <div>
    <img src="{base}/images/{key}.jpg" alt={book?.title} class="s-card-image">
  </div>
  <div>
    {book?.title}
    {@html book?.description}
    {book?.storeUrl}
  </div>
</div>

<style lang="scss">
  .s-book-details-container {
    display: grid;
    grid-template-columns: .5fr .5fr;
  }
</style>
