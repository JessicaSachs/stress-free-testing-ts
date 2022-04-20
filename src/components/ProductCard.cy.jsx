import ProductCard from './ProductCard.vue'

// A Vite-specific parameter to resolve the url of your image.
import TypewriterUrl from '../assets/typewriter.jpg?url'

const img = {
  alt: 'A vintage typewriter on a white background.',
  src: TypewriterUrl,
}

const description = `Vintage Typewriter to post awesome stories about UI design and webdev.`
const price = '$49.50'
const additional = 'Eligible for Shipping To Mars or somewhere else.'
const rating = 4.67
const id = 'unique-id'

describe('<ProductCard />', () => {
  beforeEach(() => {
    cy.mount(
      <ProductCard
        class="m-2"
        id={id}
        img={img}
        description={description}
        price={price}
        additional={additional}
        rating={rating}
      />,
    )
  })

  it('renders a description', () => {
    cy.findByText(description).should('be.visible')
  })

  it('renders the price', () => {
    cy.findByText(price).should('be.visible')
  })

  it('renders the image', () => {
    cy.findByAltText(img.alt)
      .should('be.visible')
      .and('have.attr', 'src', img.src)
  })

  it('renders the rating', () => {
    cy.findByText(rating).should('be.visible')
  })

  it('renders any additional text', () => {
    cy.findByText(additional).should('be.visible')
  })
})
