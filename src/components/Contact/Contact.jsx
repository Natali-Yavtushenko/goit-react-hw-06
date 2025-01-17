import { useDispatch } from "react-redux";
import s from "../ContactList/List.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  console.log({ id, name, number });

  return (
    <div className={s.containerItem}>
      <div className={s.contact}>
        <p className={s.p}>
          <FaUser />
          {name}
        </p>
        <p className={s.p}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
