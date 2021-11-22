import ProductList from './ProductList.vue'
import { products } from '../../cypress/component/fixtures/index.mjs'

describe('<ProductList />', () => {
  it('renders some cards', () => {
    cy.viewport(1280, 1280)
    cy.intercept('http://localhost:4000/products', {
      delay: 1000,
      body: products,
    })
    cy.mount(() => (
      <div class="p-12 resize overflow-auto max-w-1280 min-w-960px h-900px">
        <ProductList products={products.slice(0, 15)} />
      </div>
    ))
  })
})
