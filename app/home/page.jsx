import { Button } from "@mui/material";
import { TbAirConditioningDisabled } from "react-icons/tb";


export default function HomePage() {
  return (
    <main className="container">
      <div className="shadow-lg flex items-center justify-between">
        <div className="left-main flex flex-col gap-5 !p-10">
          <div className="text-4xl">
            Home Service <br /> Company
          </div>
          <div>We provide repair services for your Home</div>
          <Button className="button">Book Now</Button>
        </div>
        <div className="right-main">
          <img src="/main.png" className="h-[200px] w-[200px]" />
        </div>
      </div>
      <div className="serviceContainer !mt-4 flex flex-col items-center justify-around">
        <div>Our Services</div>
        <div className="shadow-lg h-[150px] w-[200px] flex flex-col items-center justify-center !p-5">
          <div> 
            <TbAirConditioningDisabled className="text-[100px]" />
            AC Repairing
            <Button className="button">Book now</Button>
          </div>  
        </div>
      </div>
    </main>
  );
}
