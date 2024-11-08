import React, { useState } from "react";
import Modal from "./Modal";
import { socialMedia } from "../../data/questions";
import SelectWithLabel from "../inputs/selectWithLabel";
import { useFormik } from "formik";
import { socialMediaAddictionSchema } from "../../Schema";
import { useDispatch } from "react-redux";
import { submitAddictionServey } from "../../redux/actions";
import { errorToast } from "../../Utils/Toast";

const SocialMediaModal = ({ onClick, open }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const initialState = {
    spendingTime: "3",
    useSocialMedia: "2",
    personalProblem: "1",
    socialSuccess: "5",
    trouble: "4",
    impaction: "3",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialState,
      validationSchema: socialMediaAddictionSchema,
      onSubmit: (values) => {
        setLoading(true);
        dispatch(submitAddictionServey(values))
          .then((res) => {
            setTimeout(() => {
              setLoading(false);
              onClick(res?.dashboardData);
            }, 500);
          })
          .catch((err) => {
            setLoading(false);
            errorToast(err?.response?.data?.message || "Something went wrong");
            onClick();
          });
      },
    });
  return (
    <Modal
      headerText={"Social Media"}
      onClose={onClick}
      open={open}
      onSubmit={handleSubmit}
      loading={loading}
    >
      <div className="py-2">
        {socialMedia.map((item, index) => {
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

export default SocialMediaModal;
