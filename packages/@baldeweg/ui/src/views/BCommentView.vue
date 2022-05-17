<template>
  <article>
    <b-comment author="Author" date="01.01.2021 20:00">
      <template #actions>Edit</template>
      Comment Comment Comment Comment
    </b-comment>

    <b-comment author="Author" date="01.01.2021 21:00">
      Comment Comment Comment Comment Comment Comment Comment Comment Comment
      Comment Comment Comment Comment Comment Comment Comment Comment Comment
      Comment Comment Comment Comment Comment Comment
      CommentCommentCommentCommentCommentCommentCommentCommentCommentCommentCommentCommentCommentCommentComment
    </b-comment>
  </article>
</template>

<script>
import BComment from '../components/BComment/BComment.vue'
import { useTitle } from './../composables/useTitle.js'

export default {
  name: 'b-comment-view',
  components: {
    BComment,
  },
  setup() {
    useTitle({ title: 'BComment - @baldeweg/ui' })
  },
}
</script>
