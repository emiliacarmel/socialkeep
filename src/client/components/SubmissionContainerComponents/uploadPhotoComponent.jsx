import {useDropzone} from 'react-dropzone'
import { Link } from 'react-router-dom';


function Basic(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone()
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  )
}
  