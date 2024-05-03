const nameHistory = "history"

export class LocalStorage{
    constructor(){
        this.history = localStorage.getItem(nameHistory);
        if (this.history === null){
            this.clearHistory();
        }
       
        this.history = JSON.parse(this.history)
    }
    addToHistory(item=[]){
        this.history.push(item);
        localStorage.setItem(nameHistory, JSON.stringify(this.history));
    }
    getHistory(){
        return this.history[this.history.length-1];
    }
    clearHistory(){
        localStorage.setItem(nameHistory, JSON.stringify([]));

    }
}