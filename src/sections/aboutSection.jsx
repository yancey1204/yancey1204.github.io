"use strict";

var React = require('react');

class AboutSection extends React.Component {
    render() {
        return (
            <section id="about" className="three">
                <div className="container">

                    <header>
                        <h2>About Me</h2>
                    </header>

                    <a href="#" className="image featured"><img src="images/me.jpg" alt=""/></a>

                    <p>
                        I am a front-end developer who is working at <a href="http://www.ziroom.com/zhaopin/about.html" target="_blank" >Ziroom</a>, Beijing
                        I followed the software engineer course in Fontys, the Netherland for one year, and learnt the knowledge about web all by myself.
                        I have development experiences in ASP.NET MVC, Web API, and a little about PHP. I'm also interested in the front-end technology,
                        and I've already used reactJS, webpack, SASS, npm during my work.
                    </p>
                    <p>
                        Let's have fun hacking.
                    </p>

                </div>
            </section>
        )
    }
}

module.exports = AboutSection;
