<template>
  <div class="home">
    <Header/>
    <HomeSearch/>
    <HomeDesc/>
    <HomeVacancies/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header';
import HomeSearch from '../components/home/HomeSearch';
import HomeDesc from '../components/home/HomeDesc';
import HomeVacancies from "../components/home/HomeVacancies";
import Footer from "../components/Footer";

export default {
  name: 'home',
  components: {
    Footer,
    HomeVacancies,
    Header,
    HomeSearch,
    HomeDesc
  }
}
</script>
