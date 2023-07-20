
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ClipLoader } from "react-spinners";
import LoadingModal from "../components/LoadingModal";

interface Props {}

const loading = () => {
  return (
    <LoadingModal />
  );
};

export default loading;

