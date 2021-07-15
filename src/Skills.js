import React from 'react';
import { Card, CardTitle, CardImg, CardSubtitle } from 'reactstrap';

function Skills(props) {
    return(
        <div className="container">
            <h1 class="regularh1">Skills</h1>
            <div className="card-container">
                <Card className="skill-card col-4 col-sm-4 col-md-3" >
                    <CardImg className="card-img" src="/images/icon_c.png" alt="C language"/>
                    <CardTitle className="card-title">C</CardTitle>
                    <CardSubtitle className="card-sub">Advanced</CardSubtitle>
                </Card>
                <Card className="skill-card col-4 col-sm-4 col-md-3" >
                    <CardImg className="card-img" src="/images/icon_c++.png" alt="C++ language" />
                    <CardTitle className="card-title">C++</CardTitle>
                    <CardSubtitle className="card-sub">Advanced</CardSubtitle>
                </Card>
                <Card className="skill-card col-4 col-sm-4 col-md-3" >
                    <CardImg className="card-img" src="/images/icon_java.png" alt="Java language" />
                    <CardTitle className="card-title">Java</CardTitle>
                    <CardSubtitle  className="card-sub">Intermediate</CardSubtitle>
                </Card>
                <Card className="skill-card col-4 col-sm-4 col-md-3" >
                    <CardImg className="card-img" src="/images/icon_mysql.png" alt="Mysql" />
                    <CardTitle className="card-title">MySql</CardTitle>
                    <CardSubtitle className="card-sub">Advanced</CardSubtitle>
                </Card>
                <Card className="skill-card col-4 col-sm-4 col-md-3" >
                    <CardImg className="card-img" src="/images/icon_data_structures.png" alt="Data Structures and Algorithms" />
                    <CardTitle className="card-title">Data Structures & Algorithms</CardTitle>
                    <CardSubtitle className="card-sub">Intermediate</CardSubtitle>
                </Card>
                <Card className="skill-card col-4 col-sm-4 col-md-3" >
                    <CardImg className="card-img" src="/images/icon_react.png" alt="React Js" />
                    <CardTitle className="card-title">React Js</CardTitle>
                    <CardSubtitle className="card-sub">Intermediate</CardSubtitle>
                </Card>
                <Card className="skill-card col-4 col-sm-4 col-md-3" >
                    <CardImg className="card-img" src="/images/icon_html.png" alt="HTML" />
                    <CardTitle className="card-title">HTML</CardTitle>
                    <CardSubtitle className="card-sub">Intermediate</CardSubtitle>
                </Card>
                <Card className="skill-card col-4 col-sm-4 col-md-3" >
                    <CardImg className="card-img" src="/images/icon_css.png" alt="CSS" />
                    <CardTitle className="card-title">CSS</CardTitle>
                    <CardSubtitle className="card-sub">Intermediate</CardSubtitle>
                </Card>
            </div>
        </div>
    )
}

export default Skills;