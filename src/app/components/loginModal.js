
import React, { useState } from "react";
import Modal from "./modal"; // importing the Modal component

function Login() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>

      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <h2>Modal Title</h2>
          <p>This is modal content.</p>
        </Modal>
      )}
    </div>
  );
}

export default Login;
