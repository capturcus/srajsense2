export function mainReducer(state = {location: "main"}, action) {
    switch (action.type) {
        case "GO_TO_ADDDATAPOINT":
            var newState = JSON.parse(JSON.stringify(state));
            newState.location = "adddatapoint";
            return newState;
        case "GO_TO_MAIN":
            var newState = JSON.parse(JSON.stringify(state));
            newState.location = "main";
            return newState;
        default:
            return state;
    }
}