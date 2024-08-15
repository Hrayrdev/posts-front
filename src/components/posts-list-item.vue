<template>
  <div class="post-list-item" @contextmenu.prevent="changeContext" @click.prevent="readPost">
    <div class="post-list-item__inner">
      <div class="post-list-item__title">{{ title }}</div>
      <div class="post-list-item__description">{{ description }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Post } from '@/types/post'
import { usePostsStore } from '@/stores/postsStore'
import { useRouter } from 'vue-router'
const router = useRouter()

const postsStore = usePostsStore()
const props = defineProps<Post>()
const changeContext = (event: MouseEvent) => {
  postsStore.changeContextMenu(event, { ...props })
}

const readPost = () => {
  router.push({ name: 'post-detail', params: { id: props.id } })
}
</script>
<style scoped lang="less">
.post-list-item {
  &:hover {
    background-color: rgba(black, 0.1);
  }
  cursor: pointer;
  position: relative;
  max-width: 600px;
  min-height: 100px;
  border-radius: 5px;
  border: 1px solid green;
  margin-bottom: 20px;

  &__inner {
    user-select: none;
    padding: 10px;
  }

  &__title {
    margin-bottom: 10px;
    font-size: 17px;
  }

  &__description {
    font-size: 12px;
    color: rgba(black, 0.4);
  }
}
</style>
