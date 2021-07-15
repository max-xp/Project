<template>
  <div class="car">
    <div class="header">
      <span class="header-tit">购物车</span>
      <span class="copyreader">编辑</span>
    </div>
    <ul>
      <li v-for="(item, idx) in nav" :key="idx">
        <div class="car-selector">
          <input
            type="checkbox"
            class="checkbox"
            @click="checkedone(item)"
            v-model="checkedNames"
            :value="item.id"
          />
        </div>
        <div class="car-img">
          <img :src="item.img" alt="" />
          <!-- <img src="../../assets/img/car/shops@2x.png" alt=""> -->
        </div>
        <div class="car-content">
          <span class="shops-tit">{{ item.title }}</span>
          <select class="form_select">
            <option value="0">枫叶红，哑光</option>
          </select>
          <span class="shops-box"></span>
          <div class="price-box">
            <span class="price">¥</span>
            <span class="price">{{ item.price }}</span>
            <div class="amount">
              <span class="minus" @click="minus(item)">-</span>
              <span class="count">{{ item.count }}</span>
              <span class="add" @click="add(item)">+</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="clearing">
      <div class="clearing-box">
        <input
          type="checkbox"
          value="Car"
          class="check-all"
          v-model="checked"
          @click="changeAllChecked()"
        />
        <span class="choice">全选</span>
        <span class="summation">合计：</span>
        <span class="aggregate">¥{{ this.allprice }}</span>
        <span class="closing" @click="skip()">结算</span>
      </div>
    </div>
    <navFoot />
  </div>
</template>

<script>
import navFoot from "../../components/nav.vue";

