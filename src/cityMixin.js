import {mapActions, mapMutations, mapGetters} from 'vuex';

const cityMixin = {
  data() {
    return {
      city: {
        focused: false,
        dropdownValue: [],
      },
    }
  },
  methods: {
    ...mapActions({
      CITY_LIST: 'lists/CITY_LIST'
    }),
    ...mapMutations({
      DATA_USER_CITY: 'profile/DATA_USER_CITY'
    }),
    choiceValue(name, index) {
      if (this[`DATA_USER_${name.toUpperCase()}`] !== undefined) {
        this[`DATA_USER_${name.toUpperCase()}`](this.$refs[`${name}Drop`][index].innerHTML.trim());
      }
      else {
        this[name].name = (this.$refs[`${name}Drop`][index].innerHTML.trim());
      }
      this[name].focused = false;
    },
    focusFalse(name) {
      setTimeout(() => {
        this[name].focused = false;
        this[name].dropdownValue = [];
      }, 200);
    },
    /**
     * value {Object} -
     * value.name {String} -
     */
    dropdownRequest:
      _.debounce(function(value) {
        const name = value.name.charAt(0).toUpperCase() + value.name.slice(1);
        if(this[`profile${name}`] !== '') {
          this[`${name.toUpperCase()}_LIST`](value.obj)
            .then(res => {
              this[name.toLowerCase()].dropdownValue = [];
              if (typeof res.body === Array) {
                this[name.toLowerCase()].dropdownValue = res.body.slice(0, 10);
              }
              else {
                for (let value in res.body) {
                  this[name.toLowerCase()].dropdownValue.push(res.body[value]);
                }
              }
            })
        }
      }, 200),
  },
  computed: {
    ...mapGetters({
      profileCity: 'profile/city'
    }),
    modelCity: {
      get () {
        return this.profileCity;
      },
      set (value) {
        this.DATA_USER_CITY(value);
      }
    }
  },
};

export default cityMixin;