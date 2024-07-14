import { useEffect, useRef, useDebugValue } from'react';

export  const UsePrevious = (value) => {
    const ref = useRef();

    useDebugValue("--- CUSTOM HOOK E USEDEBUGVALUE ---");
    useDebugValue("O numero anterior e " + value);

    useEffect(() => {
        ref.current = value;
    })

    return ref.current;
}