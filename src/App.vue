<template>
    <div class="d-flex flex-column h-100">
        <header>
            <Navbar />
        </header>
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';

export default {
    name: 'App',
    components: {
        Navbar,
        Footer,
    },
};
</script>

<style scoped></style>
