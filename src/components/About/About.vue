<template>
  <div id="about" class="full-width flex flex-center">
    <div class="About">
      <h2 class="sticky">About</h2>
      <div class="About__seperator"></div>
      <ul class="About__site-features">
        <li v-topicscrollanimation>
          <img src="../..//assets/intuitive.png" alt="intuitive" />
          <h5 class="q-ma-md">Intuitive</h5>
          <p>Stylish and easy to navigate</p>
        </li>
        <li v-topicscrollanimation>
          <img src="../..//assets/responsive.png" alt="responsive" />
          <h5 class="q-ma-md">Responsive</h5>
          <p>Mobile friendly cross platform programming</p>
        </li>
        <li v-topicscrollanimation>
          <img src="../..//assets/optimized.png" alt="optimized" />
          <h5 class="q-ma-md">Optimized</h5>
          <p>Optimized for SEO and flawless performance</p>
        </li>
        <li v-topicscrollanimation>
          <img src="../..//assets/dynamic.png" alt="dynamic" />
          <h5 class="q-ma-md">Dynamic</h5>
          <p>Database integration with key frameworks</p>
        </li>
      </ul>
      <div style=" width: 100%; display: flex">
        <div class="About__profile-container">
          <img src="../../assets/profile-img.png" alt="profile" />
          <h4>Who am I?</h4>
          <p>
            I'm a fullstack developer from Oslo, Norway. Building creative and
            durable solutions using modern technology is something I love
            learning about and apply in my everyday worklife.
          </p>
          <button>
            <a href="#portfolio"> View my projects</a>
          </button>
        </div>
        <div class="About__skill-container">
          <ul>
            <li v-for="(card, index) in skillCards" :key="index">
              <div style="background: #6d32a3; width: 100px">
                {{ card.name }}
              </div>
              <div
                v-skillscrollanimation
                style="background: #9d49ea9c; justlify-self: flex-start; width: 60%;"
                :style="skillCards ? 'width:' + card.skillLevel + '%' : ''"
              ></div>
              <div style="color: black; position: absolute; right: 0px">
                {{ card.skillPercent }}%
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import TopicScrollAnimation from "../../animations/TopicScrollAnimation";
import SkillScrollAnimation from "../../animations/SkillScrollAnimation";

Vue.directive("topicscrollanimation", TopicScrollAnimation);
Vue.directive("skillscrollanimation", SkillScrollAnimation);

// console.log(new ScrollMagic.Scene({ triggerElement: ".sticky" }));
// var tl = new TimelineMax({ onUpdate: updatePercentage });
// const controller = new ScrollMagic.Controller();

// tl.from("#blockquote", 0.5, { x: 200, opacity: 0 });
// const scene = new ScrollMagic.Scene({
//   triggerElement: ".sticky",
//   triggerHook: "onLeave",
//   duration: "100%"
// })
//   .setpin(".sticky")
//   .setTween(tl)
//   .addTo(controller);

// function updatePercentage() {
//   tl.progress();
//   console.log(tl.progress());
// }

export default {
  data() {
    return {
      skillCards: [
        {
          name: "HTML",
          skillLevel: 74,
          skillPercent: 84
        },
        {
          name: "CSS",
          skillLevel: 71,
          skillPercent: 81
        },
        {
          name: "JavaScript",
          skillLevel: 64,
          skillPercent: 74
        },
        {
          name: "Vue.js",
          skillLevel: 64,
          skillPercent: 74
        },
        {
          name: "Firebase",
          skillLevel: 47,
          skillPercent: 57
        },
        {
          name: "React",
          skillLevel: 32,
          skillPercent: 42
        },

        {
          name: "Wordpress",
          skillLevel: 24,
          skillPercent: 34
        },
        {
          name: "PHP",
          skillLevel: 21,
          skillPercent: 31
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.extraNavSpace #about
  padding-top: 50px

.About
    height: 100vh
    max-width: 1200px
    min-width: 800px
    width: 1200px
    margin-left: 50px
    margin-right: 50px
    display: flex
    flex-flow: column
    align-items: center
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

    h2
        margin-bottom: 20px

    &__seperator
        background: black
        height: 4px
        width: 100px

    &__site-features
        width: 100%
        list-style: none
        display: flex
        margin-top: 70px
        justify-content: space-evenly
        padding: 0

        li
            width: 210px
            display: flex
            flex-flow: column
            align-items: center


            &:nth-child(2)
              transition-delay: 0.1s

            &:nth-child(3)
              transition-delay: 0.2s

            &:nth-child(4)
              transition-delay: 0.3s

            h5
                font-size: 3.2vh
                font-weight: 400

            p
                font-size: 2vh
                text-align: center

    &__profile-container
        width: 50%
        display: flex
        justify-content: center
        align-items: center
        flex-flow: column
        height: 48vh

        img
            height: 55%
            border-radius: 20px

        h4
            margin: 15px
            margin-bottom: 0px
            font-size: 2.5vh

        p
            text-align: center
            padding: 10px
            padding-left: 40px
            padding-right: 40px
            margin: 0

        button
            margin-top: 15px
            font-size: 2vh
            background: none
            outline: none
            border: 0.1px #9d49ea solid
            cursor: pointer
            transition: 0.3s
            background: #a052e782
            width: 200px
            height: 40px
            display: flex

            a
              height: 100%
              width: 100%
              padding: 5px

            &:hover
                background: none

    &__skill-container
        width: 50%
        display: flex
        height: 100%

        ul
            list-style: none
            display: flex
            flex-flow: column
            width: 100%
            margin: 0
            padding: 0
            height: 48vh

            li
                background: #bdbbbb8e
                height: 35px
                width: 100%
                display: flex
                position: relative
                margin: 13px
                z-index: -1
                position: relative
                top: 0


                div
                    width: 80px
                    display: flex
                    justify-content: center
                    align-items: center
                    font-size: 16px
                    color: white
                    font-weight: bold

.before-enter-about-topics
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.5s cubic-bezier(.62,.16,.43,.9)

.enter-about-topics
  opacity: 1;
  transform: translateY(0px);

.before-enter-about-skills
  opacity: 0;
  // transform: translateX(-100px);
  transform: scaleX(0.1)
  transition: all 0.5s cubic-bezier(.62,.16,.43,.9)

.enter-about-skills
  opacity: 1;
  transform: scaleX(1)
  // transform: translateX(0px);
</style>
