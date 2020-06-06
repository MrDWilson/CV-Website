<template>
    <div id="hamburger-wrapper">
        <div id="hamburger"></div>
    </div>
</template>

<script>
    export default {
        name: "HamburgerMenu"
    }
</script>

<style scoped>
    #hamburger-wrapper {
        margin: 0;
        padding: 0;
        right: 0px;
        text-align: right;
        position: absolute;
        display: table;
        height: 100%;
    }

    #hamburger {
        overflow: hidden;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('../assets/menu-icon.png');
        height: 100%;
        width: 30px;
        right: 25px;
        position: absolute;
        transition: all 0.5s;
        cursor: pointer;
    }

    #hamburger:hover {
        opacity: 50%;
    }

</style>