import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import { Controller } from "react-hook-form";
import conf from "../conf/conf";

function RTE({ name, control, label, defaultValue = "Type your content here..." }) {
  return (
    <div className="mb-6">
      {label && (
        <label className="block text-lg font-semibold text-gray-700 mb-2">
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey={conf.editorAPIKey}
            initialValue={defaultValue}
            init={{
              height: 350,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
            value={value}
          />
        )}
      />
    </div>
  );
}

export default RTE;
