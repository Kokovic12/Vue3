<template> 
    <div>
         <form action="#" method="post">  
    
    <div>
      <label for="day">Day:</label>
      <input placeholder="кол-во дней" type="text" id="day" name="user_day">  
    </div>  

    <div>
      <label for="location">Location:</label>
      <input placeholder="город на английском" type="location" id="location" name="user_location">  
    </div> 

    <div>
    <button type="submit">Show the weather forecast</button>
    </div>

</form>
    </div>
    <!--<button @click="addLike">Like</button> IF v-on:click='addLike'-->
</template>


<script>
const API_TOKEN = 'YmVmYjliYmQtN2U0MC00MzkyLTgwNjUtYTA1ZTRkMzAwZTc0';
const API_URL = 'https://api.m3o.com/v1/weather/Forecast';

export default{
    data(){
        return{
            // likes:0,
            // dislikes:0,
        }
    },
    // methods:{
    //     addLike(){
    //         this.likes +=1;
    //     },
    //     addDislike(){
    //         this.dislikes +=1;

    //     }
    // }
}

fetch(API_URL +  `?days=2&location=London`, {
        method:"GET",
        headers:{
            "Content-Type": `application/json`,
            "Authorization": `Bearer ${API_TOKEN}`,
        }
     })
     .then(resp=>resp.json())
     .then((data)=>{console.log(data)})
     .catch((error)=>{console.log(error)})


</script>


<style>

</style>