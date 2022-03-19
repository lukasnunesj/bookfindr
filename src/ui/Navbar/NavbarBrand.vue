<template>
    <div>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#' + target"
            :aria-controls="target"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link :to="link" class="navbar-brand">{{ text }}</router-link>
    </div>
</template>

<script>
export default {
    name: 'NavbarBrand',
    props: {
        target: String,
        text: String,
        link: String,
    },
};
</script>

<style></style>
