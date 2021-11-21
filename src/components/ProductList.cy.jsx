import ProductList from './ProductList.vue'
import { mount } from '@cypress/vue'
import { products } from '../../cypress/component/fixtures'

describe('<ProductList />', () => {
  it('renders some cards', () => {
    cy.viewport(1280, 1280)
    mount(() => (
      <div class="p-12 resize overflow-auto max-w-1280 min-w-960px h-900px">
        <ProductList products={products.slice(0, 15)} />
      </div>
    ))
  })
})
