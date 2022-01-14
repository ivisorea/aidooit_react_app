import { Editor } from "@tinymce/tinymce-react"
import axios from "axios";

export const TextEditor = ({ onChange, value }) => {

    const images_upload_handler = async (blobInfo, success, failure, progress) => {
        const formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());
        try {
          const {
            data: { location }
          } = await axios.post('https://aidooit-app.herokuapp.com/images/s3', formData, {
            headers: { Authorization: localStorage.getItem('token') },
            onUploadProgress: ({ loaded, total }) => progress((loaded / total) * 100)
          });
          console.log(location);
          success(location);
        } catch (error) {
          console.log(error);
          failure(error);
        }
      };

    return (
        <>
            <Editor
                apiKey='n1u2jypfpgavlk5j8lfm99swbhjbn9fhm1pl93c5p1s3ix2f'
                init={{
                height: 500,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                images_upload_handler
                }}
                onEditorChange={newValue => onChange(newValue)}
            />
        </>
    )
}


