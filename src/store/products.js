import { defineStore } from 'pinia'
import { create as createAxios } from 'axios'

const axios = createAxios({
  baseURL: 'http://localhost:4000',
})

export const useProductsStore = defineStore({
  id: 'products',
  state: () => {
    return {
      products: [],
    }
  },
  actions: {
    async fetchProducts() {
      return axios.get('/products').then((response) => {
        this.products = response.data
      })
    },
  },
})
