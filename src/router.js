import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';

const routes = [
  {
    path: "/",
    component: Home,
    name : "home",
  },
  {
    path: "/list",
    component: List,
    name : "list",
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
    name : "detail",
    children : [
        {
            path : "author",
            component : Author
        },
        {
            path : "comment",
            component : Comment
        } 
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 