<template>
    <div class="row justify-content-center">
        <div class="col-md-6 pt-5">
            <div class="input-group mb-3">
                <input type="text" v-model="terms" @keyup.enter="searchBook()" class="form-control shadow-none" placeholder="Search for title, author, etc ..." />
                <button @click="searchBook()" class="btn btn-outline-secondary shadow-none" type="button" id="search">
                    <search-icon size="1.5x" class="custom-class"></search-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { SearchIcon } from "vue-feather-icons";

    export default {
        name: "Searchbox",
        components: {
            SearchIcon,
        },
        data: function() {
            return {
                terms: ''
            }
        },
        methods: {
            searchBook() {
                this.$emit('searchFor', this.terms)
            }
        }
    };
</script>

<style></style>
