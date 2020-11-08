import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
 
const MyComponent = (props) => {
  const [showNav, setShowNav] = useState();
  return (
    <div>
      <MenuIcon onClick={() => setShowNav(true)} />{' '}
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        items={['home', 'about', 'contact']}
        title='Menu'
        titleStyle={{ backgroundColor: '#8e9aaf', marginLeft: '0'}}
        itemStyle={{ backgroundColor: '#fff', listStyle: 'none' }}
        itemHoverStyle={{ backgroundColor: '#cbc0d3' }}
      />
    </div>
  );
};

export default MyComponent;