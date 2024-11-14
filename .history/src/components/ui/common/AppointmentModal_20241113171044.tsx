import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IoMdCloseCircle } from "react-icons/io";
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"




interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: string;
}


const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  
  const [date, setDate] = React.useState<Date>()
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [CalendarModalOpen , setCalenderModalOpen] = useState(false)

  const [countryData, setCountryData] = useState<any>({});
  
  useEffect(()=>{
    const fetchCountryData = async () =>{
      try{
        const response = await fetch ("./AllData.json");
        const data = await response.json()
        setCountryData(data);
      }catch(error){
        console.error('Error loading country data:', error) 
      };
    };
    fetchCountryData();
  },[])


  if (!isOpen) return null;
  
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current &&!modalRef.current.contains(event.target as Node | null)) {
      onClose();
    }
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
                  <Label htmlFor="name">姓名</Label>
                  <Input id="name" placeholder="姓名" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">保養維修區域</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="待維修保養區域。" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {
                        countryData.Taiwan && countryData.Taiwan.map() =>()
                          <SelectItem value="1">{}</SelectItem>
                        
                        
                      }
                      <SelectItem value="1"></SelectItem>
                      <SelectItem value="2">SvelteKit</SelectItem>
                      <SelectItem value="3">Astro</SelectItem>
                      <SelectItem value="4">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col space-y-1.5 ">
                <h2 className='pt-4'>選擇日期</h2>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[20rem] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>選一個好日子</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
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