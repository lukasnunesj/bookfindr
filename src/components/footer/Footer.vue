<template>
    <footer class="footer mt-auto py-3">
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="text-center pt-3">© Copyright {{ new Date().getFullYear() }} Lucas Nunes. All rights reserved.</p>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <a href="https://github.com/lukasnunesj" class="footer-link" target="_blank">
                        <github-icon size="1.5x" class="mx-2"></github-icon>
                    </a>
                    <a href="https://www.linkedin.com/in/lucasnunesjoaquim/" class="footer-link" target="_blank">
                        <linkedin-icon size="1.5x"></linkedin-icon>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import { GithubIcon, LinkedinIcon } from "vue-feather-icons";

    export default {
        components: {
            GithubIcon,
            LinkedinIcon,
        },
    };
</script>

<style scoped>
    .footer-link {
        text-decoration: none;
        color: #212529;
    }
</style>
