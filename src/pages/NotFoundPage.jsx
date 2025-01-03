import React from 'react'
import { Helmet } from 'react-helmet'
function NotFoundPage() {
  return (
    <section>
        <Helmet><title>Page doesn't exist</title></Helmet>
        <span>Page doesn't exist</span>
    </section>
  )
}

export default NotFoundPage