import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <p>This page was built using Gatsby.js. It pulls posts from Contentful, which gives a user friendly interface, and dynamically creates new pages for each post.</p>
            <p>These posts can be accessed from the blog page which you can find <Link to="/blog">here</Link>.</p>
        </Layout>
    )
}

export default About