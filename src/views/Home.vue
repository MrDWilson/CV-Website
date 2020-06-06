<template>
    <div>
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section" id="landing">
                <div id="landing-content" class="page-content">
                    <h1>DANNY WILSON DW</h1>
                    <h4>Software Engineer</h4>
                </div>
            </div>
            <div class="section">My Experience</div>
            <div class="section">My Skills</div>
            <div class="section">My Education</div>
            <div class="section">My References</div>
            <div class="section">My Hobbies</div>
            <div class="section">Want to contact me?</div>
        </full-page>
    </div>
</template>

<script>
    import 'fullpage.js/dist/fullpage.css'
    export default {
        name: "Home",
        data() {
            return {
                options: {
                    navigation: true,
                    parallax: true
                }
            }
        }
    }
</script>

<style scoped>

    h1 {
        margin: 0;
        text-align: center;
        padding: 25px;
        color: white;
    }

    #fullpage {
        text-align: center;
        font-size: 50px;
    }

    #landing h1, h4 {
        padding: 0;
        margin: 0;
        text-shadow: 0 0.3rem 0.9rem rgba(0,0,0,.4);
        color: white;
    }

    #landing {
        background-image: url("../assets/laptopbackblur.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .page-content {
        padding: 0px 50px;
    }

    @media only screen and (max-width: 1000px) {
        #landing h1, h4 {
            font-size: 90%;
        }
    }

    @media only screen and (max-width: 600px) {
        #landing h1, h4 {
            font-size: 60%;
        }
    }


</style>