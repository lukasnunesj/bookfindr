import { mount } from '@vue/test-utils';
import BookItem from '@/ui/List/BookItem';
import { makeServer } from '../../miragejs/server';

const mountBookItem = (override) => {
    const book = server.create('book', {
        volumeInfo:{
            title: 'Livro 1',
            authors: ['Author 1', 'Author 2'],
            publishedDate: '2020-02-02',
            imageLinks: {
                smallThumbnail: "http://books.google.com/books/content?id=H0taAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                thumbnail: "http://books.google.com/books/content?id=H0taAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            infoLink: "http://books.google.com.br/books?id=H0taAAAAYAAJ&dq=a&hl=&source=gbs_api",
        ...override
        }
    });
    
    return {
        wrapper: mount(BookItem, {
            propsData: {
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                publishedDate: book.volumeInfo.publishedDate,
                imgUrl: book.volumeInfo.imageLinks,
                link: book.volumeInfo.infoLink
            }
        }),
        book
    }
}

describe('BookItem - unit', () => {
    let server;
    beforeEach(() => {
        server = makeServer({ environment: 'test' });
    });

    afterEach(() => {
        server.shutdown();
    });

    it('should mount the component', () => {
        const {wrapper} = mountBookItem();

        expect(wrapper.element).toMatchSnapshot();
    });

    it('should should mount the component with all props provided', () => {
        const { wrapper } = mountBookItem();

        expect(wrapper.vm).toBeDefined();
        expect(wrapper.text()).toContain('Livro 1');
        expect(wrapper.text()).toContain('by Author 1, Author 2');
        expect(wrapper.text()).toContain('published at 2020');
    });

    it('should should mount the component and show filler text when author and publishing date are not provided', () => {
        const { wrapper } = mountBookItem({
            authors: null,
            publishedDate: null
        });

        expect(wrapper.vm).toBeDefined();
        expect(wrapper.text()).toContain('Livro 1');
        expect(wrapper.text()).toContain('by unknown');
        expect(wrapper.text()).toContain('unknown publishing year');
    });
});