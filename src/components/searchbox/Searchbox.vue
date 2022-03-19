<template>
    <div class="row justify-content-center">
        <div class="col-md-6 pt-5">
            <div class="input-group mb-3">
                <input
                    v-model="terms"
                    data-test-id="searchbox"
                    type="text"
                    class="form-control shadow-none"
                    placeholder="Search for title, author, etc ..."
                    @keyup.enter="searchBook()"
                />

                <button
                    id="search"
                    data-test-id="search-button"
                    class="btn btn-outline-secondary shadow-none"
                    type="button"
                    @click="searchBook()"
                >
                    <search-icon size="1.5x" class="custom-class"></search-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons';
export default {
    name: 'SearchBox',
    components: { SearchIcon },
    data: function () {
        return { terms: '' };
    },
    methods: {
        searchBook() {
            this.$emit('searchFor', this.terms);
        },
    },
};
</script>

<style></style>
