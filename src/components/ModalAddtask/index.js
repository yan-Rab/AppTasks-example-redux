import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import uuid from 'react-uuid'

import {Input, ContainerForm, Select} from './styles'

const ModalAddTask = () => {
    const dispatch = useDispatch()

    const [taskData, setTaskData] = useState({
      time: '',
      study: '',
      description: ''
    })

    function handleAddTask(event){
      event.preventDefault()
      const data = {
        ...taskData,
        id: uuid()
      }
      dispatch({type: 'ADD_TASK', task: data})
    }

    return(
        <div className="modal fade" id="exampleModal" tabIndex = {-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header" style = {{background: '#6666ff'}}>
                  <h5 className="modal-title" id="exampleModalLabel" style = {{color: 'white'}}>
                    Nova atividade
                  </h5>
                  <button type="button" className="close" style = {{color: 'white'}} data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
             
              <div className="modal-body">
                  <ContainerForm>
                  <Input 
                  type = 'time' 
                  onChange = {(e) => setTaskData({...taskData, time: e.target.value}) }/>

                  <Select value = {taskData.study} onChange = {(e) => setTaskData({...taskData, study: e.target.value})}>
                    <option hidden>Matérias</option>
                    <option>Português</option>
                    <option>Matemática</option>
                    <option>Biologia</option>
                    <option>Física</option>
                    <option>Química</option>
                    <option>História</option>
                    <option>Geografia</option>
                    <option>Literatura</option>
                    <option>Filosofia</option>
                    <option>Sociologia</option>
                    <option>Redação</option>
                  </Select>
                 
                  <Input 
                  type = 'text' 
                  placeholder = 'Descrição' 
                  onChange = {(e) => setTaskData({...taskData, description: e.target.value})}/>
                  
                  </ContainerForm>

              </div>
              <div className="modal-footer">
                  <button type="button" onClick = {handleAddTask} className="btn btn-primary" data-dismiss="modal">Adicionar</button>
              </div>
             
            </div>
          </div>
        </div>
    )
}

export default ModalAddTask;