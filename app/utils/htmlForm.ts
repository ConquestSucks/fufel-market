import { FormEvent } from "react";

function getFormData(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    return Object.fromEntries(formData.entries());
}

export default getFormData