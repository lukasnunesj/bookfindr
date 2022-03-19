import { mount } from '@vue/test-utils';
import Footer from '@/components/footer/Footer';
import { GithubIcon, LinkedinIcon } from 'vue-feather-icons';

describe('Footer - unit', () => {
    it('should mount the component with link icons', () => {
        const wrapper = mount(Footer, {
            stubs: ['router-link']
        });

        expect(wrapper.vm).toBeDefined();
        expect(wrapper.findComponent(GithubIcon).exists()).toBe(true);
        expect(wrapper.findComponent(LinkedinIcon).exists()).toBe(true)
    });
});