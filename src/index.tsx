import React from "react";
import ReactDOM from "react-dom";


import "./style/index.scss";
import md from "./blogs/2021-05-15-dynamic-programming-with-fibonacci-sequence.md";
import { Blog } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";
import { Helmet } from "react-helmet";

function JsonLDBlog() {
    return helmetJsonLdProp<Blog>({
        "@context": "https://schema.org",
        "@type": "Blog",
        "image": "http://example.com/images/image.jpg",
        "url": "http://yancey1204.github.io/",
        "headline": "My love of cats explained",
        "alternativeHeadline": "An indepth article on why I love cats",
        "dateCreated": "2019-02-11T11:11:11",
        "datePublished": "2019-02-11T11:11:11",
        "dateModified": "2019-02-11T11:11:11",
        "inLanguage": "en-US",
        "isFamilyFriendly": true,
        "copyrightYear": 2021,
        "copyrightHolder": "",
        "contentLocation": {
            "@type": "Place",
            "name": "Delray Beach, FL"
        },
        "accountablePerson": {
            "@type": "Person",
            "name": "Patrick Coombe",
            "url": "https://patrickcoombe.com"
        },
        "author": {
            "@type": "Person",
            "name": "Patrick Coombe",
            "url": "https://patrickcoombe.com"
        },
        "creator": {
            "@type": "Person",
            "name": "Patrick Coombe",
            "url": "https://patrickcoombe.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Patrick Coombe",
            "url": "https://patrickcoombe.com",
            "logo": {
                "@type": "ImageObject",
                "url": "http://www.example.com/logo.png",
                "width": "400",
                "height": "55"
            }
        },
        "sponsor": {
            "@type": "Organization",
            "name": "Acme Widgets",
            "url": "https://example.com",
            "logo": {
                "@type": "ImageObject",
                "url": "http://www.example.com/logo.png"
            }
        },
        "mainEntityOfPage": "True",
        "keywords": [
            "keyword1",
            "keyword2",
            "keyword3",
            "keyword4"
        ],
        "genre": ["SEO", "JSON-LD"]
    })
}


console.log(md)

ReactDOM.render(
    <React.StrictMode>
        <Helmet
            script={[
                JsonLDBlog()
            ]}
        >
            <title>test blog</title>
        </Helmet>
        <div dangerouslySetInnerHTML={{ __html: md }}></div>
    </React.StrictMode >,
    document.getElementById("root"),
);
