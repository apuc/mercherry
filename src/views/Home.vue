<template>
  <div class="home">
    <Header/>
    <HomeSearch/>
    <HomeDesc/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header';
import HomeSearch from '../components/home/HomeSearch';
import HomeDesc from '../components/home/HomeDesc';

export default {
  name: 'home',
  components: {
    Header,
    HomeSearch,
    HomeDesc
  }
}
</script>
