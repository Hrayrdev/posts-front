<template>
  <el-dialog
    v-model="postStore.dialogVisible"
    :title="dialogType === 'create' ? 'Создать пост' : 'Редактирование поста'"
    width="500"
    center
  >
    <div class="post-dialog">
      <div class="post-dialog__inner">
        <div class="post-dialog__title-wrapper">
          <label class="post-dialog__title-label" for="title">Заголовок</label>
          <Field
            placeholder="Заголовок"
            class="post-dialog__title-field"
            name="title"
            type="text"
          />
          <ErrorMessage name="title" class="post-dialog__title-error" />
        </div>
        <div class="post-dialog__desc-wrapper">
          <label class="post-dialog__desc-label" for="description">Описание</label>
          <Field class="post-dialog__desc-field" name="description" as="textarea" rows="4" />
          <ErrorMessage class="post-dialog__desc-error" name="description" />
        </div>
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="postStore.dialogVisible = false">Отменить</el-button>
        <el-button @click="onSubmit" type="primary">
          <span v-if="dialogType === 'create'">Создать</span>
          <span v-else>Редактировать</span>
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { useForm, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { usePostsStore } from '@/stores/postsStore'
import { ref, watch } from 'vue'
import type { Post } from '@/types/post'

const emit = defineEmits<{
  (e: 'create-post', payload: Post): void
  (e: 'update-post', payload: Post): void
}>()
const postStore = usePostsStore()
const props = defineProps<{
  dialogType: string
}>()
const schema = yup.object({
  title: yup
    .string()
    .min(3, 'Минимальная длина 3 символа')
    .max(12, 'Максимальная длина 12 символов')
    .required('Поле заголовок обязателен'),
  description: yup
    .string()
    .min(5, 'Минимальная длина 5 символов')
    .max(50, 'Максимальная длина 50 символов')
    .required('Поле описание обязателен')
})
const initialValues = ref({
  id: '',
  title: '',
  description: ''
})
const { handleSubmit, resetForm } = useForm({
  initialValues: initialValues.value,
  validationSchema: schema
})

watch(
  () => postStore.postUpdate,
  (newValue) => {
    resetForm({
      values: {
        title: newValue.title,
        description: newValue.description
      }
    })
  },
  { deep: true }
)

const onSubmit = handleSubmit((postData) => {
  postStore.changeDialogVisible()
  if (props.dialogType === 'create') {
    emit('create-post', postData)
  } else {
    emit('update-post', postData)
  }
  resetForm()
})
</script>

<style scoped lang="less">
.post-dialog {
  &__inner {
    min-height: 200px;
  }

  &__title-wrapper {
    min-height: 80px;
  }

  &__title-label {
    display: block;
  }

  &__title-field {
    width: 100%;
    min-height: 30px;
    border-radius: 4px;
  }

  margin-bottom: 10px;

  &__title-error {
    color: red;
  }

  &__desc-error {
    color: red;
  }

  &__desc-wrapper {
    margin-bottom: 20px;
  }

  &__desc-field {
    width: 100%;
    min-height: 60px;
    resize: none;
    border-radius: 4px;
  }

  &__desc-label {
    display: block;
  }
}
</style>
