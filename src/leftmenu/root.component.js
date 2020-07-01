import React from 'react'
import {navigateToUrl} from 'single-spa'

import 'rsuite/lib/styles/index.less'; 


const LeftMenu = () => (
  <Sidenav
  expanded={expanded}
  defaultOpenKeys={['3', '4']}
  activeKey={this.state.activeKey}
  onSelect={this.handleSelect}
>
  <Sidenav.Body>
    <Nav>
      <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
        Request
      </Nav.Item>
      <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
        Loan
      </Nav.Item>
      <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
        Financial
      </Nav.Item>
     
     
    </Nav>
  </Sidenav.Body>
</Sidenav>
)
export default LeftMenu