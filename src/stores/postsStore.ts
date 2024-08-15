import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Post, PostUpdateData } from '@/types/post'

export const usePostsStore = defineStore('posts', () => {
  const dialogVisible = ref(false)

  const posts = reactive<Post[]>([
    {
      id: '1',
      title: 'Lorem ipsum ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum!'
    },
    {
      id: '2',
      title: 'Lorem ipsum ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum!'
    },
    {
      id: '3',
      title: 'Lorem ipsum ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum!'
    },
    {
      id: '4',
      title: 'Lorem ipsum ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum!'
    },
    {
      id: '5',
      title: 'cLorem ipsum ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum!'
    },
    {
      id: '6',
      title: 'Lorem ipsum ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum!'
    }
  ])
  const currentPost = ref<Post>()
  const showContextMenu = ref<boolean>(false)
  const contextMenuPosition = reactive({
    x: 0,
    y: 0
  })
  const contextMenuStyles = computed(
    () => `left: ${contextMenuPosition.x}px; 
    top: ${contextMenuPosition.y}px`
  )
  const dialogType = ref<string>('create')
  const searchModel = ref<string>('')
  const sortFieldName = ref<string>('title')
  const sortDirection = ref<string>('up')
  const pageSize = ref<number>(5)
  const pageNumber = ref<number>(1)

  const getFilteredPosts = computed(() => {
    return posts
      .filter((post) => {
        return (
          post.title.includes(searchModel.value) || post.description.includes(searchModel.value)
        )
      })
      .sort((a, b) => {
        const firstField = sortFieldName.value === 'title' ? a.title : a.description
        const secondField = sortFieldName.value === 'title' ? b.title : b.description
        if (firstField > secondField) return sortDirection.value === 'up' ? 1 : -1
        if (firstField < secondField) return sortDirection.value === 'up' ? -1 : 1
        return 0
      })
  })

  const getSlicedPosts = computed(() => {
    return getFilteredPosts.value.slice(
      pageSize.value * pageNumber.value - pageSize.value,
      pageSize.value * pageNumber.value
    )
  })

  const createPost = (post: Post) => {
    posts.push({
      id: String(Date.now()),
      title: post.title,
      description: post.description
    })
  }

  const updatePost = (postUpdateData: PostUpdateData) => {
    if (currentPost.value) {
      const postForUpdate: Post | undefined = posts.find(
        (post) => post.id === currentPost.value!.id
      )
      if (postForUpdate) {
        posts.forEach((post) => {
          if (currentPost.value && post.id === currentPost.value.id) {
            postForUpdate.title = postUpdateData.title
            postForUpdate.description = postUpdateData.description
          }
        })
      }
    }
  }
  const deletePost = () => {
    const postIndexForDelete: number = posts.findIndex((post) => {
      if (currentPost.value && post.id === currentPost.value.id) return true
    })
    posts.splice(postIndexForDelete, 1)
    showContextMenu.value = false
  }

  const changeContextMenu = (e: any, post: Post) => {
    contextMenuPosition.x = e.x
    contextMenuPosition.y = e.y
    showContextMenu.value = !showContextMenu.value
    currentPost.value = post
  }
  const changeDialogVisible = () => {
    dialogVisible.value = !dialogVisible.value
    dialogType.value = 'create'

    postUpdate.title = ''
    postUpdate.description = ''
  }

  const openUpdateModal = () => {
    dialogVisible.value = true
    dialogType.value = 'update'
    const findPost = posts.find((post) => {
      if (currentPost.value && post.id === currentPost.value.id) {
        return true
      }
    })
    if (findPost) {
      postUpdate.title = findPost?.title
      postUpdate.description = findPost?.description
    }
    showContextMenu.value = false
  }
  const getPostById = (id: string): Post | undefined => {
    return posts.find((post) => post.id === id)
  }

  const postUpdate = reactive<PostUpdateData>({
    title: '',
    description: ''
  })

  return {
    getPostById,
    openUpdateModal,
    getFilteredPosts,
    getSlicedPosts,
    searchModel,
    sortFieldName,
    sortDirection,
    pageSize,
    pageNumber,
    dialogType,
    showContextMenu,

    contextMenuStyles,
    dialogVisible,
    postUpdate,
    changeDialogVisible,
    changeContextMenu,
    createPost,
    updatePost,
    deletePost
  }
})
