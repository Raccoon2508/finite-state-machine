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
      }
      
      
      return this.curState;
      
      
      }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
      let states=Object.keys(this.config.states)
      let triggers=Object.keys(states);
      
      if(triggers.indexOf(event)!=-1){
        this.prevState=this.curState;
        this.curState=triggers[triggers.indexOf(event)];
        
          
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
    getStates(event) {}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
