import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>About the blog info</p>
            <p>Need a developer?<Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}

export default About