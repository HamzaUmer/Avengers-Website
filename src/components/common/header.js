import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import logo from '../../assets/images/logo.png';
import { Anchor } from 'antd';

const { Link } = Anchor;
function AppHeader() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };
    return(
        <div className="container-fluid">
            <div className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
                <a href="#hero">AVENGERS</a>
            </div>
            <div className="mobileHidden">
            <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Characters" />
            <Link href="#works" title="Trailer" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
        </Anchor>
            </div>
            <div className="mobileVisible">
            <Button style={{ background: "#5a1891", borderColor:"#4c107c"}} onClick={showDrawer}>
            <i className="fas fa-bars"></i>
            </Button>
            <Drawer  placement="right" onClose={onClose} visible={visible}>
            <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Characters" />
            <Link href="#works" title="Trailer" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
        </Anchor>
            </Drawer>
            </div>
            </div>
        </div>
    );
}

export default AppHeader;