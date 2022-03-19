import { mount } from '@vue/test-utils';
import Searchbox from '@/components/searchbox/Searchbox';
import { SearchIcon } from 'vue-feather-icons';

describe('Searchbox - unit', () => {
    it('should mount the component', () => {
        const wrapper = mount(Searchbox, {
            stubs: ['router-link']
        });

        expect(wrapper.vm).toBeDefined();
        expect(wrapper.findComponent(SearchIcon).exists()).toBe(true);
    });

    it('should emit searchFor event with typed term whem button is clicked', async () => {
        const wrapper = mount(Searchbox, {
            stubs: ['router-link']
        });

        const terms = 'Arte da Guerra';

        await wrapper.find('[data-test-id="searchbox"]').setValue(terms);
        await wrapper.find('[data-test-id="searchbox"]').trigger('keyup.enter');


        expect(wrapper.emitted().searchFor).toBeTruthy();
        expect(wrapper.emitted().searchFor.length).toBe(1);
        expect(wrapper.emitted().searchFor[0]).toEqual([terms]);

    })

    it('should emit searchFor event with typed term whem button is clicked', async () => {
        const wrapper = mount(Searchbox, {
            stubs: ['router-link']
        });

        const terms = 'Arte da Guerra';

        await wrapper.find('[data-test-id="searchbox"]').setValue(terms);
        await wrapper.find('[data-test-id="search-button"]').trigger('click');

        expect(wrapper.emitted().searchFor).toBeTruthy();
        expect(wrapper.emitted().searchFor.length).toBe(1);
        expect(wrapper.emitted().searchFor[0]).toEqual([terms]);

    })
});