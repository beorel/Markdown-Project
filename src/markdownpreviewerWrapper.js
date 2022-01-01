// textbox disapppear -https://reactjs.org/docs/forms.html

import React from 'react';
import marked from 'marked';
import Editor from './editor'
import MarkdownPreviewer from './markdownPreviewer';

class MarkdownPreviewerWrapper extends React.Component {

    constructor(props) {
        super(props);

        const content = ` # Welcome to my React Markdown Previewer!

        ## This is a sub-heading...
        ### And here's some other cool stuff:
        
        Heres some code, <div></div>, between 2 backticks.
        
        // this is multi-line code:
        
           
        You can also make text **bold**... whoa!
        Or _italic_.
        Or... wait for it... **_both!_**
        And feel free to go crazy ~~crossing stuff out~~.
        
        There's also [links](https://www.freecodecamp.org), and
        > Block Quotes!
        
        And if you want to get really crazy, even tables:
        
        Wild Header | Crazy Header | Another Header?
        ------------ | ------------- | -------------
        Your content can | be here, and it | can be here....
        And here. | Okay. | I think we get it.
        
        - And of course there are lists.
          - Some are bulleted.
             - With different indentation levels.
                - That look like this.
        
        
        1. And there are numbered lists too.
        1. Use just 1s if you want!
        1. And last but not least, let's not forget embedded images: `

        // ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) 


        this.state = {
            defaultValue: content,
            preview: ""
        }
    }

    updatePreview = (event) => {
        console.log(event.target.value)
        this.setState({
            preview: marked(event.target.value)
        })

    }
    componentDidMount = () => {
        this.setState({
            preview: marked(this.state.defaultValue)
        })
    }

    render() {
        return (
            <div>

                <MarkdownPreviewer preview={this.state.preview} />
                <Editor onChange={this.updatePreview} defaultValue={this.state.defaultValue} />
                {/* <textarea id="editor" onChange={this.updatePreview}></textarea> */}
            </div>
        )
    }
}

export default MarkdownPreviewerWrapper