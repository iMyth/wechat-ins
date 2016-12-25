<template>
  <div class="container">
    <div class="plan section">
      <div class="title">投保计划</div>
      <div class="start flex-stretch">
        <span>保险起期</span>
        <span>{{startTime}}</span>
      </div>
      <div class="end flex-stretch">
        <span>保险止期</span>
        <span>{{endTime}}</span>
      </div>
      <div class="period flex-stretch">
        <span>保险时限</span>
        <span>一年</span>
      </div>
    </div>
    <div class="info section">
      <div class="title">信息填写</div>
      <div class="start flex-stretch">
        <span>姓名</span>
        <input type="text">
      </div>
      <div class="end flex-stretch">
        <span>性别</span>
        <span>{{endTime}}</span>
      </div>
      <div class="period flex-stretch">
        <span>保险时限</span>
        <span>一年</span>
      </div>
    </div>
    <footer>
      <div @click="pay(1)" class="button">付款</div>
    </footer>
  </div>
</template>

<script>
const now = new Date()
window.data = window.data || {}
const data = window.data.result
// const sign = window.data.order.sign
function prependDebug (msg) {
  let p = document.createElement('p')
  p.innerText = msg
  document.body.prepend(p)
}
export default {
  name: 'hello',
  data () {
    return {
      title: 'Pay',
      count: 4574,
      startTime: now.getFullYear() + '-09-01 00时',
      endTime: (now.getFullYear() + 1) + '-08-31 24时'
    }
  },
  mounted () {
    //
  },
  methods: {
    pay (a) {
      window.WeixinJSBridge.invoke(
       'getBrandWCPayRequest', data,
       function(res){     
           if (res.err_msg == "get_brand_wcpay_request:ok" ) {}
       }
     )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container{
  height: 100vh;
  font-size: 0.35rem;
  text-align: left;
  box-sizing: border-box;
  background-color: #f2f2f2;
  color: #666;
  padding-bottom: 2.25rem;
}
.section{
  background-color: white;
  // text-indent: 0.2rem;
}
.title{
  background-color: #f2f2f2;
  height: 1rem;
  font-size: 0.35rem;
  line-height: 1rem;
  padding: 0 15px;
}
footer{
  background-color: #f6f6f6;
  height: 2.25rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100vw;
  bottom: 0;
  left: 0;
  z-index: 99;
}
.flex-stretch{
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
}
.button{
  font-size: 0.35rem;
  background-color: #888;
  color: white;
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
  width: 90%;
  border-radius: 0.45rem;
  a{
    color: white;
    display: block;
  }
  &:active{
    transform:scale(0.95) ;
    box-shadow:0px 0px ..25em white;
    transition-duration: .4s;
  }
}
</style>
