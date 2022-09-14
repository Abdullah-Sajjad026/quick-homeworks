import React, {useState} from "react";
import BuyModal from "../components/BuyModal";

const SubjectsModule = ({data}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [thisSubject, setThisSubject] = useState("");

  const handleClick = (subject) => {
    setThisSubject(subject);
    setModalOpen(true);
  };

  return (
    <>
      {data.subjects.map((sub, index) => (
        <div
          className={`p-4 rounded-lg shadow hover:shadow-lg 
          hover:shadow-blue-100 duration-200 ease-in bg-gradient-to-r ${
            data.from && `from-${data.from}`
          } ${data.via && `via-${data.via}`} ${data.to && `to-${data.to}`} ${
            data.bgColor && `bg-${data.bgColor}`
          } `}
          key={index}
          style={{cursor: "pointer"}}
          onClick={() => handleClick(sub)}
        >
          {sub}
        </div>
      ))}
      <BuyModal
        open={modalOpen}
        toggle={() => setModalOpen(false)}
        subject={thisSubject}
      />
    </>
  );
};

export default SubjectsModule;
