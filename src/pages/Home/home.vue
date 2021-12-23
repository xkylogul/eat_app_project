<template>
  <div class="hello">
    <div>{{citys}}</div>
    <div>home</div>
  </div>
</template>

<script>
import {getCity} from '@/api/api'
export default {
  props: {
    msg: String
  },
  data(){
   return{
     citys:''
   }
  },
  async mounted(){
const city = await getCity()
console.log(city)
this.citys = city.name
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
