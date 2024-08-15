<template>
  <div class="posts-list">
    <posts-list-item v-for="post in list" :key="post.id" v-bind="post" />
  </div>
</template>
<script setup lang="ts">
import type { Post } from '@/types/post'
import PostsListItem from '@/components/posts-list-item.vue'

defineProps<{
  list: Post[]
}>()
</script>
