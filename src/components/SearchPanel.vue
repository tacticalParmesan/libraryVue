<script setup>
import { requestBook } from "@/api";
import { debounce } from "lodash";
import { ref } from "vue";

const searchValue = ref("");

// eslint-disable-next-line no-unused-vars
let bookData = ref([]);

const makeDebouncedRequest = debounce(async () => {
  if (!searchValue.value) {
    bookData.value = []
    return
  }
  const data = await requestBook(searchValue.value);
  bookData.value = data;
}, 250);

function makeRequest() {
  makeDebouncedRequest();
}
</script>

<template>
  <div class="search-panel">
    <input
      @input="makeRequest"
      v-model="searchValue"
      class="searchbar"
      type="search"
      placeholder="Search for a book..."
    />
    <button @click="makeRequest" class="search-button">
      <span class="material-symbols-outlined"> search </span>
    </button>
  </div>
  <ul v-if="searchValue.length && bookData.length" class="results-dropdown">
    <li v-for="(book, index) in bookData" :key="index">{{ book.title }}</li>
  </ul>
  <p v-else-if="searchValue.length && !bookData.length">Loading...</p>
</template>

<style>
.search-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
}

input.searchbar {
  padding: 0.25rem;
  width: 320px;
}

button.search-button {
  display: flex;
  align-items: center;

  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
}
</style>
