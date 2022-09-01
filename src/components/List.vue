<template>
  <!-- <div>
    <router-link to="/detail/0">
      <h5>{{ blogPosts[0].title }}</h5>
    </router-link>
    <p>{{ blogPosts[0].date }}</p>
  </div>
  <div>
    <h5>{{ blogPosts[1].title }}</h5>
    <p>{{ blogPosts[1].date }}</p>
  </div>
  <div>
    <h5>{{ blogPosts[2].title }}</h5>
    <p>{{ blogPosts[2].date }}</p>
  </div> -->
  <div v-for="(blogPost, idx) in blogPosts" :key="idx">
    <router-link :to="{ name: 'detail', params: {id: idx} }">
      <h5>{{blogPost.title}}</h5>
    </router-link>
    <p>{{blogPost.date}}</p>
  </div>
</template>

<script>
export default {
    name : 'BlogPostList',
    props : {
        blogPosts : Array,
    },
}
</script>

<style>

</style>