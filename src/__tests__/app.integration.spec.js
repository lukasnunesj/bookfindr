import { createLocalVue, mount } from '@vue/test-utils';
import App from '@/App';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';

const localVue = createLocalVue();
localVue.use(VueRouter)

describe('App - integration', () => {

    it('should mount the component with router', () => {
        const router = new VueRouter({routes})
        const wrapper = mount(App, {
            localVue,
            router
        });

        expect(wrapper.vm).toBeDefined();
        expect(wrapper.vm.$route).toBeDefined();
    });

    it('should render HomeComponent when route "/" is pushed', async () => {

        const router = new VueRouter({routes})
        const wrapper = mount(App, {
            localVue,
            router
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.findComponent(Home).exists()).toBe(true);
    });

    it('should render AboutContainer when route "/about" is pushed', async () => {

        const router = new VueRouter({routes})
        const wrapper = mount(App, {
            localVue,
            router
        });
        router.push("/about")
        await wrapper.vm.$nextTick();

        expect(wrapper.findComponent(About).exists()).toBe(true);
    });
});