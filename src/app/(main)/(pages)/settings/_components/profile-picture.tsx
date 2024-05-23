"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import UploadcareButton from "./uploadcare-button";
import { X } from "lucide-react";

type Props = {
  userImage: string | null;
  onDelete: any;
  onUpload: any;
};

function ProfilePicture({ userImage, onDelete, onUpload }: Props) {
  const router = useRouter();

  const onRemoveProfileImage = async () => {
    const response = await onDelete();
    if (response) {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile picture</p>

      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image src={userImage} alt="User_image" />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X />
            </Button>
          </>
        ) : (
          <UploadcareButton />
        )}
      </div>
    </div>
  );
}

export default ProfilePicture;
