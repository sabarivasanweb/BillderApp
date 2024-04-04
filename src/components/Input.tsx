import { TextInput } from "react-native";

function Input({ onChange }: { onChange?: Function}) {
    return <TextInput
    className={"rounded-md border text-lg border-slate-300 focus:border-black w-full py-2 px-3 focus:outline-none text-black my-3"}
    onChange={(e) => console.log(e)}
  />
}

export default Input;