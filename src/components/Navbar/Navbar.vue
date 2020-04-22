<template>
  <div class="Navbar full-width flex flex-center" id="main-nav">
    <ul class="Navbar__link-container">
      <li class="Navbar__link-container__link"><a href="#home">Home</a></li>
      <li class="Navbar__link-container__link"><a href="#about">About</a></li>
      <li class="Navbar__link-container__link">
        <a href="#portfolio">Portfolio</a>
      </li>
      <li class="Navbar__link-container__link">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: "123",
      topOfNav: ""
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.nav = document.getElementById("main-nav");
    this.topOfNav = this.nav.offsetTop;
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY >= this.topOfNav) {
        document.body.classList.add("fixed-nav");
        document.body.classList.add("extraNavSpace");
        console.log("It's fixed");
      } else {
        document.body.classList.remove("fixed-nav");
        document.body.classList.remove("extraNavSpace");
      }
    }
  }
};
</script>

<style lang="sass">

.Navbar
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
