<template>
  <div class="container">
    <div class="hello">
      <header>{{title}}</header>
      <article>
        <strong>尊敬的家长们：</strong>
        <p>你们好！转眼到了开学季，您还在为这一年的安全问题担忧么？我们为您提供了一年期综合意外险，和您一起保障孩子安全。</p>
        <p>你们好！转眼到了开学季，您还在为这一年的安全问题担忧么？我们为您提供了一年期综合意外险，和您一起保障孩子安全。</p>
        <p>你们好！转眼到了开学季，您还在为这一年的安全问题担忧么？我们为您提供了一年期综合意外险，和您一起保障孩子安全。</p>
      </article>
      <div class="desc">
        <div class="sub-title">一年期综合意外险</div>
        <div class="price">￥69</div>
        <div class="sold">
          已售: {{count}}
        </div>
        <div class="tips">
          <span><a href="#">投保须知</a></span>
          <span><a href="#">保险内容解读</a></span>
          <span><a href="#">理赔流程</a></span>
        </div>
      </div>
      <footer>
        <div class="button"><a href="#/pay">立即投保</a></div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: '致家长的一封信',
      count: 4574
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container{
  height: 100vh;
  padding-bottom: 2.25rem;
  box-sizing: border-box;
}
.hello{
  overflow-y: scroll;
  height: 100%;
  // -webkit-overflow-scrolling: touch;
}
header{
  height: 1rem;
  line-height: 1rem;
  font-size: 0.45rem;
  font-weight: 400;
  color: #666;
  border-bottom: 1px solid #c4c4c4;
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
article{
  text-align: left; font-size: 0.4rem; margin: 0.2rem;
  strong{
    font-weight: 200;
    text-align: left;
  }
}
p{
  text-align: left;
  text-indent: .5rem;
}
a{
  text-decoration: none;
}
.desc{
  text-align: left;
  margin: 0.2rem;
  background-color: #f2f2f2;
  border-radius: 0.2rem;
  font-size: 0.45rem;
  padding: 0.2rem;
  .sub-title{
    font-weight: 500;
  }
  .price{
    font-size: 0.5rem;
    font-weight: 500;
    padding: 0.1rem 0;
  }
  .sold{
    font-size: 0.3rem;
    color: #b2b2b2;
  }
}
.tips{
  border-top: dotted 1px #666;
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
  padding: .2rem 0.5rem 0;
  text-align: center;
  span{
    font-size: 0.35rem;
    display: inline-flex;
    flex: 1;
    justify-content: space-around;
    a{
      color: #4183c4;
      font-weight: 500;
    }
    &:nth-child(2) {
      border-left: solid 1px #666;
      border-right: solid 1px #666;
    }
  }
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
    transform:scale(0.95); 
    box-shadow:0px 0px ..25em white;
    transition-duration: .4s;
  }
}
</style>
