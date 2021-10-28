import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

//  Example 1

// <template>
//   <div class="inputs">
//     <form>
//       <input type="text" name="days" placeholder="Количество дней..." class="day">
//       <input type="text" name="city" placeholder="Город..." class="city">
//         <div>
//           <button type="button" name="btn" class="btn" @click="getFetch"> >Start</button> <!-- НЕ РАБОТАЕТ СОБЫТИЕ-->
//         </div>
//     </form>
//   </div>
//   <div class="output"></div>     <!-- в диве должен лежать файл {{output}} принимающий отрисовку в ответе на запрос ??-->

// </template>

// <script>
//   export default {
//     data() {
//       return {
//         API_TOKEN : 'YmVmYjliYmQtN2U0MC00MzkyLTgwNjUtYTA1ZTRkMzAwZTc0',  // не работает()
//         API_URL : 'https://api.m3o.com/v1/weather/Forecast',
//       }
//     },
//     methods:{
//     getFetch() {    
//     const inputDays = document.querySelector('.day').value           
//     const inputCity = document.querySelector('.city').value
//     const output = document.querySelector('.output')   
    
//     fetch(API_URL +  `?days=${inputDays}&location=${inputCity}` , { //НЕ РАБОТАЕТ ИНТЕРПОЛЯЦИЯ inputDays  <%= %>  js--> `?days=${inputDays}&location=${inputCity}`
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${API_TOKEN}`, // <router-link> ??
//       }
//     })
//     .then(resp => resp.json())   
//     .then((data) => {
//       output.textContent = JSON.stringify(data, null, '\t')
//     })        
//     .catch((error) => {
//       output.textContent = error
//     })
// }

//     }

//   }
// </script>

// <style>
//   .output {
//     white-space: break-spaces;
//   }
// </style>








// Example 2

// <template>
//     <div>
//       <input 
//         v-model="query"
//         type="text" 
//         class="SearchInput" 
//         :placeholder="placeholder"
//         >   
//  <transition-group name="fade" tag="ul" class="Results">
//             <li v-for="item in filtered" :key="item">
//                 <span>
//                     <strong>{{ item.title  }}</strong> - <small>{{ item.id  }}</small><br>
//                     <small>{{ item.body  }}</small>
//                 </span>
//             </li>
//         </transition-group>


//     </div>
// </template>

// <script>

//   export default {
//     name: 'Typeahead',

//     computed: {
//       filtered() {
//         if(this.query.length >= this.startAt) {
//           return this.items.filter(item => {
//             if( item.hasOwnProperty(this.filterKey)  ) {
//               return item[this.filterKey]
//                 .toLowerCase()
//                 .indexOf(this.query.toLowerCase()) > -1
//             } else {
//                 console.error(`Seems like property you passed down ${this.filterKey} doesn't exist on object ! `)
//             }
//           })
//         }
//       }
//     },

//     mounted() {
//       this.fetchItems()
//     },

//     methods: {
//       fetchItems() {
//         if ( typeof this.source === 'string' ) {
//           fetch(this.source)
//             .then(stream => stream.json())
//             .then(data => this.items = data)
//             .catch(error => console.error(error))
//         } else {
//             this.items = this.source
//           }
//       }
//     },

//     data() {
//       return {
//         items: [],
//         query: ''
//       }
//     },

//     props: {
//       source: {
//         type: [String, Array],
//         required: true
//       },
//       filterKey: {
//         type: String,
//         required: true
//       },
//       startAt: {
//         type: Number,
//         default: 1
//       },
//       placeholder: {
//         type: String,
//         default: ''
//       }    
//     }
//   }
// </script>

// <style>
// </style>







// Example Axios 

// <template>
//   <div>
//     <div id="app">
//   {{ info }}
// </div>
//   </div>
// </template>

// <script>


// export default {
  
// new Vue({
//   el: '#app',
//   data() {
//     return {
//       info: null,
//       loading: true,
//       errored: false
//     };
//   },
//   filters: {
//     currencydecimal(value) {
//       return value.toFixed(2);
//     }
//   },
//   mounted() {
//     axios
//       .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//       .then(response => {
//         this.info = response.data.bpi;
//       })
//       .catch(error => {
//         console.log(error);
//         this.errored = true;
//       })
//       .finally(() => (this.loading = false));
//   }
// });  


// Example 3

// <template>
// <div>
//   <div>
//     Количество лайков: {{likes}}  <!-- ИНФОРМАЦИЯ ДЛЯ ОТОБРАЖЕНИЯ-->
//   </div>
//   <div>
//     <button @click="addLike">Click</button> <!--КНОПКА ПРИНИМАЮЩАЯ ФУНКЦИЮ, КОТОРАЯ БУДЕТ ВЛИЯТЬ НА ВЫВОДНУЮ ИНФ-->
//   </div>
// </div>
// </template>

// <script>
// export default {
//   data() {
//     return {
//       likes:0, //ИЗНАЧАЛЬНАЯ ИНФОРМАЦИЯ ОТОБРАЖАЕМАЯ 
//     }
//   },

//   methods:{
//     addLike(){
//       this.likes +=1; // ФУНКЦИЯ, ВЫЗЫВАЕМАЯ СОБЫТИЕМ И ВЛИЯЮЩАЯ НА ИНФОРМАЦИЮ
//     }
//   }
// }
// </script>

// <style>

// </style>