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
import { useEffect, useState } from "react";
import Switch from "components/switch";
import { contactType } from "types/contact";
import { useDispatch, useSelector, } from 'react-redux';
import { addContact, selectContacts, setContacts, updateContact } from '../../../features/contact/contactSlice';
import { v4 as uuidv4 } from 'uuid';

const ProfileOverview: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setContacts())
  }, []);

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [formData, setFormData] = useState<contactType>({
    id: null,
    firstName: '',
    lastName: '',
    status: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const swithchHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prevData) => ({ ...prevData, status: checked }));
  };

  const resetFormData = () => {
    setFormData({ id: null, firstName: '', lastName: '', status: false });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData?.id !== null && formData?.id !== undefined) {
      // Update existing contact
      dispatch(updateContact(formData));
    } else {
      // Add new contact
      const newContactData = {
        ...formData,
        id: uuidv4(), // Generate a new UUID for the new contact
      };
      dispatch(addContact(newContactData)); // Dispatch the new contact data with the updated ID
    }
    onClose();
    resetFormData()
  };


  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-3 flex justify-center">
        <button
          className="w-full max-w-[3in] rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={() => {
            setIsEdit(true)
            resetFormData()
            onOpen()
          }}
        >
          + Create New Contact
        </button>
      </div>

      <div className="w-ful mt-3 flex h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.isArray(contacts) && contacts.map((contact) => {
          return <Banner contact={contact} onOpen={onOpen} formData={formData} setFormData={setFormData} setIsEdit={setIsEdit} />
        })}
      </div>
      {isEdit ?
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{formData?.id !== null ? 'Edit Contact' : 'Create Contact'}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>
                <Input name="firstName" className="mb-3" variant="outline" placeholder="First Name" borderRadius="16px" value={formData?.firstName} onChange={handleChange} />
                <Input name="lastName" variant="outline" placeholder="Last Name" borderRadius="16px" value={formData?.lastName} onChange={handleChange} />
              </div>
              <FormControl className="mt-3" display="flex" alignItems="center">
                <FormLabel htmlFor="email-alerts" mb="0">
                  Status
                </FormLabel>
                <div className="ml-auto flex items-center">
                  <h4 className="mr-[10px]">{formData?.status ? "Active" : "Inactive"}</h4>
                  <Switch colorScheme="brand" onChange={swithchHandleChange} isChecked={formData?.status === true ? true : false} />
                </div>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <button
                className="rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                onClick={handleSubmit}
              >
                {formData?.id !== null ? 'update' : 'create'}
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        :

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Contact Detail</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>
                <p><b>First Name:</b> {formData?.firstName}</p>
                <p><b>Last Name:</b> {formData?.lastName}</p>
                <p><b>Status:</b> {formData?.status ? "Active" : "Inactive"}</p>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      }

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
