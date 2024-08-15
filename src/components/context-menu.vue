<script setup lang="ts">
import { usePostsStore } from '@/stores/postsStore'
const postsStore = usePostsStore()
</script>

<template>
  <div class="context-menu" :style="postsStore.contextMenuStyles">
    <div class="context-menu__inner">
      <button class="context-menu__button" @click="postsStore.openUpdateModal">
        Редактировать
      </button>
      <button class="context-menu__button" @click="postsStore.deletePost">Удалить</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.context-menu {
  position: absolute;
  z-index: 2;
  &__inner {
    max-width: 140px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 3px;
    background: #d8d5d5;
  }
  &__button {
    background: #d8d5d5;
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: rgba(black, 0.1);
    }
  }
}
</style>
