import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const params = useParams();

  const conversationId = () => {
    if (!params?.conversationId) {
      return '';
    }

    return params.conversationId as string;
  }

  const isOpen = !!conversationId

  return useMemo(() => ({
    isOpen,
    conversationId
  }), [isOpen, conversationId]);
};

export default useConversation;