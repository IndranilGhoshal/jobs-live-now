"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Editor({ value, onChange, error, editortype }) {

    return (
        <>
            {
                editortype == "normal" ?
                    <div className={error ? "editor-wrapper error" : "editor-wrapper"}>
                        <CKEditor
                            editor={ClassicEditor}
                            data={value || ""}
                            config={{
                                licenseKey: "GPL"
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                onChange(data);
                            }}
                        />
                    </div>
                    :
                    <>
                        <div className={error ? "editor-wrapper error" : "editor-wrapper"}>
                            <CKEditor
                                editor={ClassicEditor}
                                data={value || ""}
                                config={{
                                    licenseKey: "GPL"
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    onChange(data);
                                }}
                            />
                        </div>
                    </>
            }

        </>
    );
}