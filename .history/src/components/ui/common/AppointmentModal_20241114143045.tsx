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
} from "@/components/ui/popover";

import allData from './allData.json';


interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: string;
  name : string;
  phone : number;
  area: string;
  AppointmentDate: any;
}


const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose , name , phone , area , date}) => {
  
  const [date, setDate] = React.useState<Date>()
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [countryData, setCountryData] = useState<any>({});
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  

  // 導入地區選擇
  useEffect(() => {
    setCountryData(allData);
  }, [countryData]);

  // 點外部 關閉視窗
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current &&!modalRef.current.contains(event.target as Node | null)) {
      onClose();
    }
  };



  // Calendar onClick 不要消失
  
  const handleCalendarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsCalendarOpen(true);
  };

  // Calendar choose the pre and next .
  

  if (!isOpen) return null;


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
                  <Label htmlFor="name">電話</Label>
                  <Input id="phone" placeholder="姓名" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">保養維修區域</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="待維修保養區域。" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                    {countryData.Taiwan && countryData.Taiwan.conutry.map((area: string, index: number) => (
                      <SelectItem className="mt-4" key={index} value={area}>{area}</SelectItem>
                    ))}
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
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>選個好日子</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent 
                  className="w-auto p-0" 
                  onClick={handleCalendarClick}>
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