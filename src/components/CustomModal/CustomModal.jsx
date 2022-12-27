import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import './modal.style.css'

const CustomModal = ({btnTitle,modalTitle}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return(
      <>
          <Button className={'btn_style'} onClick={handleShow}>
              {btnTitle}
          </Button>

          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title className={'modal_title'}>
                      {modalTitle}
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>

              </Modal.Body>
              <Modal.Footer>
                  <Button className={'close_btn'} onClick={handleClose}>
                      {"بستن"}
                  </Button>
                  <Button className={'save_btn'} onClick={handleClose}>
                      {"ذخیره تغییرات"}
                  </Button>
              </Modal.Footer>
          </Modal>
      </>
  )
}

export default CustomModal;