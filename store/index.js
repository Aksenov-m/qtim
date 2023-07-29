import { defineStore } from 'pinia'

const url = "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/"

export const useArticleStore = defineStore('useStore', {
  state: () => ({ 
    articles: []
   }),
   actions: {
    async getArticles(){
      const res = await fetch(url)
      const data = await res.json()
      this.articles = data
      console.log(data)
    }
   }
})