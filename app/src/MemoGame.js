class MemoGame {
    constructor(engine) {
        this.engine = engine;
    }

    addState(state) {
        this.engine.state.add(state.getName(), state);

    }

    start(state) {
        this.engine.state.start(state.getName());
    }
}


export default MemoGame;