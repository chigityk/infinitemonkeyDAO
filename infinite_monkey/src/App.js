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
          // connect wallet button
        </div>
      </div>
      <ProSidebar>
        <Menu iconShape="circle">
          <MenuItem icon={<Icon.Book />}>Book</MenuItem>
          <SubMenu title="Team" icon={<Icon.Diamond />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <MenuItem icon={<Icon.Check />}>Vote</MenuItem>
          <MenuItem icon={<Icon.CurrencyDollar />}>Buy</MenuItem>  
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default App;
