<script lang="ts">
  import { BooksMetadata } from '../../lib/data'
  import BookDetails from '../../lib/BookDetails.svelte'
  import { page } from '$app/stores'

  const slug = $page.params['slug']
  const book = BooksMetadata.get(slug)

</script>

<div>

  This is title: {book.title} ---

  <BookDetails key={slug} book={book}/>

</div>
