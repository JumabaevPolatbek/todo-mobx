import { makeAutoObservable } from "mobx"
import React from "react"


type StoreDataType={
    todo:string,
    completed:boolean
}


 class Store{
    storeData:StoreDataType[]=[{todo:'Learn CSS',completed:false},{todo:'Learn JS',completed:false}];
    constructor(){
        makeAutoObservable(this)
    }
    toggleCompleted(todoChange:string){
        var idTodo = this.storeData.findIndex(todo=>todo.todo===todoChange);
        this.storeData[idTodo].completed=!this.storeData[idTodo].completed;
    }
    getCompletedCounter(){
        var count=0;
        this.storeData.forEach((todo)=>{
            if(todo.completed){
                count++;
            }
        })
        return count
    }
}

export default new Store()