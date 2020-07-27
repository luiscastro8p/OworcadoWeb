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
} from "reactstrap";

export const Modall = ({
  className,
  tittle,
  GetTexts,
  btnText1,
  btnText2,
  submit,
  hide,
  open,
}) => {
  return (
    <Modal
      isOpen={open}
      toggle={hide}
      className={className}
    >
      <ModalHeader toggle={hide}>{tittle}</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="Numsala">Numero de sala</Label>
          <Input
            type="number"
            name="Numsala"
            id="Numsala"
            onChange={GetTexts}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={hide}>
          {btnText1}
        </Button>
        <Button color="success" onClick={submit}>
          {btnText2}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Modall;
