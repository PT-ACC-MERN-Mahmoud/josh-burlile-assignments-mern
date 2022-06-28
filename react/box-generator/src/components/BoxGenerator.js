import React, { useState } from 'react';

const BoxGenerator = (props) => {
    const [boxArray, setBoxArray] = props;
    const [color, setColor] = useState("");

    const createBox = (e) => {
        e.preventDefault();

        setBoxArray( [ boxArray, color ] );

    }

    return (
        <div>
                <form class="card" onSubmit={createBox}>
                    <h2>Box Generator</h2>
                    <div class="input-group">
                        <label htmlFor="color">Color</label>
                        <input type="text" name="color" onChange={(e) => setColor(e.target.value)} />
                        <input type="submit" value="Add" />
                    </div>
                </form>
            </div>
    )
};

export default BoxGenerator;
