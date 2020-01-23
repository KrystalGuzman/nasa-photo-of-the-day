// import React from 'react';
// import {
//   Navbar,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
// } from 'reactstrap';

// const TopNav = (props) => {
//   return (
//     <div>
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">NASA - Photo of The Day</NavbarBrand>
//           <Nav className="auto" navbar>
//             <NavItem>
//               <NavLink href="/">Home</NavLink>
//             </NavItem>
//           </Nav>
//       </Navbar>
//     </div>
//   );
// }

// export default TopNav;

import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        NASA - Photo of the Day
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem href="/" onClick={handleClose}>Home</MenuItem>
        <MenuItem href="/" onClick={handleClose}>About</MenuItem>
      </Menu>
    </div>
  );
}