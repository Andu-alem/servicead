'use client'
import { useState } from 'react';
export default function ServiceDescription ({ editMode, description }) {
    const [editedDescription, setDescription] = useState(description);

    return (
        <div>
            {
                editMode ?
                    (
                        <textarea
                            className="bg-zinc-950 border-0 py-0 w-full text-center resize-none"
                            value={ editedDescription }
                            rows="7"
                            maxLength="550"
                            onChange={ (e) => setDescription(e.target.value) }
                        />
                    ) : (
                        <p>
                            { description }
                        </p>
                    )
            }
        </div>
    );
}