import React from 'react';
import { Row, Col } from 'antd';

const items = [
    {
      key: '1',
      icon: <i className="fas fa-chart-pie"></i>,
      title: 'Reviews',
      content: 'I have no cons with this film that I can think of. The Avengers is one of the best comic book films I have ever seen! It is by far one of the best things.',
    },
    {
      key: '2',
      icon: <i className="fas fa-desktop"></i>,
      title: 'Video Games',
      content: 'Marvels Avengers is a 2020 action role-playing brawler video game developed by Crystal Dynamics and published by Square Enixs European subsidiary.',
    },
    {
      key: '3',
      icon: <i className="fas fa-database"></i>,
      title: 'Movie Collection',
      content: 'Avengers: Endgame has surpassed Avatar’s record as the highest-grossing movie of all time. Number of Movies: 4 & Revenue: $7,768,259,410 ',
    },
  ]

function AppAbout() {
    return(
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us</h2>
                    <p>THE AVENGERS</p>
                    </div>
                    <div className="contentHolder">
                    <p>American comic strip superhero team whose frequently changing roster often included some of the most popular characters in the Marvel Comics universe. Billed as “Earth's mightiest super-heroes,” the team was created by writer Stan Lee and artist Jack Kirby, and it debuted in The Avengers no.</p>
                </div>
                <Row gutter={[16, 16]}>
                {items.map(item => {
                    return(
                        <Col md={{ span: 8 }} key={item.key}>
                        <div className="content">
                            <div className="icon">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    </Col>
                    );
                })}  
                    </Row>
            </div>
        </div>
    );
}

export default AppAbout;