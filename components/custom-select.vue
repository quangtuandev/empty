<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, i) of options" :key="i" @click="
        selected = option;
      open = false;
      $emit('input', option);
      ">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
          ? this.options[0]
          : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  line-height: 34px;
}

.custom-select .selected {
  background-color: transparent;
  border-radius: 0px;
  border-bottom: 1px solid #525252;
  color: #CCCCCC;
  cursor: pointer;
  user-select: none;
  padding: 12px 16px;

  font-family: AveriaSerifLibre-Regular;
  font-size: 14px;
  font-weight: 400;
}

.custom-select .selected.open {
  /* border: 1px solid #ad8225; */
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 26px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  /* border-radius: 0px 0px 6px 6px; */
  overflow: hidden;
  /* border-right: 1px solid #ad8225;
    border-left: 1px solid #ad8225; */
  /* border-bottom: 1px solid #ad8225; */
  position: absolute;
  background-color: #292929;
  left: 0;
  right: 0;
  z-index: 9;
}

.custom-select .items div {
  font-family: AveriaSerifLibre-Regular;
  color: #A3A3A3;
  margin: 0 1em;
  padding: 1em 0;
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid #525252;

  &:nth-last-child(1) {
    border-bottom: none;
  }
}

.custom-select .items div:hover {
  /* background-color: #ad8225; */
  color: #E4D3B0;
}

.selectHide {
  display: none;
}
</style>