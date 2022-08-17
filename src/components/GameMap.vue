<template>
    <div class="gamemap" ref="div">
        <canvas ref="canvas" tabindex="0"></canvas>
        <div class="operation" v-if="$store.state.restart">
            <button @click="restart">开始游戏</button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { GameMap } from '@/assets/scripts/GameMap';
import { useStore } from 'vuex';

export default {
    name: "GameMap",
    components: {
},
    setup: () => {
        let div = ref(null);
        let canvas = ref(null);
        const store = useStore();
        let gamemap = null;

        onMounted(() => {
            gamemap = new GameMap(canvas.value.getContext('2d'), div.value, store);
        });

        const restart = () => {
            gamemap.restart();
        }

        return {
            div,
            canvas,
            restart,
        }
    }
}
</script>

<style scoped>
div.gamemap {
    height: calc(100% - 8vh);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

canvas {
    background-color: #AAD751;
}

div.operation {
    position: absolute;
}

button {
    background-color: #fd9a3e;
    border: solid 0;
    border-radius: 5px;
    font-size: 3vh;
    color: white;
    padding: 3vh;
    cursor: pointer;
    margin: 0 0.5vh;
}

</style>