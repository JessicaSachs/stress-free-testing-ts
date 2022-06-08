import {faker} from '@faker-js/faker'

export const products = Array.from(Array(120).keys()).map(() => {
  const productName = faker.commerce.productName()
  const bids = faker.datatype.number({ min: 1, max: 2000 })
  const watchers = faker.datatype.number({ min: 128, max: 6400 })

  return {
    id: faker.datatype.uuid(),
    img: {
      src:
        'https://loremflickr.com/240/240/food,coffee?lock=' +
        faker.datatype.number({ min: 0, max: 10000 }),
      alt: productName,
    },
    description: faker.fake(`${productName} with {{company.catchPhrase}}`),
    additional: `${bids} bids, ${watchers} watchers`,
    rating: faker.datatype.float({ min: 2, max: 5, precision: 0.01 }),
    price: faker.finance.amount(42, 256, 2, '$'),
  }
})
