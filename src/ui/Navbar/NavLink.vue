<template>
  <a :class="navlinkClass" :href="link">{{ text }}</a>
</template>

<script>

export default {
    name: "NavLink",
    props: {
        active: Boolean,
        disabled: Boolean,
        link: String,
        text: String
    },
    data: function (){
        return {
            navlinkClass: 'nav-link'
        }
    },
    created() {
        console.log(this.active);
        if (this.active) {
            this.navlinkClass += ' active'
        }
        if (this.disabled) {
            this.navlinkClass += ' disabled'
        }
    }
}
</script>

<style>

</style>