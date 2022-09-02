<template>
  <div>
    <!-- {{$route.params.id}} -->
    <h4>상세 페이지</h4>
    <h5>{{ blogPosts[$route.params.id].title }}</h5>
    <p>{{ blogPosts[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name : 'DetailComponent',
    props : {
        blogPosts : Array,
    },
}
</script>

<style>

</style>