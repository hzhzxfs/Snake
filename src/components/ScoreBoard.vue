<template>
  <div class="score-board">
    <div class="apple">
       <img src="https://s1.328888.xyz/2022/08/05/jZF9N.png" alt="">
       <div>{{ $store.state.score }}</div>
    </div> 
    <div class="cup">
        <img src="https://s1.328888.xyz/2022/08/05/jZDF5.png" alt="">
        <div>{{ $store.state.record }}</div>
    </div>

  </div>
</template>


<script>
export default{
    name: "ScoreBoard",
}
</script>


<style scoped>
.score-board {
    height: 8vh;
    background-color: #82ad32;
    display: flex;
    justify-content: space-around;
    user-select: none;
}
.apple {
    display: flex;
    align-items: center;
}
.apple > img {
    width: 5vh;
    height: 6vh;
}
.apple > div {
    color: white;
    font-weight: bold;
    font-size: 2.5vh;
    margin-left: 1vh;
}
.cup {
    display: flex;
    align-items: center;
}
.cup > img {
    width: 5vh;
    height: 6vh;
}
.cup > div {
    color: white;
    font-weight: bold;
    font-size: 2.5vh;
    margin-left: 1vh;
}
</style>