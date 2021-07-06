import React from "react";
import styled from "styled-components";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Uploader = () => {
  const props = {
    name: "photo",
    multiple: false,
    action: "http://localhost:9000/photo",
    onChange(info) {
      const { status } = info.file;
      // if (status !== "uploading") {
      //   console.log(info.file, info.fileList);
      // }

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Container>
      <Dragger {...props}>
        <div style={{ width: "100%" }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </div>
      </Dragger>
    </Container>
  );
};
export default Uploader;

// import React, { useState } from "react";
// // import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
// // import "./index.css";
// import { Upload, Modal } from "antd";
// import { PlusOutlined } from "@ant-design/icons";

// function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// }

// const Uploader = () => {
//   const [previewVisible, setPreviewVisible] = useState(false);
//   const [previewImage, setPreviewImage] = useState("");
//   const [previewTitle, setPreviewTitle] = useState("");
//   const [fileList, setFileList] = useState([
//     {
//       uid: "-1",
//       name: "image.png",
//       status: "done",
//       url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//     },
//     {
//       uid: "-2",
//       name: "image.png",
//       status: "done",
//       url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//     },
//   ]);

//   const handleCancel = () => setPreviewVisible(false);

//   const handlePreview = async (file) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }
//     setPreviewImage(file.url || file.preview);
//     setPreviewVisible(true);
//     setPreviewTitle(
//       file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
//     );
//   };

//   const handleChange = ({ fileList }) => {
//     console.log("Hello");
//     setFileList({ fileList });
//   };

//   const uploadButton = (
//     <div>
//       <PlusOutlined />
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </div>
//   );
//   return (
//     <>
//       <Upload
//         action="http://localhost:9000/photo"
//         listType="picture-card"
//         fileList={fileList}
//         onPreview={handlePreview}
//         onChange={handleChange}
//       >
//         {fileList.length >= 8 ? null : uploadButton}
//       </Upload>
//       <Modal
//         visible={previewVisible}
//         title={previewTitle}
//         footer={null}
//         onCancel={handleCancel}
//       >
//         <img alt="example" style={{ width: "100%" }} src={previewImage} />
//       </Modal>
//     </>
//   );
// };

// export default Uploader;
