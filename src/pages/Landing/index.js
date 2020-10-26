import React from 'react'
import logo from '../../assets/images/logo.png'
import {IoMdAddCircle} from 'react-icons/io'
import ModalAddTask from '../../components/ModalAddtask/index'
import EmptyList from '../../components/EmptyList'
import TasktItem from '../../components/TaskItem'

import {useSelector} from 'react-redux'
import {Container, Header, TaskList} from './styles'

const Landing = () => {
    const tasks = useSelector( state => state.tasks)

    return(
        <Container>
            <Header>
                <img src = {logo} alt = 'Study'/>

                <button type="button" style = {{background: 'none', outline: 'none'}} data-toggle="modal" data-target="#exampleModal">
                    <IoMdAddCircle size = {40} color = '#A1B0FD'  />
                </button>
                
              
            </Header>

            <TaskList>
                {tasks.length ? tasks.map(task => (
                    <TasktItem 
                    key = {task.id} 
                    id = {task.id}
                    study = {task.study} 
                    time = {task.time} 
                    description = {task.description} />
                    
                )) :  (

                <EmptyList />
                
                )}
               
            </TaskList>
           
            <ModalAddTask />
        </Container>
    )
}

export default Landing