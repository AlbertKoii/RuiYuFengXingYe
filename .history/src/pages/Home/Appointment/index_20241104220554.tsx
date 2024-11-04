import React, { useState } from "react";
// import * as Dialog from "@radix-ui/react-dialog";
import CardComponent from "@/components/ui/common/Cards";
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
    const [isCardVisible, setIsModalOpen] = useState(false);

    const handleButtonClick = () =>{
        const handleButtonClick = () => {
            setIsModalOpen(true);
            // 滚动到页面中间
            window.scrollTo({ top: window.innerHeight / 2, behavior: 'smooth' });
          };
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
            {isCardVisible && (
                <div className="mt-4">
                    <CardComponent onCancel={handleCancel} />
                </div>
      )}
            
        </div>

    );
    };

export default Appointment;