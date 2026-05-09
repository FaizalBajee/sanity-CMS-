# Sanity CMS Integration with React Website

## 1. Introduction

Sanity is a headless CMS used to manage content separately from your frontend application.

You can use Sanity to manage:

- Products
- Blogs
- Categories
- Homepage banners
- FAQs
- SEO content
- Dynamic pages

Your React application fetches content from Sanity using APIs.

---

## 2. Architecture Flow

```text
Sanity Studio (Admin Panel)
        ↓
Content stored in Sanity Cloud
        ↓
React frontend fetches content
        ↓
Display data on website UI


3\. Create a Sanity Account
===========================

Open:

[Sanity Official Website](https://www.sanity.io/?utm_source=chatgpt.com)

Create an account and create a new project.

4\. Install Sanity CLI
======================

Run inside terminal:

`   npm create sanity@latest   `

It will ask:

*   Project name
    
*   Dataset name
    
*   Template selection
    

Choose:

`   Clean project with no predefined schemas   `

5\. Start Sanity Studio
=======================

Move into project folder:

`   cd your-sanity-project   `

Install dependencies:

`   npm install   `

Start studio:

`   npm run dev   `

Studio usually opens at:

`   http://localhost:3333   `

This becomes your admin panel.

6\. Create Product Schema
=========================

Inside:

`   schemaTypes/   `

Create file:

`   product.js   `

Add:

`   export default {
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
}  `

7\. Register Schema
===================

Inside:

`   schemaTypes/index.js   `

Add:


`   import product from './product'  export const schemaTypes = [product]   `

8\. Add Content
===============

Open studio:

`   http://localhost:3333   `

You can now:

*   Create products
    
*   Upload images
    
*   Edit content
    
*   Publish data
    

9\. Connect Sanity with React
=============================

Install client package:

`   npm install @sanity/client   `

Create:

`   sanity.js   `

Add:

` // sanity.js

import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'wwm5f23r',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true
})  `

Get projectId from:

`   sanity.config.js   `

10\. Fetch Data in React
========================

Example:

``import { useEffect, useState } from 'react'
import { client } from '../sanity'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "product"]`)
      .then((data) => {
        console.log({ data })
        setProducts(data)})
  }, [])

  return (
    <div>
      {products.map((item) => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default App   ``

11\. Display Images
===================

Install image URL helper:

`   npm install @sanity/image-url   `

Create helper:

`   import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}  `

Usage:

`   ![{item.name}]({urlFor(item.image).url()})   `

12\. Recommended Ecommerce Collections
======================================

Typical ecommerce structure:

*   Products
    
*   Categories
    
*   Brands
    
*   Orders
    
*   Coupons
    
*   Banners
    
*   Blogs
    
*   Testimonials
    

13\. Why Developers Use Sanity
==============================

Advantages:

*   Fast performance
    
*   Real-time updates
    
*   Flexible schema system
    
*   Cloud hosted
    
*   Easy admin panel
    
*   Great React/Next.js integration
    
*   Optimized image delivery
    

14\. MERN + Sanity Architecture
===============================

Common production architecture:

`   React     → Frontend UI
Node.js   → APIs / Payments / Authentication
MongoDB   → Users / Orders / Transactions
Sanity    → CMS Content Management   `

15\. Important Notes
====================

Sanity should mainly be used for content management.

Do NOT store:

*   Payment secrets
    
*   JWT secrets
    
*   Authentication logic
    
*   Sensitive backend credentials
    

These should remain in your backend server.

16\. Typical Use Cases
======================

Sanity is commonly used for:

*   Ecommerce websites
    
*   Portfolio websites
    
*   Blogs
    
*   Company websites
    
*   Landing pages
    
*   News portals
    
*   Dynamic content management systems
    