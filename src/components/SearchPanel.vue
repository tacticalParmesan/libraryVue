<script setup></script>

<template>
  <div class="search-panel">
    <input class="searchbar" type="search" placeholder="Search for a book..." />
    <button class="search-button">
      <span class="material-symbols-outlined"> search </span>
    </button>
  </div>
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
    padding: .25rem;
    width: 320px;
}

button.search-button {
    display: flex;
    align-items: center;

    border: none;
    background-color: rgba(0, 0, 0, 0);
}


</style>
