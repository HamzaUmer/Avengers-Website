import React from 'react';

import image1 from '../../assets/images/capt-america.jpg';
import image2 from '../../assets/images/iron-man.jpg';
import image3 from '../../assets/images/nick.jpg';
import image4 from '../../assets/images/thor.jpg';
import image5 from '../../assets/images/lok.jpg';
import image6 from '../../assets/images/doctor.jpg';
import image7 from '../../assets/images/hulk.jpg';
import image8 from '../../assets/images/widow.jpg';
import image9 from '../../assets/images/hawk.jpg';
import image10 from '../../assets/images/wanda.jpg';
import image11 from '../../assets/images/vision.jpg';
import image12 from '../../assets/images/black.jpg';
import image13 from '../../assets/images/spider.jpg';
import image14 from '../../assets/images/ant.jpg';
import image15 from '../../assets/images/capt-mar.jpg';
import image16 from '../../assets/images/falcon.jpg';
import image17 from '../../assets/images/winter.jpg';
import image18 from '../../assets/images/war.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
    return(
        <div id="feature" className="featureBlock bgPurple">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Characters</h2>
                    <p>Features Characters of Marvel Avengers</p>
                </div>
            <Row gutter={[16, 16]}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Captain" src={image1} height = "190px"  />}
                >
                    <Meta title="Captain America"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Iron Man" src={image2}  height="190px" />}
                >
                    <Meta title="Iron Man"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Nick" src={image3} height="190px" />}
                >
                    <Meta title="Nick Fury"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Thor" src={image4} height="190px"/>}
                >
                    <Meta title="Thor"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="LOKI" src={image5} height="190px"/>}
                >
                    <Meta title="LOKI"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Doctor" src={image6} height="190px"/>}
                >
                    <Meta title="Doctor Strange"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Hulk" src={image7} height="190px"/>}
                >
                    <Meta title="The Hulk"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="widow" src={image8} height="190px"/>}
                >
                    <Meta title="Black Widow"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Hawk" src={image9} height="190px"/>}
                >
                    <Meta title="Hawkeye"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Wanda" src={image10} height="190px"/>}
                >
                    <Meta title="Wanda Maximoff"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Vision" src={image11} height="190px"/>}
                >
                    <Meta title="Vision"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Black" src={image12} height="190px"/>}
                >
                    <Meta title="Black Panther"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Spider" src={image13} height="190px"/>}
                >
                    <Meta title="SpiderMan"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Ant" src={image14} height="190px"/>}
                >
                    <Meta title="Ant Man"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Captain Marvel" src={image15} height="190px"/>}
                >
                    <Meta title="Captain Marvel"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Falcon" src={image16} height="190px"/>}
                >
                    <Meta title="Falcon"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="Winter" src={image17} height="190px"/>}
                >
                    <Meta title="Winter Soldier"/>
                </Card>,
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                    hoverable
                    cover={<img alt="War" src={image18} height="190px"/>}
                >
                    <Meta title="War Machine"/>
                </Card>,
                </Col>
                </Row>
            </div>
        </div>
    );
}

export default AppFeature;