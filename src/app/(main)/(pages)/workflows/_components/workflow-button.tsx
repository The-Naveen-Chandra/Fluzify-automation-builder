"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import CustomModal from "@/components/global/custom-modal";
import WorkflowForm from "@/components/forms/workflow-form";

import { useModal } from "@/providers/modal-provider";

type Props = {};

const WorkflowButton = (props: Props) => {
  const { setOpen, setClose } = useModal();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerful that help you automate tasks."
      >
        <WorkflowForm />
      </CustomModal>
    );
  };

  return (
    <Button size={"icon"} onClick={handleClick}>
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
