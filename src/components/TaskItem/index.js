import React from 'react'
import {Container,ContentPrimary,Study,Time,Description} from './styles'
import {FaTrashAlt} from 'react-icons/fa'
import {useDispatch} from 'react-redux'
const TaskItem = ({time, description, study, id}) => {

    const dispatch = useDispatch()

    function handleDeleteTask(id){
        dispatch({type: 'DELETE_TASK', taskId: id})
    }

    return (
        <Container>
       
                <FaTrashAlt 
                onClick = {() => handleDeleteTask(id) }
                color = '#efefef' 
                size = {20} 
                alt = 'trash'
                style = {{marginBottom: '10px', alignSelf: 'flex-end'}}
                />
            
            <ContentPrimary>
                <Time>{time}</Time>
                <Study>{study}</Study>
            </ContentPrimary>

            <Description>{description}</Description>
        </Container>
    )    
}

export default TaskItem