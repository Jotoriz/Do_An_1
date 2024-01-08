import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddItem = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleRetailPriceChange = (e) => {
    setRetailPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddItem = () => {
    // Thực hiện các thao tác cần thiết khi nhấp vào nút "Add"
    // Ví dụ: gửi dữ liệu lên server, cập nhật danh sách items, v.v.

    // Sau khi thực hiện xong, đóng modal
    handleCloseModal();
  };

  return (
    <div>
      <Button className="btn" onClick={handleShowModal}>
        Add
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </Form.Group>
            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                value={brand}
                onChange={handleBrandChange}
              />
            </Form.Group>
            <Form.Group controlId="retailPrice">
              <Form.Label>Retail Price</Form.Label>
              <Form.Control
                type="text"
                value={retailPrice}
                onChange={handleRetailPriceChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={handleDescriptionChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddItem}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddItem;
