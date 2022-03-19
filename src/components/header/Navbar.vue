<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <NavbarBrand
                target="navbarNavAltMarkup"
                link="/"
                text="Bookfindr"
            />

            <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
                <NavbarNav>
                    <NavLink link="/about" text="about" />
                </NavbarNav>
            </div>
        </div>
    </nav>
</template>

<script>
import NavbarBrand from '../../ui/Navbar/NavbarBrand';
import NavbarNav from '../../ui/Navbar/NavbarNav';
import NavLink from '../../ui/Navbar/NavLink';
export default {
    name: 'NavbarComponent',
    components: { NavbarBrand, NavbarNav, NavLink },
};
</script>

<style></style>
