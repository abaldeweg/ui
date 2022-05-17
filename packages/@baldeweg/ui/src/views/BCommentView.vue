<script setup>
import { useTitle } from './../composables/useTitle.js'

useTitle({ title: 'BComment - @baldeweg/ui' })
</script>

<template>
  <article>
    <BComment author="Author" date="01.01.2021 20:00">
      <template #actions>Edit</template>
      Comment Comment Comment Comment
    </BComment>

    <BComment author="Author" date="01.01.2021 21:00">
      Comment Comment Comment Comment Comment Comment Comment Comment Comment
      Comment Comment Comment Comment Comment Comment Comment Comment Comment
      Comment Comment Comment Comment Comment Comment
      CommentCommentCommentCommentCommentCommentCommentCommentCommentCommentCommentCommentCommentCommentComment
    </BComment>
  </article>
</template>
