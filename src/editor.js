const Editor = (props) => {
    return (
        <div>
            <textarea id="editor" onChange={props.onChange} defaultValue={props.defaultValue}></textarea>
        </div>
    )
}

export default Editor;