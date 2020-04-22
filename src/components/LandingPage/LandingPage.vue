<template>
  <div class="full-width LandingPage__container" id="home">
    <div class="LandingPage__title flex flex-center">
      <p>hi, my name is <span style="color: #9d49ea"> ben isaksen,</span></p>
      <p>and i'm a fullstack developer</p>
    </div>
    <div style=" display: flex; justify-content: center;">
      <button class="LandingPage__button">
        <a
          style="height: 50px; width: 250px; padding-top: 10px; margin: 0; color: white"
          href="#about"
        >
          view site</a
        >
      </button>
    </div>
    <vue-particles
      style="height: 100vh;"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
      <div style="height: 50px; width: 50px; background: white;"></div>
    </vue-particles>
  </div>
</template>

<script>
import Vue from "vue";
import VueParticles from "vue-particles";
Vue.use(VueParticles);

export default {};
</script>

<style lang="sass">

.LandingPage
  &__container
    height: 100vh
    background: black
    align-items: center
    position: relative
    margin: 0 auto
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

  &__title
    color: white
    z-index: 100
    position: absolute
    width: 100%
    display: flex
    justify-content: center
    flex-flow: column
    top: 40%
    font-variant: small-caps

    p
      margin: 0
      padding: 0
      font-size: 4vh

  &__button
    position: absolute
    top: 60%
    width: 250px
    height: 50px
    display: flex
    justify-content: center
    align-items: center
    border: 0.1px #9d49ea solid
    background: none
    outline: none
    cursor: pointer
    transition: 0.2s
    color: white
    font-variant: small-caps
    font-size: 2vh
    letter-spacing: 2px

    &:hover
      background: #f6f6f64d
</style>
