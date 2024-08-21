
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { FaSchool } from "react-icons/fa";

const Create = ({ isOpen, onOpenChange }) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handelSubmit} className="dark:text-white">
            <ModalHeader className="flex flex-col gap-1">
              Crée une Nouvelle Centre
            </ModalHeader>
            <ModalBody>
              <Input
              size="lg"
                autoFocus
                endContent={
                  <FaSchool className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Nome"
                placeholder="Enter Le Nom De Centre"
                variant="bordered"
              />

              <label
                htmlFor="color"
                className="block text-sm font-medium mb-2 "
              >
                Choisire un coleur
              </label>
              <input
                type="color"
                className="p-1 h-10 w-14 block mx-auto bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
                id="color"
                title="Choose your color"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Ferme
              </Button>
              <Button color="success" type="submit">
                Crée
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};

export default Create;
