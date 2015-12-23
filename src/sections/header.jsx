"use strict";

var React = require('react');

class Header extends React.Component {
    render() {
        var isRootPage = this.props.isRootPage;
        var urlPrefix = isRootPage ? "" : "../";
        var active = isRootPage ? "" : " active";

        return (
            <div id="header">

                <div className="top">

                    <div id="logo">
                        <span className="image avatar48"><img src={urlPrefix + "images/favicon.ico"} alt=""/></span>
                        <h1 id="title">Yan Zhihui</h1>
                        <p>Front-End Developer</p>
                    </div>

                    <nav id="nav">
                        <ul>
                            <li><a href={urlPrefix + '#top'} id="top-link" className="skel-layers-ignoreHref"><span
                                className="icon fa-home">Intro</span></a></li>
                            <li><a href={urlPrefix + '#blogs'} id="blogs-link" className={"skel-layers-ignoreHref" + active}><span
                                className="icon fa-th">Blogs</span></a></li>
                            <li><a href={urlPrefix + '#about'} id="about-link" className="skel-layers-ignoreHref"><span
                                className="icon fa-user">About Me</span></a></li>
                            <li><a href={urlPrefix + '#contact'} id="contact-link" className="skel-layers-ignoreHref"><span
                                className="icon fa-envelope">Contact</span></a></li>
                        </ul>
                    </nav>

                </div>

                <div className="bottom">

                    <ul className="icons">
                        <li><a href="http://www.linkedin.com/profile/view?id=AAMAABbxFlIB8ynGYzv-33VJpCXmhwFMP6JheJU&trk=hp-identity-name"  target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="https://github.com/yancey1204" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="http://weibo.com/2831539772/profile?topnav=1&wvr=6&is_all=1"  target="_blank" className="icon fa-weibo"><span className="label">Dribbble</span></a></li>
                    </ul>

                </div>

            </div>
        )
    }
}

module.exports = Header;
