import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import * as Icon from 'react-bootstrap-icons';
import 'react-pro-sidebar/dist/css/styles.css';

function App() {
  return (
    <div className="App">
      <div className="TopNav">
        <div className="LeftNav">
          
        </div>
        <div className="RightNav">
          <button className="ConnectBtn">connect wallet</button>
        </div>
      </div>
      <ProSidebar>
        <Menu iconShape="circle" className="MainSidebar">
          <MenuItem className="SidebarButton" icon={<Icon.Book />} icon-background-color="blue">Book</MenuItem>
          <SubMenu className="SidebarButton" title="Team" icon={<Icon.PeopleFill />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <MenuItem className="SidebarButton" icon={<Icon.Check />}>Vote</MenuItem>
          <MenuItem className="SidebarButton" icon={<Icon.CurrencyDollar />}>Buy</MenuItem>  
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default App;
