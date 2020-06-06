<template>
    <div class="navbar">
        <div class="navbar-wrapper">
            <div class="navbar-backdrop"></div>
            <router-link id="home-button" to="/">DW</router-link>
            <hamburger-menu id="hamburger-menu">
            </hamburger-menu>
            <div class="navbar-list">
                <ul v-for="item in items" :key="item.title" @click="link_clicked(item.route)">
                    <li>
                        {{item.title}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import HamburgerMenu from "@/components/HamburgerMenu";

    export default {
        components: {
            HamburgerMenu
        },
        name: "AppNavigation",
        methods: {
            link_clicked(link) {
                this.$router.push(link)
                console.log(link)
            }
        },
        data() {
            return {
                appTitle: 'Danny Wilson CV',
                items: [
                    {
                        title: 'Experience',
                        route: '/experience'
                    },
                    {
                        title: 'Skills',
                        route: '/skills'
                    },
                    {
                        title: 'Education',
                        route: '/education'
                    },
                    {
                        title: 'References',
                        route: '/references'
                    },
                    {
                        title: 'Contact',
                        route: '/contact'
                    },
                    {
                        title: 'Attributions',
                        route: '/attributions'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .navbar {
        overflow: auto;
        width: 100%;
        background: transparent;
        text-align: center;
        margin: auto;
        position: fixed;
        top: 0;
        z-index: 1000;
        text-shadow: 0 0.3rem 0.9rem rgba(0,0,0,.4);
        font-size: 20px;
        height: 65px;
    }

    .navbar ul {
        list-style: none;
        margin: auto;
        display: inline-block;
        height: 100%
    }

    .navbar li, #home-button, hamburger-menu {
        height: 100%;
        vertical-align: middle;
        text-decoration: none;
        display: flex;
        align-items: center;
        color: var(--text-primary-colour);
        cursor: pointer;
    }

    .navbar-backdrop {
        position: absolute;
        width: 100%;
        height: 100%;
        filter: blur(10px) opacity(20%);
        background: #222222;
    }

    .navbar-wrapper {
        position: relative;
        height: 100%;
    }

    #home-button {
        position: absolute;
        left: 25px;
    }

    .navbar-list {
        height: 100%;
    }

    #hamburger-menu {
        display: none;
    }

    @media screen and (max-width: 1000px) {
        #hamburger-menu {
            display: block;
        }
        .navbar-list {
            display: none;
        }

        .navbar {
            height: 60px;
        }
    }

    /********************************************* Hover effects *******************************************/

    .navbar ul li
    {
        position: relative;
    }
    .navbar ul li:after,
    #home-button:after {
        position: absolute;
        bottom: 15px;
        left: 0;
        right: 0;
        margin: auto;
        width: 0;
        content: '.';
        color: transparent;
        background: var(--text-primary-colour);
        height: 1px;
    }
    .navbar ul li:hover:after,
    #home-button:hover:after {
        width: 100%;
    }

    .navbar ul li:before,
    .navbar ul li:after,
    #home-button:before,
    #home-button:after {
        transition: all .5s;
    }

</style>