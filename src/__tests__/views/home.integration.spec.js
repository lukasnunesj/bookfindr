import { mount } from '@vue/test-utils';
import Home from '@/views/Home';
import { makeServer } from '@/miragejs/server';
import Searchbox from '@/components/searchbox/Searchbox';
import UnorderedList from '@/ui/List/UnorderedList';
import BookItem from '@/ui/List/BookItem';
import axios from 'axios';

jest.mock('axios', () => ({
    get: jest.fn(),
}));

const getBooks = (quantity = 10, overrides = []) => {
    let overrideList = [];

    if (overrides.length > 0) {
        overrideList = overrides.map((override) =>
            server.create('book', override)
        );
    }
    const books = [
        ...server.createList('book', quantity),
        ...overrideList,
    ];

    return books;
};

const mountBookItem = async (count, overrides) => {
    const books = getBooks(count, overrides);

    axios.get.mockReturnValue(Promise.resolve({ data: { items: books } }));

    const wrapper = mount(Home, {
        global: {
            mocks: {
                axios
            }
        }
    });

    await wrapper.vm.$nextTick();

    return {
        wrapper,
        books
    }
}

describe('Home - integration', () => {
    let server;
    beforeEach(() => {
        server = makeServer({ environment: 'test' });
    });

    afterEach(() => {
        server.shutdown();
    });

    it('should mount the component', () => {
        const wrapper = mount(Home);

        expect(wrapper.vm).toBeDefined();
    });

    it('should mount the child components', () => {
        const wrapper = mount(Home);

        expect(wrapper.findComponent(Searchbox)).toBeDefined();
        expect(wrapper.findComponent(UnorderedList)).toBeDefined();
        expect(wrapper.findComponent(BookItem)).toBeDefined();
    });

    it('should call axios.get when a term is searched', async () => {
        const {wrapper} = await mountBookItem();

        const terms = 'Arte da Guerra';

        await wrapper.find('[data-test-id="searchbox"]').setValue(terms);
        await wrapper.find('[data-test-id="searchbox"]').trigger('keyup.enter');

        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith(`https://www.googleapis.com/books/v1/volumes?q=${terms}`);
    });

    it('should mount the BookItem component 3 times', async () => {
        const {wrapper} = await mountBookItem(3);

        const terms = 'Arte da Guerra';

        await wrapper.find('[data-test-id="searchbox"]').setValue(terms);
        await wrapper.find('[data-test-id="searchbox"]').trigger('keyup.enter');

        const bookItens = wrapper.findAllComponents(BookItem);

        expect(bookItens).toHaveLength(3)
    });
});