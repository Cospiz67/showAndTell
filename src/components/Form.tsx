import SubmitButton from "./SubmitButton";
import { useActionState, useOptimistic } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display:flex;
    justify-content: center;
`
const StyledForm = styled.form`
    display:flex;
    flex-direction: column;
    margin: 10%;
    padding: 6%;
    border-radius: 20px;
    background-color: #49e092;
`
const StyledInput = styled.input`
    margin: 10% 0;
`
//USEFORMSTATUS
export default function Form(){

    async function someAction(){
        await new Promise((resolve) => {
            setTimeout(resolve, 3000);
        });
        alert("Done!");
    }

    return(
        <StyledDiv>
            <StyledForm action={someAction}>
                <label htmlFor = "Name">Name:</label>
                <StyledInput required autoComplete="off" name="text" />
                <SubmitButton/>
            </StyledForm>
        </StyledDiv>
    )
}


//USEACTIONSTATE
// export default function Form(){
//     const [message, action, isPending] = useActionState(someAction, "");

//     async function someAction(prevMessage:string, formData: FormData): Promise<string>{
//         const name = formData.get("text");
//         await new Promise((resolve) => {
//             setTimeout(resolve, 3000);
//         });
//         console.log(prevMessage);
//         return `Hello ${name}`;
//     }

//     return(
//         <StyledDiv>
//             <StyledForm action={action}>
//                 <label htmlFor = "Name">Name:</label>
//                 <StyledInput required autoComplete="off" name="text" />
//                 <button type ="submit" disabled={isPending}>
//                     {isPending ? "Sending..." : "Send"}
//                 </button>

//                 <p>{message}</p>
//             </StyledForm>
//         </StyledDiv>
//     )
// }

//USEOPTIMISTIC
// export default function Form() {
//     const [optimisticMessage, setOptimisticMessage] = useOptimistic("");
//     const [message, action, isPending] = useActionState(someAction, "");

//     async function someAction(prevMessage: string, formData: FormData): Promise<string> {
//         const name = formData.get("text");

//         setOptimisticMessage(`Hello ${name} (sending...)`);

//         await new Promise((resolve) => {
//             setTimeout(resolve, 3000);
//         });
//         console.log(prevMessage);
//         return `Hello ${name}`;
//     }

//     return (
//         <StyledDiv>
//             <StyledForm action={action}>
//                 <label htmlFor="Name">Name:</label>
//                 <StyledInput required autoComplete="off" name="text" />
//                 <button type="submit" disabled={isPending}>
//                     {isPending ? "Sending..." : "Send"}
//                 </button>
//                 <p>{isPending ? optimisticMessage : message}</p>
//             </StyledForm>
//         </StyledDiv>
//     )
// }