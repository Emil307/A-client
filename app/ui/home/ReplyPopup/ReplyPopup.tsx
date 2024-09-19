"use client";

import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { PostForm } from "@/app/ui/home/PostForm";
import { usePostsStore } from "@/app/store/posts";

interface IReplyPopupProps {
  isOpen: boolean;
  onClose: () => void;
  predecessorId?: number;
}

export const ReplyPopup: React.FC<IReplyPopupProps> = ({
  isOpen,
  onClose,
  predecessorId,
}) => {
  const posts = usePostsStore((state) => state.posts);

  useEffect(() => {
    onClose();
  }, [posts]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="bg-black"></ModalHeader>
        <ModalCloseButton />
        <ModalBody className="bg-black">
          <PostForm predecessorId={predecessorId} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
