import { useDispatch } from "react-redux";
import s from "../ContactList/List.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number, contact }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.containerItem}>
      <div className={s.contact}>
        <p className={s.p}>
          <FaUser />
        </p>
        <p className={s.p}>
          <FaPhone />
        </p>
      </div>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
