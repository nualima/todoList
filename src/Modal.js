import React from "react";

export default function Modal(props) {
    function close() {
        console.log("close");
    }

return (
    <div>
        <h1>Adding a new Person</h1>
        <form id='personForm' onSubmit={e => props.addPerson(e)}>
            <p>name<br/><input placeholder="Enter name" name="name" required="required"/></p>
            <p>password
                <br/><input type="password" name="password" required="required"/></p>
            <div id="buttons">
                <button type="submit">OK</button>
                <button type="button" onClick={close}>Cancel</button>
            </div>
        </form>
    </div>
);
}