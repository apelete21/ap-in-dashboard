import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

const TextEditor = ({ data }) => {
    const [value, setValue] = useState("");

    const handlechange = (e, editor) => {
        const data = editor.getData();
        setValue(data);
    };

    return (
        <>
            <CKEditor
                editor={ClassicEditor}
                ref={data}
                onChange={handlechange}
            />
        </>
    );
};

export default TextEditor;
