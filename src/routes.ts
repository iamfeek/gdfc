import Home from '@/views/Home.vue';
import Category from '@/views/Category.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/basic/:category', component: Category,  props: true },
];

export default routes;