<template>
  <div
    class="full-width flex flex-center"
    style="background: #f1f1f1"
    id="portfolio"
  >
    <div class="Portfolio">
      <h2>Portfolio</h2>
      <div
        style="background: black; width: 100px; height: 5px"
        class="About__seperator"
      ></div>
      <ul class="Portfolio__navigator">
        <li
          v-for="(item, index) in navigatorItems"
          :style="categoryClicked == item.name ? 'background: #a052e782' : ''"
          :key="index"
        >
          {{ item.name }}
        </li>
      </ul>
      <ul class="Portfolio__cards-container">
        <li
          v-for="(card, index) in portfolioCardsOnDisplay"
          :key="index"
          v-portfoliocardscrollanimation
        >
          <img :src="card.img" alt="img" />
          <div></div>
          <p class="on-hover-display-title">{{ card.title }}</p>
          <p style="font-weight: 200" class="on-hover-display-subTitle">
            {{ card.tech }}
          </p>
          <button
            @click="redirectToPortfolioPage(card.title)"
            class="on-hover-display-button"
          >
            Learn more
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import PortfolioCardAnimation from "../../animations/PortfolioCardAnimation";

Vue.directive("portfoliocardscrollanimation", PortfolioCardAnimation);

export default {
  data() {
    return {
      navigatorItems: [
        { name: "javascript" },
        { name: "wordpress" },
        { name: "mobileapps" },
        { name: "static" }
      ],
      categoryClicked: "",

      portfolioCardsOnDisplay: [
        {
          title: "Classy",
          tech: "Vue.js & Firebase",
          img: "./statics/portfolio.png"
        },
        {
          title: "Classy",
          tech: "Vue.js & Firebase",
          img: "./statics/techShielder.png"
        },
        {
          title: "Classy",
          tech: "Vue.js & Firebase",
          img: "./statics/modern.jpg"
        },
        {
          title: "Classy",
          tech: "Vue.js & Firebase",
          img: "./statics/portfolio.png"
        },
        {
          title: "Classy",
          tech: "Vue.js & Firebase",
          img: "./statics/techShielder.png"
        },
        {
          title: "Classy",
          tech: "Vue.js & Firebase",
          img: "./statics/modern.jpg"
        }
      ],

      Applications: {
        javascript: [
          {
            title: "Classy",
            tech: "Vue.js & Firebase",
            img: "./statics/portfolio.png"
          },
          {
            title: "Classy",
            tech: "Vue.js & Firebase",
            img: "./statics/portfolio.png"
          }
        ],
        wordpress: [
          {
            title: "TechShielder",
            tech: "WordPress & PHP",
            img: "./statics/techShielder.png"
          },
          {
            title: "TechShielder",
            tech: "WordPress & PHP",
            img: "./statics/techShielder.png"
          }
        ],
        mobileapps: [
          {
            title: "PlantBased",
            tech: "Vue.js & Firebase",
            img: "./statics/plantBased.png"
          }
        ],
        static: []
      }
    };
  },
  methods: {
    clickedCategory(categoryClicked) {
      //   this.navigatorItems[index].className.add("black");
      //   console.log(index);
      this.portfolioCardsOnDisplay = this.Applications[categoryClicked];
      this.categoryClicked = categoryClicked;
    },

    redirectToPortfolioPage(key) {
      this.$router.push("/portfoliopage/" + key);
    }
  }
};
</script>

<style lang="sass">

.black
    background: black

.Portfolio
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
        padding-top: 20px

    &__seperator
        background: black
        height: 4px
        width: 100px

    &__navigator
        list-style: none
        margin: 0
        margin-top: 100px
        padding: 0
        display: flex
        width: 80%
        justify-content: space-evenly

        li
            height: 40px
            width: 180px
            display: flex
            justify-content: center
            align-items: center
            font-size: 25px
            padding-bottom: 5px
            font-variant: small-caps
            cursor: pointer
            border-radius: 10px
            box-shadow: 0px 0px 3px 0px black
            transition: 0.5s

    &__cards-container
        width: 90%
        min-height: 60vh
        margin: 0
        margin-top: 40px
        padding: 0
        display: grid
        grid-template-rows: 1fr 1fr
        grid-template-columns: 1fr 1fr 1fr
        gap: 30px
        list-style: none

        li
            background: #535353
            width: 100%
            height: 100%
            // overflow: hidden
            display: flex
            align-items: center
            justify-content: center
            padding: 15px
            cursor: pointer
            position: relative
            box-shadow: 0px 0px 2px 0px black
            border-radius: 10px

            &:nth-child(2)
              transition-delay: .1s
            &:nth-child(3)
              transition-delay: .3s
            &:nth-child(4)
              transition-delay: .9s
            &:nth-child(5)
              transition-delay: .7s
            &:nth-child(6)
              transition-delay: .5s

            &:hover img
                max-width: 105%

            &:hover img
                opacity: 0.3

            &:hover .on-hover-display-title
                top: 70px
                opacity: 1

            &:hover .on-hover-display-subTitle
                top: 110px
                opacity: 1

            &:hover .on-hover-display-button
                top: 180px
                opacity: 1

            img
                // max-height: 100%
                max-width: 100%
                max-height: 100%
                background-position: center
                background-size: center
                background-repeat: norepeat
                transition: 0.3s

            div
                background: black
                height: 100%
                width: 100%
                position: absolute
                opacity: 0.0
                transition: 0.3s


                //  &:hover

.on-hover-display-title
    position: absolute
    font-size: 32px
    top: -10px
    font-weight: 500
    letter-spacing: 1.5px
    color: white
    transition: 0.3s
    opacity: 0

.on-hover-display-subTitle
    position: absolute
    font-size: 32px
    top: 30px
    font-weight: 500
    letter-spacing: 1.5px
    color: white
    transition: 0.3s
    opacity: 0

.on-hover-display-button
    position: absolute
    font-size: 20px
    width: 200px
    height: 40px
    background: none
    outline: none;
    border: 1px #9d49ea solid
    top: 250px
    // font-weight: 500
    letter-spacing: 1.5px
    color: white
    transition: 0.3s
    opacity: 0

.on-hover-display-button:hover
    background: #9d49ea
    cursor: pointer

.before-enter-portfolio-card
  opacity: 0;
  transform: scale(0);
  transition: all 1s ease-in-out

.enter-portfolio-card
  opacity: 1;
  transform: scale(1);
</style>
