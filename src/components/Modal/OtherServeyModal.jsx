import React, { useState } from "react";
import Modal from "./Modal";
import { otherServeyQuestions } from "../../data/questions";
import { initialData } from "../../data/initialStates";
import { useFormik } from "formik";
import { otherServeySchema } from "../../Schema";
import SelectWithLabel from "../inputs/selectWithLabel";
import { useDispatch } from "react-redux";
import { otherServeyData } from "../../redux/actions";
import { errorToast } from "../../Utils/Toast";

const OtherServeyModal = ({ headerText, onClose, open, serveyType }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialData[serveyType],
      validationSchema: otherServeySchema[serveyType],
      onSubmit: (values) => {
        setLoading(true);
        dispatch(otherServeyData(values, serveyType))
          .then((res) => {
            setTimeout(() => {
              setLoading(false);
              onClose(res);
            }, 1000);
          })
          .catch((err) => {
            setLoading(false);
            errorToast(err?.response?.data?.message || "Something went wrong");
            onClose();
          });
      },
    });
  return (
    <Modal
      headerText={headerText}
      onClose={onClose}
      open={open}
      onSubmit={handleSubmit}
      loading={loading}
    >
      <div className="py-2">
        {otherServeyQuestions[serveyType]?.map((item, index) => {
          return (
            <SelectWithLabel
              key={index}
              name={item.name}
              label={item.label}
              options={item.options}
              value={values[item.name]}
              error={errors[item.name]}
              touch={touched[item.name]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          );
        })}
      </div>
    </Modal>
  );
};

export default OtherServeyModal;
