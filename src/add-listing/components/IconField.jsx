import { FaCar,
    FaChargingStation, 
    FaCheckCircle, 
    FaCircle, 
    FaClipboardList, 
    FaCogs, 
    FaDollarSign, 
    FaDoorClosed, 
    FaFileAlt,
    FaGasPump, 
    FaIdCard, 
    FaIndustry, 
    FaMoneyBillAlt, 
    FaPalette, 
    FaRoad, 
    FaTachometerAlt, 
    FaTag, 
    FaTags, 
    FaWrench } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";


const iconMap = {
    FaClipboardList: <FaClipboardList />,
    FaTag: <FaTag/>,
    FaDollarSign: <FaDollarSign/>,
    FaMoneyBillAlt: <FaMoneyBillAlt/>,
    FaCar: <FaCar/>,
    FaCheckCircle: <FaCheckCircle/>,
    FaChargingStation: <FaChargingStation/>,
    FaIndustry: <FaIndustry/>,
    SlCalender: < SlCalender />,
    FaRoad: <FaRoad/>,
    FaCogs: <FaCogs/>,
    FaGasPump: <FaGasPump/>,
    FaTachometerAlt: <FaTachometerAlt/>,
    FaWrench: <FaWrench/>,
    FaCircle: <FaCircle/>,
    FaPalette: <FaPalette/>,
    FaDoorClosed: <FaDoorClosed/>,
    FaIdCard: <FaIdCard/>,
    FaTags: <FaTags/>,
    FaFileAlt: <FaFileAlt/>

}

function IconField({icon}) {
  return (
    <div className="text-primary bg-blue-100 p-1.5 rounded-full">
        {iconMap[icon]}
    </div>
  )
}

export default IconField