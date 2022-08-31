<template>
  <div>
    <router-link to="/detail">
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