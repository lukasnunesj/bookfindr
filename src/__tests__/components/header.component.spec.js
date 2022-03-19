import { mount } from '@vue/test-utils';
import Navbar from '@/components/header/Navbar';
import NavbarBrand from '@/ui/Navbar/NavbarBrand';
import NavbarNav from '@/ui/Navbar/NavbarNav';
import NavLink from '@/ui/Navbar/NavLink';

describe('Navbar  - unit', () => {
    it('should mount the component with children components', () => {
        const wrapper = mount(Navbar, {
            stubs: ['router-link']
        });

        expect(wrapper.vm).toBeDefined();
        expect(wrapper.findComponent(NavbarBrand).exists()).toBe(true);
        expect(wrapper.findComponent(NavbarNav).exists()).toBe(true);
        expect(wrapper.findComponent(NavLink).exists()).toBe(true);

    });
});

