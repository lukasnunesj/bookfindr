<template>
    <router-link :class="navlinkClass" :to="link" active-class="active">{{
        text
    }}</router-link>
</template>

<script>
export default {
    name: 'NavLink',
    props: {
        active: Boolean,
        disabled: Boolean,
        link: String,
        text: String,
    },
    data: function () {
        return {
            navlinkClass: 'nav-link',
        };
    },
    created() {

        if (this.active) {
            this.navlinkClass += ' active';
        }
        if (this.disabled) {
            this.navlinkClass += ' disabled';
        }
    },
};
</script>

<style></style>
