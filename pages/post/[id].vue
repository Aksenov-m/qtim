<template>
  <div>
    <TheaArticle :article = "article"/>
  </div>
</template>

<script setup>
const route = useRoute()
import {useArticleStore} from "../../store/index"
const store = useArticleStore()
const id = route.params.id
const article = store.articles.find(item => item.id == id);

</script>

<style scoped></style>