export default {
  name: "cara",
  components: {
    navFoot,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      checked: false,
      checkedNames: [],
      changeAllCheck: ["shop1", "shop2"],
      allprice: 0,
      nav_t:[],
      nav: [
        {
          img: "/img/shops@2x.cb9b6dbf.png",
          title: "故宫口红•枫叶红",
          price: 1,
          count: 1,
          id: "shop1",
          check: false,
        },
        {
          img: "/img/shops@2x.cb9b6dbf.png",
          title: "故宫口红•枫叶红",
          price: 199,
          count: 1,
          id: "shop2",
          check: false,
        },
      ],
    };
  },
  methods: {
    skip(){
      for(var i=0;i<this.nav.length;i++){
        if(this.nav[i].check == true){
          this.nav_t.push(this.nav[i])
        }
      }
      this.$router.push({
        path: `/indent`,
        query: {
          obj:this.nav_t,
          price:this.allprice,
          ip:5
        },
      });
    },
    minus(item) {
      if (item.check == true) {
        if (item.count < 2) {
          item.count = 1;
        } else {
          item.count--;
          this.allprice -= item.price;
        }
      } else {
        if (item.count < 2) {
          item.count = 1;
        } else {
          item.count--;
        }
      }
    },
    add(item) {
      if (item.check == true) {
        item.count++;
        this.allprice += item.price;
      } else {
        item.count++;
      }
    },
    checkedone(item) {
      item.check = !item.check;

      if (event.target.checked == true) {
        this.allprice += item.price * item.count;
        // console.log(this.allprice);
      } else {
        this.allprice -= item.price * item.count;
        // console.log(this.allprice);
      }
    },
    changeAllChecked() {
      this.checked = !this.checked;
      if (this.checked) {
        this.checkedNames = this.changeAllCheck;
        this.allprice = 0;
        for (var i = 0; i < this.nav.length; i++) {
          this.allprice += this.nav[i].price * this.nav[i].count;
          this.nav[i].check = !this.nav[i].check;
        }
      } else {
        this.checkedNames = [];
        this.allprice = 0;
        console.log(this.allprice);
      }
    },
  },
  watch: {
    checkedNames: function () {
      if (this.checkedNames.length == this.nav.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
  },
};
</script>

<style scoped>
.car {
  background: #faf8f8;
}
.header {
  width: 7.5rem;
  height: 1.76rem;
  background: #c30d23;
  text-align: center;
  position: relative;
}
.header .header-tit {
  font-size: 0.4rem;
  font-family: Source Han Serif CN;
  font-weight: bold;
  color: #fafafa;
  display: block;
  padding-top: 1.04rem;
}
.header .copyreader {
  position: absolute;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #fffcfc;
  bottom: 0.34rem;
  right: 0.24rem;
}
ul li {
  width: 6.7rem;
  height: 2.92rem;

  background: black;
  background: #ffffff;
  margin: 0.16rem 0 0 0.24rem;
  display: flex;
}
ul li .car-selector {
  width: 0.4rem;
  height: 0.4rem;
  background: #f2f2f2;
  border-radius: 50%;
  position: relative;
  top: 50%;
  left: 0.1rem;
}
ul li .car-selector .checkbox {
  width: 0.28rem;
  height: 0.28rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
ul li .car-img {
  margin: 0.32rem 0 0 0.18rem;
}
ul li .car-img img {
  width: 2.28rem;
  height: 2.28rem;
}
ul li .car-content {
  margin-top: 0.32rem;
  margin-left: 0.24rem;
}
ul li .car-content .shops-tit {
  display: block;
  font-size: 0.28rem;
  font-family: 长城大标宋体;
  color: #333333;
}
ul li .car-content .form_select {
  display: block;
  width: 2.1rem;
  height: 0.5rem;
  background: #fbfbfb;
  border: none;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #999999;
  margin-top: 0.16rem;
}
ul li .car-content .shops-box {
  display: block;
  margin-top: 0.24rem;
  width: 0.24rem;
  height: 0.24rem;
  background: #ad513a;
  border-radius: 50%;
}
ul li .car-content .price-box {
  display: flex;
  margin-top: 0.26rem;
}
ul li .car-content .price-box .price {
  display: block;
  font-size: 0.36rem;
  font-family: PingFang SC;
  color: #c30d23;
}
ul li .car-content .price-box .amount {
  display: flex;
  margin-left: 1.21rem;
  margin-top: 0.08rem;
}
ul li .car-content .price-box .amount .minus {
  display: block;
  width: 0.36rem;
  height: 0.36rem;
  background: #f7f7f7;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #c30d23;
  text-align: center;
}
ul li .car-content .price-box .amount .count {
  display: block;
  width: 0.36rem;
  height: 0.36rem;
  background: #f7f7f7;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #c30d23;
  margin: 0 0.08rem;
  text-align: center;
}
ul li .car-content .price-box .amount .add {
  display: block;
  width: 0.36rem;
  height: 0.36rem;
  background: #f7f7f7;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #c30d23;
  text-align: center;
}
.clearing {
  width: 7.5rem;
  height: 0.88rem;
  background: white;
  position: fixed;
  bottom: 1.66rem;
}
.clearing .clearing-box {
  display: flex;
  justify-content: space-between;
}
.clearing .clearing-box .check-all {
  margin: 0.24rem 0 0 0.5rem;
}
.clearing .clearing-box .choice {
  margin: 0.24rem 0 0 0.4rem;
  display: block;
  font-size: 0.28rem;
  font-family: PingFang SC;
  color: #333333;
}

.clearing .clearing-box .summation {
  margin: 0.24rem 0 0 1.64rem;
  display: block;
  font-size: 0.28rem;
  font-family: PingFang SC;
  color: #333333;
}
.clearing .clearing-box .aggregate {
  margin-top: 0.2rem;
  display: block;
  font-size: 0.36rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #c30d23;
}
.clearing .clearing-box .closing {
  width: 1.88rem;
  /* height: 0.88rem; */
  background: #c30d23;
  font-size: 0.28rem;
  font-family: PingFang SC;
  color: #fafafa;
  text-align: center;
  padding: 0.3rem 0;
}
</style>