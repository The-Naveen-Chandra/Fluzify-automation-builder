"use client";

import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import "@uploadcare/blocks/web/lr-file-uploader-regular.min.css";

type Props = {
  onUpload: (e: string) => any;
};

LR.registerBlocks(LR);

const UploadcareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
    };
    if (ctxProviderRef.current) {
      ctxProviderRef.current.addEventListener(
        "file-upload-success",
        handleUpload
      );
    }
  }, [onUpload, router]);

  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="5e91133e7ea5e7cbbf80" />

      <lr-file-uploader-regular ctx-name="my-uploader" />

      <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />
    </div>
  );
};

export default UploadcareButton;
