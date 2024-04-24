'use client';

import Dropzone from 'react-dropzone';

import DropzoneField from './DropzoneField';

type UploadDropzoneProps = {
  // addImage: (url: string) => void;
  className?: string;
  onComplete?: (acceptedFile: File[]) => Promise<void>;
};

const CreateOfferUpload = ({className, onComplete}: UploadDropzoneProps) => {
  // const {uploadImageToS3} = useUploadS3();
  return (
    <Dropzone
      multiple={false}
      onDrop={async (acceptedFile) => {
        // const key = await uploadImageToS3(acceptedFile[0]);
        // addImage(key);
        console.log(acceptedFile[0]);
        await onComplete?.(acceptedFile);
      }}
    >
      {({getRootProps, getInputProps}) => (
        <DropzoneField
          rootProps={getRootProps}
          inputProps={getInputProps}
          className={className}
        />
      )}
    </Dropzone>
  );
};

export default CreateOfferUpload;
