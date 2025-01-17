/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import s from "./List.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectContact);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {contacts.map((item) => (
          <item {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
