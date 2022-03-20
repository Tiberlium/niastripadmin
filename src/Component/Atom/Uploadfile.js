import React from "react";
import ImageUploading from "react-images-uploading";
import Imagescard from "./Imagescard";
import { Button } from "@chakra-ui/react";



export default function Uploadfile() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 8;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
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
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button
              style={isDragging ? { color: "red" } : undefined}
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
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
