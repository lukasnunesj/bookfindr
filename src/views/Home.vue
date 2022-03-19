<template>
    <main>
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
                            :author="
                                book.volumeInfo.authors | authorsArrayToString
                            "
                            :title="book.volumeInfo.title"
                            :img-url="book.volumeInfo.imageLinks"
                            :link="book.volumeInfo.infoLink"
                            :published-date="
                                book.volumeInfo.publishedDate | getDate
                            "
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
    filters: {
        authorsArrayToString: function (authorsArray) {
            console.log(authorsArray);
            if (!authorsArray) {
                return 'by unknown';
            }
            authorsArray.forEach((element, index) => {
                authorsArray[index] = element
                    .toLowerCase()
                    .replace(/\b\w/g, (l) => l.toUpperCase());
            });
            return 'by ' + authorsArray.join(', ');
        },
        getDate: function (dateString) {
            if (!dateString) {
                return 'unknown publishing year';
            }
            const [year] = dateString.split('-');
            return 'published at ' + year;
        },
    },
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
