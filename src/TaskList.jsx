import React  from "react"
import { v4 as uuidv4 } from 'uuid';

function TaskList(){
    let uid = uuidv4()
    const [list, setList] = React.useState([])


    function grabData(formData){
        let data = formData.get('addTask')
        if (data.length > 0) {
            const item = {
            id: uid,
            string: data
            }
            setList(function(prev){
                return [...prev, item]
            })
        } else {
            alert('please enter something')
        }
        }
    const listMapped = list.map(t => (
    <div className="card" key={t.id} >
        <h3 className="cardText" key={t.id}>{t.string}</h3>
        <button className='button' onClick={() => del(t.id)}>X</button>
    </div>
    ))

    
    function del(tID){
        setList(prev => prev.filter(t => t.id !== tID))
    }

    function clearAll (){
        setList(function() {
            return []
        })
    }

    function func(){
        if (list.length > 1) {
            return (
                <div className="clearAll">
                <h2 className="clearAllText">Clear All</h2>
                <button className="xButton1" onClick={clearAll}>X</button>
                </div>
            )
        }
    }

    return (
        <div className="screen">
                <form className="form" action={grabData}>
                    <input className="input1" type="text" name='addTask'/>
                    <button className='submitButton' type="submit">Add Task</button>
                </form>

            {func()}
            {listMapped}
        </div>
    )
}

export default TaskList