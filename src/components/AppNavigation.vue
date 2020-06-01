<template>
    <div class="navbar">
        <router-link id="home-button" to="/">DW</router-link>
        <ul v-for="item in items" :key="item.title" @click="link_clicked(item.route)">
            <li>
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
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
        height: 50px;
        background: #424242;
        text-align: center;
        margin: auto;
        position: relative;
    }

    .navbar ul {
        list-style: none;
        height: 100%;
        margin: auto;
        padding: 0;
        display: inline-block;
    }

    .navbar li {
        height: 100%;
        padding: 0 10px;
        vertical-align: middle;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
    }

    /* Hover effects */

    .navbar ul li
    {
        position: relative;
    }
    .navbar ul li:after,
    #home-button:after {
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        margin: auto;
        width: 0;
        content: '.';
        color: transparent;
        background: cyan;
        height: 1px;
    }
    .navbar ul li:hover:after,
    #home-button:hover:after {
        width: 85%;
    }

    .navbar ul li:before,
    .navbar ul li:after,
    #home-button:before,
    #home-button:after {
        transition: all .5s;
    }
    .navbar ul li:hover,
    #home-button:hover {
        color: cyan;
    }

    #home-button {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 10px;
        vertical-align: middle;
        text-decoration: none;
        color: white;
        cursor: pointer;
        position: absolute;
        left: 5px;
    }

    #home-button:hover {
        color: cyan;
    }

</style>