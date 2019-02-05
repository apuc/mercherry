const cityMixin = {
  data() {
    return {
      city: {
        focused: false,
        name: '',
        dropdownValue: [
          '1',
          '2',
          '3',
          '4',
          '5'
        ],
      },
    }
  },
  methods: {
    cityRequest:
      _.debounce(function(value) {


      }, 200),
  },
  watch: {
    city(value) {
      this.cityRequest();
    },
  },
};

export default cityMixin;