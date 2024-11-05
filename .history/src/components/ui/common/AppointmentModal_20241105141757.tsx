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

  const FormSchema = z.object({
    dob: z.date({
      required_error: "A date of birth is required.",
    }),
  })
  
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [CalendarModalOpen , setCalenderModalOpen] = useState(false)
  
  if (!isOpen) return null;
  
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current &&!modalRef.current.contains(event.target as Node | null)) {
      onClose();
    }
  };

  const handleCalendarToggle = () => {
    setCalenderModalOpen(!CalendarModalOpen);
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
              <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="date">Date</Label>
                  <Button onClick={handleCalendarToggle}>
                    {CalendarModalOpen? '關閉日期選單' : '挑選好日子'}
                  </Button>
                  {CalendarModalOpen && (
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Date of birth</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-[240px] pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormDescription>
                              Your date of birth is used to calculate your age.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Submit</Button>
                    </form>
                  </Form>
                  )}
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