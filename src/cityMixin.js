import {mapActions, mapMutations} from 'vuex';

const cityMixin = {
  data() {
    return {
      city: {
        focused: false,
        name: '',
        dropdownValue: [],
      },
    }
  },
  methods: {
    ...mapActions({
      CITIES_LIST: 'lists/CITIES_LIST'
    }),
    ...mapMutations({
      DATA_USER_CITY: 'profile/DATA_USER_CITY'
    }),
    choiceCity(index) {
      this.city.name = this.$refs.cityDrop[index].innerHTML.trim();
      this.city.focused = false;
    },
    focusFalse(name) {
      setTimeout(() => {
        this[name].focused = false;
      }, 200);
    },
    cityRequest:
      _.debounce(function(value) {
        if(this.city.name !== '') {
          this.DATA_USER_CITY(this.city.name);
          this.CITIES_LIST({q: this.city.name})
            .then(res => {
              this.city.dropdownValue = res.body.slice(0, 10);
            })
        }
      }, 200),
  }
};

export default cityMixin;