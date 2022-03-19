<template>
    <a
        :href="link"
        target="_blank"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
    >
        <div class="flex-column">
            <h5>
                {{ title }}
            </h5>
            <p>
                <small>{{ authorsString }}</small>
            </p>
            <p>
                <small>{{ publishedDateYear }}</small>
            </p>
        </div>
        <div class="image-parent">
            <img
                :src="imgUrl ? imgUrl.smallThumbnail : noimage"
                class="book-thumb"
            />
        </div>
    </a>
</template>

<script>
export default {
    name: 'BookItem',
    props: {
        title: String,
        link: String,
        authors: Array,
        imgUrl: Object,
        publishedDate: String,
    },
    data: function () {
        return {
            noimage: '../../assets/img/noimg.jpeg',
        };
    },
    computed:{
        authorsString(){
            if (!this.authors) {
                return 'by unknown';
            }
            this.authors.forEach((element, index) => {
                this.authors[index] = element
                    .toLowerCase()
                    .replace(/\b\w/g, (l) => l.toUpperCase());
            });
            return 'by ' + this.authors.join(', ');
        },
        publishedDateYear(){
            if (!this.publishedDate) {
                return 'unknown publishing year';
            }
            const [year] = this.publishedDate.split('-');
            return 'published at ' + year;
        }
    },
};
</script>

<style scoped>
.book-thumb {
    width: 6vw;
    height: auto;
}
</style>
