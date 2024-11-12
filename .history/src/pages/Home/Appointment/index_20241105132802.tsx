import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/common/Modal";

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

      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default Appointment;