import campaignUnit from "./CampaignFrame/CampaignUnit";
import App from '../../../assets/App.png';


const CampaignItem=({detail})=>{
    return(
    <div className="frameContent" >
        {console.log(typeof(detail))}
        <span>
     <p class="p-5">{ new Date(detail.createdOn).toDateString()}</p>
     <p class="p-5">5 days</p>
     </span>
     <span> <img src={App} alt="bs_logo" className="logoapp"></img> <p class="p-5">{detail.name}</p></span> 
     <p class="p-5">View Pricing</p>
     <p class="p-5">Csv</p>
     <p class="p-5">Report</p>
     <p class="p-5">Schedule Again</p>
      {/* {detail.map(data=><campaignUnit data={data}/>)} */}
    </div>)
}

export default CampaignItem; 