// product.js

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}