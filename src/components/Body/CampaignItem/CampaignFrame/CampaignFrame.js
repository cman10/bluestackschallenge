import CampaignItem from '../CampaignItem';
import './CampaignFrame.css';

const CampaignFrame=({data})=>{
return(
    <>
    <div className="frameDetail grid-container" >
        <div>DATE</div>
        <div>CAMPAIGN</div>
        <div>VIEW</div>
        <div>ACTIONS</div>
    </div>
    {
        data.map(detail=><CampaignItem detail={detail} key={detail.region}/>)
    }
    
 </>
    
)
}

export default CampaignFrame;