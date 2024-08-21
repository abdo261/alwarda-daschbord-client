import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { FaSchool } from "react-icons/fa";
const centres = [
  "eknke",
  "zzwcjxjbcjbxcjx",
  "bjxbjbrf rfibirf frfrfa",
  "frjrnfrf frfj ff ffffff f f",
  "d",
  "f",
  "r",
];
const Edit = ({ isOpen, onOpenChange }) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      size="xl"
    >
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handelSubmit} className="dark:text-white">
            <ModalHeader className="flex flex-col gap-1">
              Crée une Nouvelle Utilisateur
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Nome"
                placeholder="Enter Le Nom D'etulisateur"
                variant="bordered"
              />
              <Input
                label="Prenom"
                placeholder="Enter Le Prenom D'etulisateur"
                variant="bordered"
              />
              <Input
                label="Email"
                placeholder="email D'etulisateur"
                variant="bordered"
              />
              <Input
                label="Mot De Pass"
                type="password"
                placeholder="Mot De Pass"
                variant="bordered"
              />
              <Input
                label="Telephone"
                
                placeholder="Exemple +212612345678"
                variant="bordered"
              />
              <Select
                label="Selectioné Le Centre"
                className="dark:text-white"
                variant="bordered"
              >
                {centres.map((c, i) => (
                  <SelectItem className="dark:text-white" key={i + 1}>
                    {c}
                  </SelectItem>
                ))}
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Annuler
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

export default Edit;
