<script>
  import Card from '../lib/Card.svelte'
  import {BooksMetadata} from '../lib/data'
</script>

<div class="s-base-container">
  {#each [...BooksMetadata] as [key, book]}
    <Card key={key} book={book}/>
  {/each}
</div>

<style lang="scss">
  .s-base-container {
    --auto-grid-min-size: 20rem;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    grid-gap: 1.5rem;
  }
</style>
