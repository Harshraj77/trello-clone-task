import DeleteIcon from "../icons/DeleteIcon";
import { Id, Task } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import {useState} from "react";
interface props{
    task: Task;
    deleteTask: (id:Id)=> void;
    updateTask: (id:Id,content:string) => void;
}

function TaskCard({task,deleteTask,updateTask} :props) {

    const [mouseIsOver,setMouseIsOver] = useState(false);
    const[editMode,setEditMode] = useState(false);

    const {setNodeRef, attributes, listeners, transform,transition,isDragging} = 
 useSortable({
    id: task.id,
    data:{
      type: "Task",
      task,
    },
    disabled: editMode,
  });

    const toggleEditMode = () =>{
        setEditMode((prev) => !prev);
        setMouseIsOver(false);
    }

    if(editMode){
        return <div 
        className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative"
        
        >
          <textarea className="h-[90%] w-full resize-none border-none bg-transparent text-white focus:outline-none" 
          value={task.content}
          autoFocus
          placeholder="Task Content Here"
          onBlur={toggleEditMode}
          onKeyDown={(e)=>{if(e.key === 'Enter' && e.shiftKey) toggleEditMode();}}
          onChange={(e)=>{updateTask(task.id,e.target.value)}}
          ></textarea>
        </div>
    }

  return (
    <div 
    onClick={toggleEditMode}
    className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative task"
    
    onMouseEnter={()=>{setMouseIsOver(true)}}
    onMouseLeave={()=>{setMouseIsOver(false)}}
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">{task.content}</p>
      {mouseIsOver && (<button
       onClick={()=>{deleteTask(task.id)}}
       className="stroke-white absolute right-4 top-1/3 -traslate-y-1/2 bg-columnBackgroundColor p-2 rounded opacity-60 hover:opacity-100"><DeleteIcon/></button>)}
    </div>
  )
}

export default TaskCard
