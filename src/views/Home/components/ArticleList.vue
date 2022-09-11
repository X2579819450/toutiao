<template>
  <div>
    <Articleitem
      v-for="item in article"
      :key="item.art_id"
      :article="item"
    ></Articleitem>
  </div>
</template>

<script>
// 发送请求，拿到当前文章的详情数据
import { ArticleList } from '@/API'
import Articleitem from './Articleitem.vue'
export default {
  name: 'ArticleList',
  components: { Articleitem },
  props: {
    id: [Number, String]
  },
  data() {
    return {
      article: []
    }
  },
  created() {
    this.getPageArticles()
  },
  methods: {
    async getPageArticles() {
      // 1. new Date().valueOf()  // 2. Date.now()  // 3. +new Date
      try {
        const { data } = await ArticleList(this.id, +new Date())
        this.article = data.data.results
        // console.log(data)
      } catch (error) {
        // js的错误上抛 507原封不动上抛 400上抛中文
        const status = error.response?.status
        if (!error.response || status === 507) {
          throw error
        } else {
          if (status === 400) {
            throw new Error(error.response.data.message)
          }
        }
      }
    }
  }
}
</script>

<style></style>
