<template>
  <div class="Navbar full-width flex flex-center">
    <ul class="Navbar__link-container">
      <li class="Navbar__link-container__link">Home</li>
      <li class="Navbar__link-container__link">About</li>
      <li class="Navbar__link-container__link">Portfolio</li>
      <li class="Navbar__link-container__link">Contact</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">

.Navbar
    background: #292929
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
