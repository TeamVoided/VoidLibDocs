import {useState} from "react";

export function LatestRelease() {
    const [val, setVal] = useState()
    fetch("https://maven.teamvoided.org/api/maven/latest/version/releases/org/teamvoided/voidlib-core")
        .then(async e => setVal(await e.json()))
    return (
        <>
            {!!val && JSON.parse(JSON.stringify(val)).version}
        </>
    )
}
