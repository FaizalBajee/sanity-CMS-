\# Sanity CMS Integration with React Website

\## 1. Introduction

Sanity is a headless CMS used to manage content separately from your frontend application.

You can use Sanity to manage:

\* Products

\* Blogs

\* Categories

\* Homepage banners

\* FAQs

\* SEO content

\* Dynamic pages

Your React application fetches content from Sanity using APIs.

\---

\## 2. Architecture Flow

\`\`\`text

Sanity Studio (Admin Panel)

↓

Content stored in Sanity Cloud

↓

React frontend fetches content

↓

Display data on website UI

\`\`\`

\---

\# 3. Create a Sanity Account

Open:

\[Sanity Official Website\](https://www.sanity.io?utm\_source=chatgpt.com)

Create an account and create a new project.

\---

\# 4. Install Sanity CLI

Run inside terminal:

\`\`\`bash

npm create sanity@latest

\`\`\`

It will ask:

\* Project name

\* Dataset name

\* Template selection

Choose:

\`\`\`text

Clean project with no predefined schemas

\`\`\`

\---

\# 5. Start Sanity Studio

Move into project folder:

\`\`\`bash

cd your-sanity-project

\`\`\`

Install dependencies:

\`\`\`bash

npm install

\`\`\`

Start studio:

\`\`\`bash

npm run dev

\`\`\`

Studio usually opens at:

\`\`\`text

http://localhost:3333

\`\`\`

This becomes your admin panel.

\---

\# 6. Create Product Schema

Inside:

\`\`\`text

schemaTypes/

\`\`\`

Create file:

\`\`\`text

product.js

\`\`\`

Add:

\`\`\`js

export default {

name: 'product',

title: 'Product',

type: 'document',

fields: \[

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

\]

}

\`\`\`

\---

\# 7. Register Schema

Inside:

\`\`\`text

schemaTypes/index.js

\`\`\`

Add:

\`\`\`js

import product from './product'

export const schemaTypes = \[product\]

\`\`\`

\---

\# 8. Add Content

Open studio:

\`\`\`text

http://localhost:3333

\`\`\`

You can now:

\* Create products

\* Upload images

\* Edit content

\* Publish data

\---

\# 9. Connect Sanity with React

Install client package:

\`\`\`bash

npm install @sanity/client

\`\`\`

Create:

\`\`\`text

sanity.js

\`\`\`

Add:

\`\`\`js

import { createClient } from '@sanity/client'

export const client = createClient({

projectId: 'your\_project\_id',

dataset: 'production',

apiVersion: '2025-01-01',

useCdn: true

})

\`\`\`

Get \`projectId\` from:

\`\`\`text

sanity.config.js

\`\`\`

\---

\# 10. Fetch Data in React

Example:

\`\`\`jsx

import { useEffect, useState } from 'react'

import { client } from './sanity'

function App() {

const \[products, setProducts\] = useState(\[\])

useEffect(() => {

client

.fetch(\`\*\[\_type == "product"\]\`)

.then((data) => setProducts(data))

}, \[\])

return (

{products.map((item) => (

{item.name}
-----------

₹{item.price}

))}

)

}

export default App

\`\`\`

\---

\# 11. Display Images

Install image URL helper:

\`\`\`bash

npm install @sanity/image-url

\`\`\`

Create helper:

\`\`\`js

import imageUrlBuilder from '@sanity/image-url'

import { client } from './sanity'

const builder = imageUrlBuilder(client)

export function urlFor(source) {

return builder.image(source)

}

\`\`\`

Usage:

\`\`\`jsx

![]({urlFor(item.image).url()})

\`\`\`

\---

\# 12. Recommended Ecommerce Collections

Typical ecommerce structure:

\* Products

\* Categories

\* Brands

\* Orders

\* Coupons

\* Banners

\* Blogs

\* Testimonials

\---

\# 13. Why Developers Use Sanity

Advantages:

\* Fast performance

\* Real-time updates

\* Flexible schema system

\* Cloud hosted

\* Easy admin panel

\* Great React/Next.js integration

\* Optimized image delivery

\---

\# 14. MERN + Sanity Architecture

Common production architecture:

\`\`\`text

React → Frontend UI

Node.js → APIs / Payments / Authentication

MongoDB → Users / Orders / Transactions

Sanity → CMS Content Management

\`\`\`

\---

\# 15. Important Notes

Sanity should mainly be used for content management.

Do NOT store:

\* Payment secrets

\* JWT secrets

\* Authentication logic

\* Sensitive backend credentials

These should remain in your backend server.

\---

\# 16. Typical Use Cases

Sanity is commonly used for:

\* Ecommerce websites

\* Portfolio websites

\* Blogs

\* Company websites

\* Landing pages

\* News portals

\* Dynamic content management systems