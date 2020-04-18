import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = (props) => {

    // const onChange = (content, editor) => {
    //     console.log(content);
    //     console.log(editor.getContent());
    // }
    return (
        <Editor
            apiKey="hrzsxlxliacgdlj9c44dvc0edehdq8eoi0if6e143emfrc6m"
            initialValue=""
            textareaName='f-content'
            outputFormat='html'
            
            init={{
                height: 700,
                menubar: true,
            //     plugins: [
            //         'advlist autolink lists link image charmap print preview anchor',
            //         'searchreplace visualblocks code fullscreen',
            //         'insertdatetime media table paste code help wordcount'
            //     ],
            //     toolbar:
            //         'undo redo | formatselect | bold italic backcolor | \
            // alignleft aligncenter alignright alignjustify | \
            // bullist numlist outdent indent | removeformat | help'
                plugins: 'image code a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
                toolbar: 'undo redo | link image | numlist bullist | code a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table',
               // toolbar: 'a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table',
                toolbar_mode: 'floating',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                relative_urls: false,
                remove_script_host: false,
                convert_urls: true,
                //enable title field in the Image dialog
                image_title: true,
                // enable automatic uploads of images represented by blob or data URIs
                automatic_uploads: false,
                // add custom filepicker only to Image dialog
                file_picker_types: 'image',
                file_picker_callback: function (cb, value, meta) {
                    var input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/*');

                    input.onchange = function () {
                        var file = this.files[0];
                        var reader = new FileReader();

                        reader.onload = function () {
                            var id = 'blobid' + (new Date()).getTime();
                            var blobCache = window.tinymce.activeEditor.editorUpload.blobCache;
                            var base64 = reader.result.split(',')[1];
                            var blobInfo = blobCache.create(id, file, base64);
                            blobCache.add(blobInfo);

                            // call the callback and populate the Title field with the file name
                            cb(blobInfo.blobUri(), { title: file.name });
                        };
                        reader.readAsDataURL(file);
                    };

                    input.click();
                },
                images_upload_url: 'http://localhost:5500/post/upload-image',

                images_upload_handler: function (blobInfo, success, failure) {
                
                    const formData = new FormData();
                    formData.append('file', blobInfo.blob(), blobInfo.filename());
                    fetch('http://localhost:5500/post/upload-image',{
                        
                        method: 'POST',
                        body: formData,
                        //header: {'Content-Type': 'multipart/form-data'}
                    })
                    .then(res => res.json())
                    .then(data => success(data.location))
                    .catch(err => failure(err));
                
                    //xhr.send(formData);
                  },
                //images_upload_base_path: 'https://drive.google.com/uc?export=view&id='
            }}
            onEditorChange={props.setContent}
        />
    );
};

export default TextEditor;