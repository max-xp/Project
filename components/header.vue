<template>
  <div class="header">
    <span class="header-tit">{{ this.page }}</span>
    <slot name="copyreader"></slot>
  </div>
</template>

<script>
export default {
  name: "page",
  props: {
    msg: String,
    page: String,
  },
  data() {
    return {
    };
  },

};
</script>

<style scoped>
.header {
  width: 7.5rem;
  height: 1.76rem;
  background: #c30d23;
  text-align: center;
}
.header .header-tit {
  font-size: 0.4rem;
  font-family: Source Han Serif CN;
  font-weight: bold;
  color: #fafafa;
  display: block;
  padding-top: 1.04rem;
}
</style>