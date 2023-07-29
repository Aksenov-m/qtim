<template>
  <div>
    <article class="hentry">
      <header class="entry-header">
        <div class="entry-thumbnail">
          <h2 class="entry-title">{{ article.title }}</h2>
          <NuxtLink v-if='$route.path === "/articles"' :to="'/post/' + article.id"
            ><img
              @error="article.error = true"
              :src="article.error ? 'https://avatars.mds.yandex.net/i?id=520a58a515691b7f7082dd62d574e9478a8578d5-6431007-images-thumbs&n=13' : article.image"
              class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt="p1"
          /></NuxtLink>
          <img v-else
              @error="article.error = true"
              :src="article.error ? 'https://avatars.mds.yandex.net/i?id=520a58a515691b7f7082dd62d574e9478a8578d5-6431007-images-thumbs&n=13' : article.image"
              class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt="p1"
          />
        </div>
        <p class="entry-title">{{$route.path === "/articles" ? article.preview : article.description}}</p>
      </header>
    </article>
  </div>
</template>

<script setup>
const route = useRoute()
// const id = route.params.id
console.log(route.path)
const props = defineProps({
  article: {
    type: Object,
  }
});

</script>

<style scoped></style>
