import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

export default function UsernameBox() {
    const [user1, setUser1] = useState("");
    const [user2, setUser2] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`submitting! ${user1}, ${user2}`);
    };

    return (
        <form noValidate onSubmit={handleSubmit} autoComplete="off">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    paddingTop: "40px",
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="User 1"
                    variant="outlined"
                    onChange={(e) => setUser1(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    disabled={!(user1 && user2)}
                >
                    Compare!
                </Button>
                <TextField
                    id="outlined-basic"
                    label="User 2"
                    variant="outlined"
                    onChange={(e) => setUser2(e.target.value)}
                />
            </div>
        </form>
    );
}
