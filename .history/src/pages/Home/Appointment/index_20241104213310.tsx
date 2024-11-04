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
            className="px-0.5 font-normal	"
            variant="secondary"
            onClick={AppointmenthandleClick}>
            冷氣安裝保養預約
            </Button>

        {/* <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog> */}
            
        </div>

    );
    };

export default Appointment;