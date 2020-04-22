<template>
  <div class="flex flex-center" style="height: 100vh; flex-flow: column">
    <q-header elevated>
      <div class="PortfolioNavbar full-width flex flex-center" id="main-nav">
        <ul class="PortfolioNavbar__link-container">
          <li class="PortfolioNavbar__link-container__link">
            <router-link to="/home"> Home</router-link>
          </li>
          <li class="PortfolioNavbar__link-container__link">
            <router-link to="/about"> About</router-link>
          </li>
          <li class="PortfolioNavbar__link-container__link">
            <router-link to="/portfolio"> Portfolio</router-link>
          </li>
          <li class="PortfolioNavbar__link-container__link">
            <router-link to="/contact"> Contact</router-link>
          </li>
        </ul>
      </div>
    </q-header>
    <h1>My portfolio Page</h1>
    <h4>Page article: {{ pageArticle }}</h4>
  </div>
</template>

<script>
export default {
  computed: {
    pageArticle() {
      return this.$route.params.article;
    }
  }
};
</script>

<style lang="sass">

.PortfolioNavbar
    background: #292929
    z-index: 100
    &__link-container
        max-width: 1300px
        min-width: 800px
        width: 1300px
        height: 50px
        margin: 0
        padding: 0
        list-style: none
        display: flex
        font-size: 2vh


        a
          color: white
          height: 100%
          width: 100%
          display: flex
          justify-content: center
          align-items: center
          font-weight: 200
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
          list-style: none
          text-decoration: none

        &__link
            width: 140px
            display: flex
            justify-content: center
            align-items: center
            margin: 0
            padding: 0
            color: white

            &:hover
               border-bottom: 3px solid #9d49ea
               cursor: pointer
               color: #9d49ea
</style>
