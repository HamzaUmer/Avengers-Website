import React from 'react';
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
    return(
        <div id="pricing" className= "pricingBlock bgPurple">
            <div className= "container-fluid">
                <div className= "titleHolder">
                <h2>Pricing of Costumes</h2>
                <p>We have three types of Pricing plans of Costumes, Gadgets and Props.</p>
                </div>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                      }}
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <Card title={item.title}>
                        <p className="large">{item.content[0].price}</p>
                        <p>{item.content[0].stuff}</p>
                        <p>{item.content[0].quantity}</p>
                        <p>{item.content[0].support}</p>
                        <p>{item.content[0].sizes}</p>
                        <p>{item.content[0].delivery}</p>
                        <Button style={{ background: "#5a1891", borderColor:"#4c107c"}} size="large"><i className="fab fa-telegram-plane"></i> Buy It</Button>
                    </Card>
                </List.Item>
                )}
            />,
            </div>
        </div>
    );
}

export default AppPricing;