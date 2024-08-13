import React from 'react'
import style from "./sectionheader.module.css"

// With Props
// export default function SectionHeader(props) {
//     return (
//         <h2 className={style.mainheader}>{props.title}</h2>
//     )
// }


// With Children
export default function SectionHeader({ children }) {
    return (
        <h2 className={style.mainheader}>{children}</h2>
    )
}
