const inputMixin = {
  $_veeValidate: {
    value() {
      return this.value;
    }
  },
  data() {
    return {
      done: 0,
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    error: {
      type: String
    },
    value: {
      default: ''
    },
    index: {
      type: Number
    }
  },
  methods: {
    updateValue(e) {
      if (this.data.addField !== undefined) {
        let index;
        if (this.data.addIndex !== undefined) {
          index = this.data.addIndex;
        }
        else {
          index = this.index;
        }
        for (let value of this.data.addFieldValue) {
          if (e.target.value == value) {
            this.done++;
            this.$emit('countPlus', {index: index + 1, data: this.data.addField});
            break;
          }
          else if (this.done === 1) {
            this.$emit('countMinus', index + 1);
            this.done = 0;
          }
        }
      }
      this.$emit("input", e.target.value);
    }
  },
};

export default inputMixin;