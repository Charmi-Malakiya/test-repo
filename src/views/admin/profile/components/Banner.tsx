import avatar from "assets/img/avatars/avatar11.png";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";
import { deleteContact } from "features/contact/contactSlice";
import { useDispatch } from "react-redux";
import { contactType } from "types/contact";

interface ContactFormProps {
  contact: contactType;
  onOpen: () => void;
  formData :contactType;
  setFormData : React.Dispatch<React.SetStateAction<contactType>>;
  setIsEdit : React.Dispatch<React.SetStateAction<boolean>>;
}

const Banner: React.FC<ContactFormProps> = ({contact,onOpen,setFormData,setIsEdit}) => {
  const dispatch = useDispatch();
  const deleteRecord = (id: string) => {
    dispatch(deleteContact(id))
  }

  const editRecord = (id: string) => {
    setIsEdit(true)
    setFormData(contact)
    onOpen()
  }

  const viewRecord = () => {
    setIsEdit(false)
    setFormData(contact)
    onOpen()
  }

  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={avatar} alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {contact?.firstName}
        </h4>
        <p className="text-base font-normal text-gray-600">{contact?.lastName}</p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex grid grid-cols-3 gap-4">
        <button className="rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
         onClick={() => viewRecord()}>
          View
        </button>
        <button className="rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        onClick={() => editRecord(contact?.id)}>
          Edit
        </button>
        <button 
        className="rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        onClick={() => deleteRecord(contact?.id)}
        >
          Delete
        </button>
      </div>
    </Card>
  );
};

export default Banner;
