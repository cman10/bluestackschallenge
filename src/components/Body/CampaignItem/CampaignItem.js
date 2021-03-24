import App from '../../../assets/App.png';


const CampaignItem=({detail})=>{
    return(
    <div className="frameContent" >
        <span>
     <p className="p-5">{ new Date(detail.createdOn).toDateString()}</p>
     <p className="p-5">5 days</p>
     </span>
     <span> <img src={App} alt="bs_logo" className="logoapp"></img> <p className="p-5">{detail.name}</p></span> 
     <p className="p-5">View Pricing</p>
     <p className="p-5">Csv</p>
     <p className="p-5">Report</p>
     <p className="p-5">Schedule Again</p>
      {/* {detail.map(data=><campaignUnit data={data}/>)} */}
    </div>)
}

export default CampaignItem; 