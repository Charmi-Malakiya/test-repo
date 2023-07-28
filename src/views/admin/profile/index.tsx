import Banner from "./components/Banner";
import General from "./components/General";
import Notification from "./components/Notification";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";
import Switch from "components/switch";
import { contactType } from "types/contact";

const ProfileOverview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [isActive, setIsActive] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  const handleChange = () => {
    setIsActive(!isActive);
  };
  
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-3 flex justify-center">
        <button
          className="w-full max-w-[3in] rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={onOpen}
        >
          + Create New Contact
        </button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>
                <Input className="mb-3" variant="outline" placeholder="First Name" borderRadius="16px" />
                <Input variant="outline" placeholder="Last Name" borderRadius="16px" />
              </div>
              <FormControl className="mt-3" display="flex" alignItems="center">
                  <FormLabel htmlFor="email-alerts" mb="0">
                    Status
                  </FormLabel>
                <div className="ml-auto flex items-center">
                  <h4 className="mr-[10px]">{isActive ? "Active" : "Inactive"}</h4>
                  <Switch id="email-alerts" colorScheme="brand" onChange={handleChange} isChecked={isActive}/>
                </div>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <button className="rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                Create
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </div>
      <div className="w-ful mt-3 flex h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Banner />
      </div>

      {/* <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-4 lg:!mb-0">
          <Banner />
        </div>

        <div className="col-span-3 lg:!mb-0">
          <Storage />
        </div>

        <div className="z-0 col-span-5 lg:!mb-0">
          <Upload />
        </div>
      </div> */}
      {/* all project & ... */}

      {/* <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div>
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-5">
          <General />
        </div>

        <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div>
      </div> */}
    </div>
  );
};

export default ProfileOverview;
