<template>
  <div class="inputs">
    <form>
      <input type="text" name="days" placeholder="Количество дней..." class="day">
      <input type="text" name="city" placeholder="Город..." class="city">
        <div>
          <button type="button" name="btn" class="btn" @click="getFetch"> Start</button> 
        </div>
    </form>
  </div>
  <div class="output"></div>     
</template>

<script>
const Token = 'YmVmYjliYmQtN2U0MC00MzkyLTgwNjUtYTA1ZTRkMzAwZTc0'
const URL = 'https://api.m3o.com/v1/weather/Forecast'
  export default {
    data() {
      return {
      
      }
    },
    methods:{
    getFetch() {    
    const inputDays = document.querySelector('.day').value           
    const inputCity = document.querySelector('.city').value
    const output = document.querySelector('.output')   
    
    fetch(URL +  `?days=${inputDays}&location=${inputCity}` , {  
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Token}`, 
      }
    })
      .then(resp => resp.json())   
      .then((data) => {
        output.textContent = JSON.stringify(data, null, '\t')
      })        
      .catch((error) => {
      output.textContent = error
      })
    }
  }
}
</script>

<style>
.output {
    white-space: break-spaces;
  }
</style>