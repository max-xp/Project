<template>
  <div class="navheader-box">
    <ul>
      <li v-for="(item, idx) in nav" :key="idx" @click="skip(item)">
        <span
          :class="[{ persent: current == item.id }, { '': current != item.id }]"
          >{{ item.text }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navheader",
  data() {
    return {
      current: this.$route.query.id,
      ip:3,
      nav: [
        {
          text: "交流圈",
          path: "find",
          id: 1,
        },
        {
          text: "灵感",
          path: "find/afflatus",
          id: 2,
        },
        {
          text: "联名",
          path: "find/jointly",
          id: 3,
        },
        {
          text: "设计师",
          path: "find/stylist",
          id: 4,
        },
      ],
    };
  },
  methods: {
    skip(item) {
      this.current = item.id;
      this.$router.push({
        path: `/${item.path}`,
        query: {
          id: this.current,
          ip:this.ip
        },
      });
    },
  },
  mounted() {
    this.current =  this.$route.query.id;
    if (!this.current) {
      this.current = 1;
    }
  },
};
</script>

<style scoped>
.navheader-box {
  background-color: white;
  width: 7.5rem;
  height: 0.96rem;
}
.navheader-box ul {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 6.46rem;
}
.navheader-box ul li span {
  display: block;
  font-size: 0.28rem;
  font-family: Source Han Serif CN;
  font-weight: bold;
  line-height: 0.38rem;
  color: #333333;
  margin-top: 0.22rem;
}
.navheader-box ul li .persent {
  color: #c30d23;
}
</style>