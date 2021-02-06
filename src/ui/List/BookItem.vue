<template>
    <a :href="link" target="_blank" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        <div class="flex-column">
            <h5>
                {{title}}
            </h5>
            <p><small>{{author}}</small></p>
            <p><small>{{publishedDate}}</small></p>
        </div>
        <div class="image-parent">
            <img :src="imgUrl ? imgUrl.smallThumbnail : noimage" class="book-thumb" />
        </div>
    </a>
</template>

<script>
    export default {
        name: "BookItem",
        data: function(){
            return {
                noimage: require("../../assets/img/noimg.jpeg")
            }
        },
        props: {
            title: String,
            link: String,
            author: String,
            imgUrl: Object,
            publishedDate: String
        }
    };
</script>

<style scoped>
.book-thumb{
    width: 6vw;
    height: auto;
}
</style>
