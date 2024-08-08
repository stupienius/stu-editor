<script setup>
import { ref } from "vue";

const filePath = ref("");
const fileInput = ref(null);

const selectFile = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const handleFileChange = (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    console.log(files);
    filePath.value = files[0].path || "select a file to start";
  }
};
</script>

<template>
  <div>
    <button @click="selectFile">Select File</button>
    <input
      type="file"
      ref="fileInput"
      @change="handleFileChange"
      style="display: none"
    />
    <p v-if="filePath">Selected File: {{ filePath }}</p>
  </div>
</template>
