<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menu" :key="index" @mouseenter="enter">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="kind" class="detail" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item, index) in curdetail">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="v in item.child" :key="v">{{v}}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: "",
      menu: [
        {
          type: "food",
          name: "美食",
          child: [{
            title: "美食",
            child: ["代金券", '甜点饮品', '火锅', "自助餐", "小吃快餐"]
          }]
        }, {
          type: "takeout",
          name: "外卖",
          child: [{
            title: "外卖",
            child: ["美团外卖", '美团外卖01', '美团外卖02', "美团外卖03", "美团外卖04"]
          }]
        }, {
          type: "hotel",
          name: "酒店",
          child: [{
            title: "酒店星级",
            child: ["经济型", '经济/舒适性', '有趣型', "豪华型", "普通型"]
          }]
        }]
    }
  },
  computed: {
    curdetail() {
      const arr = this.menu.filter((v) => v.type == this.kind)[0];
      if (arr) {
        return arr.child;
      } else {
        return [];
      }
    }
  },
  methods: {
    mouseleave() {
      let self = this;
      self._timer = setTimeout(() => {
        self.kind = ""
      }, 150);
    },
    enter(e) {
      this.kind = e.target.querySelector('i').className;
    },
    sover() {
      clearTimeout(this._timer)
    },
    sout() {
      this.kind = ""
    }
  }
}
</script>
<style scoped>
</style>
