import { defineStore, skipHydrate } from "pinia";
import { useLocalStorage } from '@vueuse/core'

const url = "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/";
const articleOnPages = 8;
// const articleOnLocalStorage = localStorage.getItem("articles")
// const articleOnLocalStorage = localStorage.getItem("articles")

export const useArticleStore = defineStore("useStore", {
  state: () => ({
    articles: [],
    page: 1,
  }),
  actions: {
    async getArticles() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        this.articles = data;
        localStorage.setItem("articles", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching articles from API:", error);
      }
    },
    setPage(item) {
      this.page = item;
    },
    clickArticle(id) {
      this.articles = this.articles.find((item) => item.id == id);
    },
  },
  getters: {
    totalCounPage() {
      return Math.ceil(this.articles.length / articleOnPages);
    },
    articlePage() {
      const start = (this.page - 1) * articleOnPages;
      const end = start + articleOnPages;
      return this.articles.slice(start, end);
    },
  },
});
