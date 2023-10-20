/// <reference types="cypress" />
import { makeServer } from '../../src/miragejs/server';


const createProduct = () => {
    return server.create('book', {
        volumeInfo:{
            title: 'Livro 1',
            authors: ['Author 1', 'Author 2'],
            publishedDate: '2020-02-02',
            imageLinks: {
                smallThumbnail: "http://books.google.com/books/content?id=H0taAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                thumbnail: "http://books.google.com/books/content?id=H0taAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            infoLink: "http://books.google.com.br/books?id=H0taAAAAYAAJ&dq=a&hl=&source=gbs_api",
        }
    });
}

context('Bookfindr', () => {
    let server;

    beforeEach(() => {
        server = makeServer({ environment: 'test' });
    });

    afterEach(() => {
        server.shutdown();
    });
    it('should display the site', () => {
        cy.visit('/');

        cy.get('body').contains('Bookfindr');
    });

    it('should navigate properly by url', () => {
        cy.visit('/');
        cy.get('[data-test-id="home-page"]').should('exist');

        cy.visit('/about');
        cy.get('[data-test-id="about-page"]').should('exist');
    });

    it('should navigate properly by navbar\'s navlinks', () => {
        cy.visit('/');

        cy.get('[data-test-id="home-navlink"]').click();
        cy.get('[data-test-id="home-page"]').should('exist');

        cy.get('[data-test-id="about-navlink"]').click();
        cy.get('[data-test-id="about-page"]').should('exist');
    });

    context('Bookfindr > Search Box', () => {

        it('should type in the field', () => {
            cy.visit('/');
            cy.get('[data-test-id="searchbox"]')
                .type('Arte da Guerra')
                .should('have.value', 'Arte da Guerra')
        });

        it('should return 1 book when title is searched', () => {
            const book = createProduct();
            const terms = encodeURI('Livro 1');

            cy.intercept('GET', `https://www.googleapis.com/books/v1/volumes?q=${terms}`, {
                items:[book]
            })

            cy.visit('/');
            cy.get('[data-test-id="searchbox"]')
                .type('Livro 1')
                .type('{enter}');

            cy.get('[data-test-id="bookitem"]')
                .should('have.length', 1)
                .and('contain','Livro 1')
                .and('contain', 'by Author 1, Author 2')
                .and('contain', 'published at 2020')

        });

        it('should return 1 book when title is searched and button is clicked', () => {
            const book = createProduct();
            const terms = encodeURI('Livro 1');

            cy.intercept('GET', `https://www.googleapis.com/books/v1/volumes?q=${terms}`, {
                items:[book]
            })

            cy.visit('/');
            cy.get('[data-test-id="searchbox"]')
                .type('Livro 1')
            cy.get('[data-test-id="search-button"]')
                .click()
                
            cy.get('[data-test-id="bookitem"]')
                .should('have.length', 1)
                .and('contain','Livro 1')
                .and('contain', 'by Author 1, Author 2')
                .and('contain', 'published at 2020')

        });

        it('should return 1 book when title is searched and button is clicked', () => {
            const book = createProduct();
            book.volumeInfo.authors = null;
            book.volumeInfo.publishedDate = null
            const terms = encodeURI('Livro 1');

            cy.intercept('GET', `https://www.googleapis.com/books/v1/volumes?q=${terms}`, {
                items:[book]
            })

            cy.visit('/');
            cy.get('[data-test-id="searchbox"]')
                .type('Livro 1')
            cy.get('[data-test-id="search-button"]')
                .click()
                
            cy.get('[data-test-id="bookitem"]')
                .should('have.length', 1)
                .and('contain','Livro 1')
                .and('contain', 'by unknown')
                .and('contain', 'unknown publishing year')

        });
    })
})