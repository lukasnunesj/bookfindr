<template>
    <main data-test-id="home-page">
        <div class="container">
            <div class="row">
                <div class="col">
                    <Searchbox @searchFor="searchBook" />
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-md-7">
                    <UnorderedList>
                        <BookItem
                            v-for="book in bookList"
                            :key="book.id"
                            :authors="book.volumeInfo.authors"
                            :title="book.volumeInfo.title"
                            :img-url="book.volumeInfo.imageLinks"
                            :link="book.volumeInfo.infoLink"
                            :published-date="book.volumeInfo.publishedDate"
                            data-test-id="bookitem"
                        />
                    </UnorderedList>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Searchbox from '../components/searchbox/Searchbox';
import UnorderedList from '../ui/List/UnorderedList';
import BookItem from '../ui/List/BookItem';
import axios from 'axios';
export default {
    name: 'HomeComponent',
    components: { Searchbox, UnorderedList, BookItem },
    data: function () {
        return { bookList: [] };
    },
    methods: {
        searchBook(term) {
            axios
                .get(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
                .then((result) => {
                    this.bookList = result.data.items;
                });
        },
    },
};
</script>
