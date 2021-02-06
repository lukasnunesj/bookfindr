<template>
    <div class="d-flex flex-column h-100">
        <header>
            <Navbar />
        </header>
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
                                :author="book.volumeInfo.authors | authorsArrayToString"
                                :title="book.volumeInfo.title"
                                :imgUrl="book.volumeInfo.imageLinks"
                                :link="book.volumeInfo.infoLink"
                                :publishedDate="book.volumeInfo.publishedDate | getDate"
                            />
                        </UnorderedList>
                    </div>
                </div>
            </div>
        </main>
        <footer class="footer mt-auto py-3">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p class="text-center pt-3">© Copyright {{ new Date().getFullYear() }} Lucas Nunes. All rights reserved.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <a href="#" class="footer-link" target="_blank"> 
                            <github-icon size="1.5x" class="mx-2"></github-icon> 
                        </a>
                        <a href="#" class="footer-link" target="_blank"> 
                            <linkedin-icon size="1.5x"></linkedin-icon>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import Navbar from "./components/header/Navbar";
    import Searchbox from "./components/searchbox/Searchbox";
    import UnorderedList from "./ui/List/UnorderedList";
    import BookItem from "./ui/List/BookItem";
    import { GithubIcon, LinkedinIcon } from 'vue-feather-icons'
    import axios from "axios";

    export default {
        name: "App",
        components: {
            Navbar,
            Searchbox,
            UnorderedList,
            BookItem,
            GithubIcon,
            LinkedinIcon,
        },
        data: function() {
            return {
                bookList: [],
            };
        },
        methods: {
            searchBook(term) {
                axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}`).then((result) => {
                    this.bookList = result.data.items;
                });
            },
        },
        filters: {
            authorsArrayToString: function(authorsArray) {
                console.log(authorsArray);
                if (!authorsArray) {
                    return "by unknown";
                }
                authorsArray.forEach((element, index) => {
                    authorsArray[index] = element.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
                });
                return "by " + authorsArray.join(", ");
            },
            getDate: function(dateString) {
                if (!dateString) {
                    return "unknown publishing year";
                }
                const [year] = dateString.split("-");
                return "published at " + year;
            },
        },
    };
</script>

<style scoped>
.footer-link {
    text-decoration: none;
    color: #212529;
}
</style>
