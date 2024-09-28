<script setup>
import { Library } from '@/store';

function getTotalBooks() {
  return Library.books.length;
}
function getTotalPages() {
  return Library.books.reduce((total, book) => total + book.pages, 0);
}

function getTotalReadBooks() {
  return Library.books.filter((book) => book.readStatus)
}

function getTotalReadPages() {
  return getTotalReadBooks().reduce((total, book) => total + book.pages, 0)
}

function getPercentageReadBooks() {
  return (getTotalReadBooks().length / getTotalBooks() * 100).toFixed(1);
}

function getPercentageReadPages() {
  return (getTotalReadPages() / getTotalPages() * 100).toFixed(1);

}

// const percReadBooks = totalReadBooks.length / totalBooks * 100;
// const percReadPages =  (totalReadPages / totalPages * 100).toFixed(1);
</script>

<template>
  <div class="stats-panel">
    <p>Total books: {{ getTotalBooks() }}</p>
    <p>Total Pages: {{ getTotalPages() }}</p>
    <p>% Read Books: {{ getPercentageReadBooks() }}</p>
    <p>% Read Pages: {{ getPercentageReadPages() }}</p>
  </div>
</template>

<style>
.stats-panel {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  gap: 0.5rem;
  margin: 0 0.5rem 1rem;
  padding: 0.5rem;
  background-color: var(--platinum);
}
</style>
