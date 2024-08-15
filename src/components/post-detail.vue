<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '@/stores/postsStore'
import type { Post } from '@/types/post'
import router from '@/router'

const showPostData = ref(false)
const route = useRoute()
const postsStore = usePostsStore()
setTimeout(() => {
  showPostData.value = true
})
onMounted(() => {
  console.log(route.params)
})

function goOut() {
  showPostData.value = false
  setTimeout(() => {
    router.push('/posts')
  }, 150)
}

const post = computed<Post | undefined>(() => {
  const id = route.params.id
  if (Array.isArray(id)) {
    return undefined
  }
  return postsStore.getPostById(id)
})
</script>

<template>
  <div class="post-detail">
    <el-button type="success" class="post-detail__link" @click="goOut">Вернутся к списку</el-button>
    <template v-if="post">
      <transition name="post-detail">
        <div class="post-detail__inner" v-if="showPostData">
          <div class="post-detail__post-data">
            <div class="post-detail__title-wrap">
              <div class="post-detail__label">Заголовок: {{ post.title }}</div>
              <div class="post-detail__title"></div>
            </div>
            <div>
              <div class="post-detail__label">Описание:</div>
              <div class="post-detail__description">{{ post.description }}</div>
            </div>
          </div>
        </div>
      </transition>
    </template>
    <template v-else>Пост не найден</template>
  </div>
</template>

<style scoped lang="less">
.post-detail {
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &__link {
    position: absolute;
    top: 80px;
    text-decoration: none;
    color: white;
  }

  &__inner {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    background-color: rgba(black, 0.05);
    min-height: 500px;
    min-width: 600px;
  }

  &__title {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-all;
  }
  &__title-wrap {
    margin-bottom: 10px;
  }
  &__label {
    &:first-child {
      font-size: 24px;
    }

    &:last-child {
      font-size: 14px;
    }
    gap: 130px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px 0 0 10px;
  }

  &__description {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-all;
  }
}

.post-detail-enter-active,
.post-detail-leave-active {
  transition: transform 0.3s ease-in-out;
}

.post-detail-enter-from,
.post-detail-leave-to {
  transform: translateY(100%);
}
</style>
