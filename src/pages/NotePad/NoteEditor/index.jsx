/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useRef, useImperativeHandle, forwardRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const NoteEditor = forwardRef((props, ref) => {
    const editorRef = useRef(null);

    const { initialContent } = props;

    const [content, setContent] = useState(initialContent);

    useEffect(() => {
        setContent(initialContent);
    }, [initialContent]);

    const handleEditorChange = newContent => {
        setContent(newContent);
    };

    // Expose the editorRef.current value to the parent component
    useImperativeHandle(ref, () => ({
        getEditorContent: () => {
            return editorRef.current.getContent();
        },

        resetEditorContent: () => {
            return editorRef.current.setContent('');
        },
    }));

    return (
        <>
            <Editor
                onInit={(evt, editor) => {
                    editorRef.current = editor;
                }}
                value={content}
                onEditorChange={handleEditorChange}
                apiKey={'7crez07uep4kth69xb7jut0ij0uwrfionkvqy5g97qz0pnzj'}
                init={{
                    height: 300,
                    menubar: true,
                    resize: false,
                    // content_css: 'tinymce-5-dark',
                    plugins: [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                        'preview',
                        'help',
                        'wordcount',
                    ],
                    toolbar: 'undo redo | blocks | ' + 'bold italic forecolor | alignleft aligncenter ' + 'alignright alignjustify | bullist numlist outdent indent | ' + 'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px ;  ;}',
                }}
            />
        </>
    );
});

export default NoteEditor;
