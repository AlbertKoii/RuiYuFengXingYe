import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IoMdCloseCircle } from "react-icons/io";
import { Calendar } from "@/components/ui/calendar"



interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [CalendarmodalOpen , setCalenderModalOpen] = useState(false)
  if (!isOpen) return null;
  
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current &&!modalRef.current.contains(event.target as Node | null)) {
      onClose();
    }
  };

  const handleButtonClick = () => {
    setCalenderModalOpen(true);
  };

  const handleModalClose = () => {
    setCalenderModalOpen(false);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-4 w-[30rem] relative"
        ref={modalRef}
      >
        <IoMdCloseCircle 
        color="black" 
        size="2rem"
        onClick={onClose}>
        </IoMdCloseCircle>
        
        <Card>
          <CardHeader>
            <CardTitle>冷氣維修需求</CardTitle>
            <CardDescription>下表需填寫姓名、維修區域、維修時間。</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="姓名" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="待維修保養區域。" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="1">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <button>
                {
                  CalendarmodalOpen === true ? 
                  {
                    
                  }
                  <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  
                />
                }
              </button>
              
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AppointmentModal;