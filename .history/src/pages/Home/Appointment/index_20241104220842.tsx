import React, { useState } from "react";
// import * as Dialog from "@radix-ui/react-dialog";
import CardComponent from "@/components/ui/common/Modal";
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
import Modal from "@/components/ui/common/Modal";


interface AppointmentProps {
    
}

const Appointment: React.FC<AppointmentProps> = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
        window.scrollTo({ top: window.innerHeight / 2, behavior: 'smooth' });
      };
    
      const handleModalClose = () => {
        setIsModalOpen(false);
      };
        

    return (
        <div>
            <Button
            size="sm"
            variant="secondary"
            onClick={handleButtonClick}>
            冷氣安裝保養預約
            </Button>
            <Modal isOpen={isModalOpen} onClose={handleModalClose} />
            
        </div>

    );
    };

export default Appointment;