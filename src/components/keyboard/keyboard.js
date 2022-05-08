import CreateBlock from "../../scripts/createblock";

const CreateKeyboard = function RenderKeyboard(wrapper, textarea){
    const line = CreateBlock("div", "keyboard__line");
    const button = CreateBlock("button", "keyboard__button");
    return [line, button];
}

export default CreateKeyboard;