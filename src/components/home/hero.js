import React from 'react';
import { Carousel, Button } from 'antd';

const items = [
    {
      key: '1',
      title: 'CAPTAIN AMERICA',
      content: '"You know the last time i was in Germany and saw a man standing above everyone else we ended up disagreeing."',
    },
    {
      key: '2',
      title: 'IRON MAN',
      content: '"Shakespare in the Park? Doth mother know you wearth her drapes."',
    },
    {
      key: '3',
      title: 'LOKI',
      content: '"I am Loki of Asgard and I am burdened with glorius purpose."',
    },
    {
      key: '4',
      title: 'THOR',
      content: '"LOKI is beyond reason but he is of Asgard and he is my brother."',
    },
    {
      key: '5',
      title: 'THE HULK',
      content: '"That guys brain is a bag full of cats you can smell crazy on him."',
    },
    {
      key: '6',
      title: 'BLACK WIDOW',
      content: '"Regimes fall every day tend not to weep over that, I am Russian."',
    },
    {
      key: '7',
      title: 'HAWK EYE',
      content: '"I will need a distraction. And an eyeball."',
    },
    {
      key: '8',
      title: 'WANDA MAXIMOFF',
      content: '"I can not control their fear only my own."',
    },
    {
      key: '9',
      title: 'VISION',
      content: '"Our very strength invites challenge. Challenge incites conflict. And conflict breeds catastophe."',
    },
    {
      key: '10',
      title: 'BLACK PANTHER',
      content: '"In times of Crisis, the wise build bridges while the foolish build barriers."',
    },
    {
      key: '11',
      title: 'DOCTOR STRANGE',
      content: '"Try Me, Beyonce."',
    },
    {
      key: '12',
      title: 'SPIDERMAN',
      content: '"With great power comes great responsibility."',
    },
  ]
function AppHero() {
    return(
        <div id="hero" className="heroBlock">
             <Carousel autoplay>
                 {items.map(item => {
                     return(
                         <div  className="container-fluid" key={item.key}>
                             <div className="content">

                                 <h3>{item.title}</h3>
                                <p>{item.content}</p> 
                                <div className="btnHolder">
                                <Button className="exp" size="large">Explore More</Button>
                                <Button size="large"><i className="fas fa-desktop"></i>Watch Heros</Button>
                                </div>
                             </div>
                         </div>
                     );
                 })}
        </Carousel>
        </div>
    );
}

export default AppHero;