<template>
    <div class="container" data-test-id="about-page">
        <div class="row justify-content-center">
            <div class="col-8 mt-5">
                <h3 class="text-center">About</h3>

                <br />

                <br />

                <p>
                    This site is very simple, you type some terms and click
                    "search". It will call Google Books' API using Axios to
                    retrieve data matching with the terms searched.
                </p>

                <p>
                    I made this project using
                    <b>VueJs</b>
                    because I wanted to practice my knowledge in this framework
                    that I like so much!
                </p>

                <p>
                    I chose to use Bootstrap because I didn't want to worry
                    about CSS in this specific project. Furthermore, I wanted to
                    keep it simple, so I focused mostly on the Vue aspects.
                </p>

                <p>
                    <i>Vue Router</i>
                    was used to implement navigation between pages.
                </p>

                <p>
                    The Idea for this was taken from the
                    <a
                        class="text-decoration-none"
                        href="https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Book-Finder-App.md"
                        target="_blank"
                    >
                        <b>APP IDEAS</b>
                    </a>
                    repository.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default { name: 'AboutPage' };
</script>
