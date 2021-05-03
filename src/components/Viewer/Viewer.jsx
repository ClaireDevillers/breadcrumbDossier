import './Viewer.css'

function Viewer(props) {
    return (
        <div className="Viewer">
            Current Path: {props.path}<br />
            Path Contents: {props.pathContents && 
                props.pathContents.type === "file" ? 
                "This is a file" :
                JSON.stringify(props.pathContents)
            }
        </div>
    )
}

export default Viewer;