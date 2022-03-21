import { mount } from '@vue/test-utils';
import NavLink from '@/ui/Navbar/NavLink';

describe('NavLink - unit', () => {
    it('should mount the component', () => {
        const wrapper = mount(NavLink, {
            stubs: ['router-link']
        });
        expect(wrapper.vm).toBeDefined();
    });

    it('should have "active" class when prop "active" is true', () => {
        const wrapper = mount(NavLink, {
            propsData:{
                active: true
            },
            stubs: ['router-link']
        });
        
        expect(wrapper.classes()).toContain('active');
    });

    it('should have "disabled" class when prop "disabled" is true', () => {
        const wrapper = mount(NavLink, {
            propsData:{
                disabled: true
            },
            stubs: ['router-link']
        });
        
        expect(wrapper.classes()).toContain('disabled');
    });
});