import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Spinner,
  Row,
  Col,
} from "reactstrap";

export const Modall = ({
  className,
  tittle,
  GetTexts,
  btnText1,
  btnText2,
  submit,
  loading,
  hide,
  open,
}) => {
  return (
    <Modal isOpen={open} toggle={hide} className={className}>
      <ModalHeader toggle={hide}>{tittle}</ModalHeader>
      <ModalBody>
        {loading ? (
          <Row>
            <Col
              sm="12"
              className="d-flex justify-content-center align-content-center"
            >
              <div className="p-3">Esperando jugador...</div>
            </Col>
            <Col className="d-flex justify-content-center align-content-center">
              <Spinner animation="border " role="status"></Spinner>
             
            </Col>
          </Row>
        ) : (
          <FormGroup>
            <Label for="Numsala">Numero de sala</Label>
            <Input
              type="number"
              name="Numsala"
              id="Numsala"
              onChange={GetTexts}
            />
          </FormGroup>
        )}
      </ModalBody>
      {loading ? (
        <div></div>
      ) : (
        <ModalFooter>
          <Button color="secondary" onClick={hide}>
            {btnText1}
          </Button>
          <Button color="success" onClick={submit}>
            {btnText2}
          </Button>
        </ModalFooter>
      )}
    </Modal>
  );
};

export default Modall;
