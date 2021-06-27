import React from 'react'

export const getStaticProps = async () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(props => ({ props }))
}

const Todo = (props) => (
    <>TODO ID: {props.id}</>
)

export default Todo