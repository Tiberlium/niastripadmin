import React from "react";
import ImageUploading from "react-images-uploading";
import Imagescard from "./Imagescard";
import { Button, Box } from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";

export default function Uploadfile({ file }) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 8;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    file(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <Box>
            <Button
              width={"full"}
              leftIcon={<FiUpload />}
              colorScheme={isDragging ? "red" : "teal"}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Button>
            {imageList.map((image, index) => (
              <Imagescard
                key={index}
                label={image.file.name}
                onClick={() => onImageRemove(index)}
              />
            ))}
          </Box>
        )}
      </ImageUploading>
    </div>
  );
}
