import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Welcome</h1>
      <p>Here you'll find a dynamic blog page that creates new pages for posts created in Contentful.</p>
      <p>Find out more about how I created this page <Link to="/about">here</Link>.</p>
      <p>You can view my other work <a href="https://andybowerman.github.io/" target="_blank">here</a>.</p>
    </Layout>
  )
}

export default IndexPage