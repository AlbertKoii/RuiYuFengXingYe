import React from "react";
// import * as Dialog from "@radix-ui/react-dialog";
import { DialogRoot, DialogTrigger, DialogContent, DialogOverlay, DialogTitle, DialogDescription } from "@/Lib/utils/ui";
import { Button } from "@/components/ui/button"


interface AppointmentProps {
    
}

const Appointment: React.FC<AppointmentProps> = () => {

    const AppointmenthandleClick = () =>{
        alert('你點擊了')   
    }
        

    return (
        <div>
            <Button
            size="sm"
            variant="secondary"
            onClick={AppointmenthandleClick}>
            冷氣安裝保養預約
            </Button>
        </div>

    );
    };

export default Appointment;