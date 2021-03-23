import CampaignItem from '../CampaignItem';
import './CampaignFrame.css';

const CampaignFrame=({data})=>{
return(
    <>
      {console.log(data)}
    <div className="frameDetail grid-container" >
        <div>DATE</div>
        <div>CAMPAIGN</div>
        <div>VIEW</div>
        <div>ACTIONS</div>
    </div>
    {
        data.map(detail=><CampaignItem detail={detail}/>)
    }
    
 </>
    
)
}

export default CampaignFrame;