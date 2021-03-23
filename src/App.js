import './App.css';
import React from 'react';
import header from './components/header/header'
import logo from './assets/Logo.png'
import NavBar from './components/campaignNavBar/campaignNavBar';
import CampaignFrame from './components/Body/CampaignItem/CampaignFrame/CampaignFrame'


class App extends React.Component {
  state=
  {  
      "data": [{
          "name": "Test Whatsapp",
          "region": "US",
          "createdOn": 1559807714999,
          "price": "Price info of Test Whatsapp",
          "csv": "Some CSV link for Whatsapp",
          "report": "Some report link for Whatsapp",
          "image_url":"Some image url of the campaign" 
        },
        {
          "name": "Super Jewels Quest",
          "region": "CA, FR",
          "createdOn": 1559806715124,
          "price": "Price info of Super Jewels Quest",
          "csv": "Some CSV link for Super Jewels Quest",
          "report": "Some report link for Super Jewels Ques",
          "image_url":"Some image url of the campaign"
        },
        {
          "name": "Mole Slayer",
          "region": "FR",
          "createdOn": 1559806711124,
          "price": "Price info of Mole Slayer",
          "csv": "Some CSV link for Mole Slayer",
          "report": "Some report link for Mole Slayer",
          "image_url":"Some image url of the campaign"
        },
        {
          "name": "Mancala Mix",
          "region": "JP",
          "createdOn": 1559806680124,
          "price": "Price info of Mancala Mix",
          "csv": "Some CSV link for Mancala Mix",
          "report": "Some report link for Mancala Mix",
          "image_url":"Some image url of the campaign"
        }
      ]
    
}
render(){
  return (
    <div className="App">
      <header className="headerBs">
        <img src={logo} alt="bs_logo" className="logo"></img>
        <p className="title">Manage Campaigns</p>
        <CampaignFrame data={this.state.data}/>
        <NavBar/>
      </header>
    </div>
  );
}
}
export default App;
