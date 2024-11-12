import React, { useState } from "react";
// import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface AppointmentProps {
    
}

const Appointment: React.FC<AppointmentProps> = () => {
    const [isCardVisible, setIsCardVisible] = useState(false);

    const handleButtonClick = () =>{
        setIsCardVisible(true);
    }
    const handleCancel = () => {
        setIsCardVisible(false);
      };
        

    return (
        <div>
            <Button
            size="sm"
            variant="secondary"
            onClick={handleButtonClick}>
            冷氣安裝保養預約
            </Button>

            {
               handleButtonClick(e) 
            }
            
            
        </div>

    );
    };

export default Appointment;