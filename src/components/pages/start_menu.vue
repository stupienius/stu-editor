<script setup>
import { ref } from "vue";
import store from "../../store";

const fileInput = ref(null);

const selectFile = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const storeFilePath = (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    store.commit("setPath", { path: files[0].path || "" });
  }
};

store.commit("increment");
console.log(store.state.count);
store.commit("increment");
</script>

<template>
  <div class="start_menu">
    <h1>stu-editor {{ store.state.count }}</h1>
    <div class="selection">
      <button @click="selectFile">Select</button>
      <button @click="findNewFilePath">New</button>
      <button @click="store.commit('increment')">config</button>
      <button>Quit</button>
    </div>
    <div class="disappear" style="display: none">
      <input
        type="file"
        ref="fileInput"
        @change="storeFilePath"
        style="display: none"
      />
    </div>
  </div>
</template>

<style scoped>
.start_menu h1 {
  font-size: 2.5rem;
  width: 300px;
  position: absolute;
  align-self: center;
  top: 25%;
}
.start_menu {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
}
.selection {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
button {
  width: 200px;
  font-size: 1.3rem;
  text-align: start;
  color: rgb(97, 97, 255);
  background-color: #00000000;
}
button:hover {
  transition: 0.2s ease-in-out;
  font-size: 2rem;
}
</style>
