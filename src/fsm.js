class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
      this.curState="normal";
      this.prevState=null;
      this.nextState=null;
      this.config=config.initial;
      this.states=config.states;
      
      }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
      return this.curState;
      
      }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
      let states=Object.keys(this.states);
     
      if(states.indexOf(state)!=-1){
        this.prevState=this.curState;
        this.curState=states[states.indexOf(state)];
        return this.curState;
      }else{
        throw new Error("state isn't exist");


      }
      
      
      
      
      }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
      let triggers=Object.keys(this.states[this.curState].transitions);
      
      
      
      if(triggers.indexOf(event)!=-1){
        this.prevState=this.curState;
        this.curState=this.states[this.curState].transitions[event];
        return this.curState;          
        }else{
          throw new Error("event in current state isn't exist");

        }
        
     
      }

    /**
     * Resets FSM state to initial.
     */
    reset() {
      this.prevState=null;
      this.nextState=null;
      this.curState="normal";
      }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
      let result=Object.keys(this.states);
      
      
     if(!event){
      return result;
      }else{
     return result.filter(state => this.states[state].transitions[event]);
      }
      
      
      
      }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
      if(this.prevState!==null){
      this.nextState=this.curState;
      this.curState=this.prevState;
      this.prevState=null;
      return true;
      }
        return false;
       
      }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
      
      if(this.nextState!==null){
      this.prevState=this.curState;
      this.curState=this.nextState;
      this.nextState=null;
      return true;
      }else{
      return false;  
      }
    }

    /**
     * Clears transition history
     */
    clearHistory() {
      this.prevState=null;
      this.nextState=null;
      }
}
module.exports = FSM;

/** @Created by Uladzimir Halushka **/
