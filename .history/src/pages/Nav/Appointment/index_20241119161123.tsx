import React, { useState } from 'react';
import { Button } from "./components/ui/button";
import AppointmentModal from "@/components/ui/common/AppointmentModal";

const Appointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button size="sm" variant="secondary" onClick={handleButtonClick}>
        冷氣安裝保養預約
      </Button>
      <AppointmentModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default Appointment;