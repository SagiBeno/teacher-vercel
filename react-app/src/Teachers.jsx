import React from "react";
export default class Teachers extends React.Component{
    state = {
        teachers: []
    }

    render() {
        return (
            <div style={{margin: '20px'}}>
                {JSON.stringify(this.state.teachers)}
            </div>
        )
    }

    componentDidMount() {
        // callout for teachers data
        fetch('http://localhost:3333/teachers')
        .then(console.log)
        .catch(console.warn)
        .finally(() => {
            console.log('fetch done')
        })
    }
}