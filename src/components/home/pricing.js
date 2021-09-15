import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { List, Card } from 'antd';
import { Button } from 'antd';

const data = [
    {
      title: 'Basic',
      content: [
        {
          price: '£29.99',
          stuff: 'Costume of any Super Hero',
          quantity: 'only 1',
          support: '24/7 you can order',
          sizes: 'Small, Medium, Large and Extra Large',
          delivery: 'Delivery anywhere'
        }
      ]
    },
    {
      title: 'Premium',
      content: [
        {
            price: '£59.99',
            stuff: 'Costume of any Super Hero & Props',
            quantity: '1 Costume with props',
            support: '24/7 you can order',
            sizes: 'Small, Medium, Large and Extra Large',
            delivery: 'Delivery anywhere'
        }
      ]
    },
    {
      title: 'Enterprise',
      content: [
        {
            price: '£129.99',
            stuff: 'Costume of any Super Hero, Gadgets & Props',
            quantity: '1 Costume with gadgets and Props',
            support: '24/7 you can order',
            sizes: 'Small, Medium, Large and Extra Large',
            delivery: 'Delivery anywhere'
        }
      ]
    }
  ];

function AppPricing() {
  useEffect(() => {
    Aos.init({ duration:2000 });
 }, [])
    return(
        <div id="pricing" className= "pricingBlock bgPurple">
            <div className= "container-fluid">
                <div className= "titleHolder">
                <h2 data-aos="fade-up">Pricing of Costumes</h2>
                <p data-aos="fade-up">We have three types of Pricing plans of Costumes, Gadgets and Props.</p>
                </div>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 3,
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                      }}
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <Card data-aos="zoom-in" title={item.title}>
                        <p data-aos="zoom-in" className="large">{item.content[0].price}</p>
                        <p data-aos="zoom-in">{item.content[0].stuff}</p>
                        <p data-aos="zoom-in">{item.content[0].quantity}</p>
                        <p data-aos="zoom-in">{item.content[0].support}</p>
                        <p data-aos="zoom-in">{item.content[0].sizes}</p>
                        <p data-aos="zoom-in">{item.content[0].delivery}</p>
                        <div className="btnHolder">
                        <Button data-aos="zoom-in" className="exp1" size="large"><i className="fab fa-telegram-plane"></i> Buy It</Button>
                        </div>
                    </Card>
                </List.Item>
                )}
            />,
            </div>
        </div>
    );
}

export default AppPricing;