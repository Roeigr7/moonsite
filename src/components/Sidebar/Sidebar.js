import React, { useState } from 'react';
import { Col, Collapse, Row } from 'react-bootstrap';
import { Drawer } from 'react-bootstrap-drawer';

import { NavLink } from '../../styledComponents/StyledNavLink';
import 'react-bootstrap-drawer/lib/style.css';
import './Sidebar.scss';
const ApplicationDrawer = (props) => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer className='side-nav-container' {...props}>
      <Drawer.Toggle className='hamburger' onClick={handleToggle} />

      <Collapse in={!open}>
        <Drawer.Overflow>
          <Drawer.ToC className='side-nav-container'>
            <div className='header-title'>
              <NavLink
                onClick={handleToggle}
                activeClassName='header-active'
                className='header'
                to='/'
              >
                DRESS ME
              </NavLink>
            </div>
            <NavLink onClick={handleToggle} className='side-nav-item' to='/'>
              Home
            </NavLink>
            <NavLink
              onClick={handleToggle}
              className='side-nav-item'
              to='/shirt'
            >
              Shirt
            </NavLink>
            <NavLink
              onClick={handleToggle}
              className='side-nav-item'
              to='/pants'
            >
              Pants
            </NavLink>
            <NavLink
              onClick={handleToggle}
              className='side-nav-item'
              to='/shoes'
            >
              Shoes
            </NavLink>
          </Drawer.ToC>
        </Drawer.Overflow>
      </Collapse>
    </Drawer>
  );
};

const Application = (props) => {
  return (
    <div className='bg-image'>
      <Row className='page-container p-0 m-0'>
        <Col className='sidebar-container' xs={12} md={3} xl={2}>
          <ApplicationDrawer />
        </Col>
        <Col xs={12} md={9} xl={10}>
          {props.children}
        </Col>
      </Row>
    </div>
  );
};

export default Application;
