<template>
  <div>
    <!-- {{$route.params.id}} -->
    <h4>상세 페이지</h4>
    <h5>{{ blogPosts[$route.params.id].title }}</h5>
    <p>{{ blogPosts[$route.params.id].content }}</p>

    <span>
      <router-link :to="mainLink">상세페이지 메인</router-link>
    </span>
    <span style="margin-left: 10px;">
      <router-link :to="authorLink">author</router-link>
    </span>
    <span style="margin-left: 10px;">
      <router-link :to="commentLink">comment</router-link>
    </span>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name : 'DetailComponent',
    props : {
        blogPosts : Array,
    },
    data() {
      return {
        mainLink : "/detail/" + this.$route.params.id,
        authorLink : "/detail/" + this.$route.params.id + "/author",
        commentLink : "/detail/" + this.$route.params.id + "/comment",
      }
    },
}
</script>

<style>

</style>
