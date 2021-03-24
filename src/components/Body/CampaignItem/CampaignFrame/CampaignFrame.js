import CampaignItem from '../CampaignItem';
import './CampaignFrame.css';

const CampaignFrame=({data})=>{

    const onActiveClick=()=>{
        console.log("clicked");
    }
return(
    <>
    <div className="frameDetail grid-container" >
        <div>DATE</div>
        <div>CAMPAIGN</div>
        <div>VIEW</div>
        <div>ACTIONS</div>
    </div>
    {
        data.map(detail=> <CampaignItem detail={detail} key={detail.region} onClick={onActiveClick} />)
    }
    
 </>
    
)
}

export default CampaignFrame;