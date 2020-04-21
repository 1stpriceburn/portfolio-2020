<template>
  <q-page class="flex flex-center full-width full-height">
    <LandingPage></LandingPage>
    <Navbar></Navbar>
    <About></About>
    <Portfolio></Portfolio>
    <Contact></Contact>
  </q-page>
</template>

<script>
import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";

export default {
  name: "PageIndex",
  components: {
    LandingPage,
    Navbar,
    About,
    Portfolio,
    Contact
  }
};
</script>
