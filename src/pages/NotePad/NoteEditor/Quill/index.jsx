/* eslint-disable react/prop-types */

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './style.scss';

const Quill = ({ value, onChange }) => {
    const module = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            ['link', 'image'],

            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],

            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ['clean'],
        ],
    };

    const onEditorChange = val => {
        onChange(val);
    };

    return <ReactQuill theme='snow' modules={module} value={value} onChange={onEditorChange} placeholder={'Write Your Notes'} className='editor-input' />;
};

export default Quill;
