import React from "react";
// import * as Dialog from "@radix-ui/react-dialog";
import { DialogRoot, DialogTrigger, DialogContent, DialogOverlay, DialogTitle, DialogDescription } from "@/Lib/utils/ui";
import * as Toolbar from "@radix-ui/react-toolbar";


interface AppointmentProps {
    
}

const Appointment: React.FC<AppointmentProps> = () => {

    const AppointmenthandleClick = () =>{
        alert('你點擊了')   
    }
        

    return (
        <div>

        <Toolbar.Button className="ToolbarButton" style={{ marginLeft: "auto" }}>
			Share
		</Toolbar.Button>
            <button 
            className=""
            onClick={AppointmenthandleClick}>
            冷氣安裝保養預約
            </button>

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