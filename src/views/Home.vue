<template>
    <div>
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section" id="landing">
                <div id="whoiam">
                    <h1>Danny Wilson</h1>
                    <h2>Software Engineer</h2>
                </div>
                <div id="aboutme">
                    <p>
                        Hi, I'm Danny, a developer with a passion for all things tech
                    </p>
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
                    //sectionsColor:
                    //    [
                    //        'black',
                    //        '#e5e6e6',
                    //        '#d8dada',
                    //        '#cbcdcd',
                    //        '#bec1c1',
                    //        '#b1b4b4',
                    //        '#a4a8a8',
                    //        '#979b9b'
                    //    ],
                    navigation: true
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

    #landing h1, h2, p {
        padding: 0;
        margin: 0;
    }

    #whoiam {
        position: fixed;
        padding-top: 100px;
        top: 0;
        text-align: center;
        width: 100%;
    }

    #aboutme {
        padding-top: 50px;
    }

</style>