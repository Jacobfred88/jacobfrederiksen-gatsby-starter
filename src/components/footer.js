import React from "react"

const Footer = ({ siteTitle }) => (
    <footer className="p-8 flex justify-between text-xs">
        <p>{siteTitle}</p>
        <p>© {new Date().getFullYear()}</p>
    </footer>
)

export default Footer
