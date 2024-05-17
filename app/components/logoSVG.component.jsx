import * as React from "react"
const MainLogo = (props) => { 
  return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id= {props.logoID}
    data-name={props.logoID}
    viewBox="0 0 303.28 51.96"
    {...props}
    >
    <defs>
      <style>{`.cls-1{fill:${props.color}}`}</style>
    </defs>
    <g id="Layer_1-2" data-name="Layer 1">
      <path
        d="M60.47 45.24h3.42c0 .75-.16 1.82-.83 2.68-.72.92-1.82 1.37-3.07 1.37-2.4 0-4.22-1.76-4.22-4.19s1.88-4.2 4.25-4.2c1.15 0 1.92.39 2.55.88.34.27.65.56.98 1.03l-.43.34c-.23-.39-.56-.72-.78-.9-.51-.43-1.32-.86-2.33-.86-2.09 0-3.68 1.66-3.68 3.74s1.54 3.68 3.64 3.68c1.39 0 2.4-.71 2.84-1.38.32-.49.51-1.16.54-1.69h-2.88v-.49ZM78.85 49.15l-2.64-3.85h-.24v3.85h-.54V41h1.17c.62 0 1.19.05 1.72.42.64.44.84 1.11.84 1.75 0 .81-.35 1.64-1.37 1.98-.43.15-.82.16-1 .16l2.66 3.85h-.61Zm-2.88-4.34h.78c1.16 0 1.86-.61 1.86-1.66 0-.82-.4-1.25-.72-1.42-.34-.2-.93-.24-1.25-.24h-.67v3.32ZM94.76 46.47h-3.47l-1.09 2.68h-.59l3.43-8.4 3.39 8.4h-.59l-1.09-2.68Zm-.2-.49-1.53-3.86-1.55 3.86h3.08ZM108.02 45.28v3.87h-.54V41h1.58c1.33 0 2.38.73 2.38 2.13s-.97 2.15-2.37 2.15h-1.05Zm0-.49h1.08c1.06 0 1.78-.62 1.78-1.65s-.68-1.65-1.87-1.65h-.99v3.3ZM123.24 44.46h4.94V41h.54v8.15h-.54v-4.2h-4.94v4.2h-.54V41h.54v3.46ZM141.23 41v8.15h-.54V41h.54ZM159.73 42.66c-.7-.82-1.7-1.28-2.75-1.28-2.09 0-3.65 1.67-3.65 3.74 0 2.42 2.02 3.68 3.67 3.68.82 0 1.91-.33 2.74-1.23v.71c-.83.73-1.83 1.01-2.71 1.01-2.44 0-4.25-1.92-4.25-4.19s1.88-4.2 4.23-4.2c1.55 0 2.49.83 2.74 1.06v.71ZM183.89 49.15V41h1.61c.72 0 1.98.11 3.01 1.14.87.87 1.17 2.05 1.17 2.94s-.31 2.07-1.17 2.93c-1.03 1.03-2.29 1.14-3.01 1.14h-1.61Zm.54-.49h1.06c2.15 0 3.63-1.47 3.63-3.58s-1.49-3.59-3.63-3.59h-1.06v7.17ZM205.13 41.49h-3.37v2.96h3.3v.49h-3.3v3.73h3.37v.49h-3.91v-8.15h3.91v.49ZM220.38 42.38c-.5-.98-1.38-1-1.6-1-.97 0-1.52.7-1.52 1.52 0 .88.61 1.17 1.43 1.58.81.39 1.21.56 1.63.86.35.24.87.67.87 1.58 0 1.37-1.15 2.38-2.54 2.38-1.05 0-1.59-.5-1.89-.86a2.8 2.8 0 0 1-.53-.89l.46-.22c.11.32.32.64.44.78.37.46.97.7 1.53.7 1.1 0 1.97-.81 1.97-1.88 0-.44-.17-.9-.79-1.28-.23-.13-.71-.38-1.38-.71-.81-.39-1.21-.61-1.49-1.08-.18-.31-.26-.61-.26-.93 0-.94.64-2.03 2.09-2.03.82 0 1.56.39 1.98 1.16l-.39.33ZM233.26 41v8.15h-.54V41h.54ZM249.49 45.24h3.42c0 .75-.16 1.82-.83 2.68-.72.92-1.82 1.37-3.07 1.37-2.4 0-4.22-1.76-4.22-4.19s1.88-4.2 4.25-4.2c1.15 0 1.92.39 2.55.88.34.27.65.56.98 1.03l-.43.34c-.23-.39-.56-.72-.78-.9-.51-.43-1.32-.86-2.33-.86-2.09 0-3.68 1.66-3.68 3.74s1.54 3.68 3.64 3.68c1.39 0 2.4-.71 2.84-1.38.32-.49.51-1.16.54-1.69h-2.88v-.49ZM264.44 49.15v-8.24l6.84 7.16v-7.08h.54v8.36l-6.84-7.16v6.95h-.54ZM287.71 41.49h-3.37v2.96h3.3v.49h-3.3v3.73h3.37v.49h-3.91v-8.15h3.91v.49ZM302.67 49.15l-2.64-3.85h-.24v3.85h-.54V41h1.17c.62 0 1.19.05 1.72.42.64.44.84 1.11.84 1.75 0 .81-.35 1.64-1.37 1.98-.43.15-.82.16-1 .16l2.66 3.85h-.61Zm-2.89-4.34h.78c1.16 0 1.86-.61 1.86-1.66 0-.82-.4-1.25-.72-1.42-.34-.2-.93-.24-1.25-.24h-.67v3.32ZM182.2 14.04c.01-2.86.26-5.36.74-7.51h-9.38c.3 1.37.45 3.95.47 7.73v22.76h12.17l1.5-6.95-5.5.31V14.04ZM214.61 6.69c-.67.07-1.3.3-1.9.67-.85.55-1.44 1.53-1.76 2.95-.12.52-.23 1.41-.34 2.68s-.16 2.38-.16 3.33v9.72c-.03 3.68.17 6.31.6 7.91.36 1.43 1.17 2.35 2.43 2.75.6.19 2.28.31 5.05.34h7.66v-6.63h-7.57v-5.29h7.57v-6.63h-7.57V13.2h7.57V6.57h-7.66c-1.89.03-3.2.08-3.93.16ZM249.66 37.03h8.18V25.1H263v-6.64h-5.16v-5.29H263V6.54h-13.34v30.49zM269.11 6.69c-.67.07-1.3.3-1.9.67-.85.55-1.44 1.53-1.76 2.95-.12.52-.23 1.41-.34 2.68s-.16 2.38-.16 3.33v9.72c-.03 3.68.17 6.31.6 7.91.36 1.43 1.17 2.35 2.43 2.75.6.19 2.28.31 5.05.34h7.66v-6.63h-7.57v-5.29h7.57v-6.63h-7.57V13.2h7.57V6.57h-7.66c-1.89.03-3.2.08-3.93.16ZM171.37 17.77c.12-.49.18-1.42.18-2.79v-3.6c.01-1.55.05-2.52.11-2.93.06-.51.24-1.15.54-1.92h-8.13c-.46 1.09-.69 2.42-.69 4v3.48c0 1.01-.02 1.68-.07 2.01-.09.98-.33 1.66-.71 2.03-.28.25-.77.39-1.47.4h-1.21V6.54H50.85c-.32 0-.49.36-.3.61 4.01 5.22 6.41 11.75 6.41 18.83 0 .18-.01.35-.01.53 0 .16.01.32.01.47 0 1.67-.16 3.29-.47 4.87h13.19v-3.02h-3.55c-1.09 0-1.89-.13-2.41-.4-.48-.27-.8-.77-.98-1.46V16.23c.25-.86.72-1.48 1.4-1.86.58-.3 1.67-.45 3.26-.45h8.98v5.52h-6.61v2.77h2.57c2.13-.03 3.54.44 4.24 1.41.34.57.54 1.53.58 2.9.01.36.02 1.07.02 2.14v3.26c0 .33-.03.8-.1 1.41-.07.61-.13 1.06-.19 1.36-.18.85-.69 1.54-1.54 2.08-.15.09-.35.17-.56.24h7.42-.02c-.66-.23-1.17-.6-1.54-1.11-.64-.91-.94-2.26-.89-4.04V20.33h-1.97v-5.52h1.97V9.27h7.3v5.54h3.46v5.52h-3.46v9.87c0 .51.07.87.22 1.09.22.34.66.52 1.32.54h1.92v5.18h3.74c-.56-.16-1-.38-1.32-.66-.55-.55-.86-1.56-.94-3.04-.01-.39-.02-1.14-.02-2.26v-12.4c.01-1.76.38-2.99 1.09-3.69.51-.49 1.37-.8 2.59-.94.63-.07 1.39-.11 2.3-.11h5.76c2.52.03 4.18.39 4.98 1.07.64.52 1 1.29 1.07 2.3.01.27.02.82.02 1.65v9.63H99.25v1.23c0 .86.19 1.42.56 1.68.34.24 1.02.36 2.03.36h7.95v5.18h6.65c-1.53-1.81-2.85-4.18-3.96-7.12-.71-1.82-1.09-4.3-1.14-7.46v-8.51h7.28v8.47c0 1.98.1 3.66.31 5.03s.66 2.67 1.34 3.89c.67-1.24 1.11-2.53 1.32-3.89.21-1.37.31-3.05.31-5.03v-8.47h7.28v8.51c-.06 3.43-.55 6.21-1.47 8.35-1.09 2.56-2.3 4.63-3.64 6.23h9.01c-.56-.16-1-.38-1.32-.66-.55-.55-.86-1.56-.94-3.04-.01-.39-.02-1.14-.02-2.26v-12.4c.01-1.76.38-2.99 1.09-3.69.51-.49 1.37-.8 2.59-.94.63-.07 1.39-.11 2.3-.11h5.76c2.52.03 4.18.39 4.98 1.07.64.52 1 1.29 1.07 2.3.01.27.02.82.02 1.65v9.63h-10.54v1.23c0 .86.19 1.42.56 1.68.34.24 1.02.36 2.03.36h7.95v5.18h11.24V25.08h1.07c1.19.01 1.94.63 2.26 1.83.09.31.13.97.13 1.97v2.79c0 1.28.06 2.32.18 3.13.12.71.39 1.45.8 2.21h7.84c-.25-.82-.42-1.56-.51-2.23-.09-.73-.13-1.82-.13-3.26v-4.27c0-1.67-.3-2.93-.89-3.78-.74-.98-1.97-1.6-3.69-1.85-.15-.01-.47-.07-.96-.16 1.06-.21 1.81-.37 2.26-.49 1.68-.54 2.72-1.61 3.11-3.22Z"
        className="cls-1"
      />
      <path
        d="M141.05 20.33c-.31-.57-.74-.85-1.3-.85-1.09 0-1.63.85-1.63 2.55v2.12h3.26v-2.12c0-.74-.11-1.31-.34-1.7ZM102.21 20.33c-.31-.57-.74-.85-1.3-.85-1.09 0-1.63.85-1.63 2.55v2.12h3.26v-2.12c0-.74-.11-1.31-.34-1.7ZM205.26 7.56c-1.1-.67-2.71-1.01-4.83-1.03h-3.69c-2.11.01-3.72.36-4.83 1.03-1.59.95-2.6 2.86-3.02 5.72-.16 1.43-.25 3.31-.25 5.63v5.72c0 2.32.08 4.2.25 5.63.42 2.87 1.42 4.79 3.02 5.74 1.1.67 2.71 1.01 4.83 1.03h3.69c2.11-.01 3.72-.36 4.83-1.03 1.59-.95 2.59-2.87 2.99-5.74.18-1.43.27-3.31.27-5.63v-5.72c0-2.32-.09-4.2-.27-5.63-.4-2.86-1.4-4.77-2.99-5.72Zm-5.07 20.74c0 .73-.13 1.28-.38 1.65-.36.5-.81.76-1.36.76-.47 0-.89-.2-1.25-.6-.34-.39-.51-.99-.51-1.8V15.2c0-.73.13-1.27.38-1.62.36-.5.82-.76 1.38-.76.46 0 .87.2 1.22.6.34.37.51.96.51 1.78v13.11ZM246.57 7.41c-.66-.55-2.32-.84-5-.87h-13.22v30.49h8.18V25.1h5.7c1.07 0 1.76 0 2.06-.02 1.36-.1 2.3-.57 2.84-1.39.64-.91 1.01-3.21 1.12-6.9v-2.32c0-1.34-.07-2.52-.2-3.53-.19-1.67-.68-2.84-1.45-3.53Zm-7.4 10.52c-.27.31-.79.47-1.58.47h-1.36v-5.3h1.16c.91 0 1.5.21 1.78.62.36.49.53 1.2.53 2.14s-.18 1.65-.53 2.07ZM302.63 31.91V27.2c.07-2.25-.54-3.83-1.83-4.74-.55-.36-1.43-.71-2.64-1.07 1.18-.13 2.04-.39 2.59-.78.95-.7 1.54-1.82 1.76-3.35.07-.57.11-1.53.11-2.88v-1.97c-.01-1.37-.19-2.53-.54-3.48-.45-1.33-1.41-2.08-2.88-2.26-.73-.09-2.02-.13-3.86-.13h-12.51v30.49h8.18V25.1h1.03c.73 0 1.3.17 1.72.51.45.39.68 1.12.69 2.21v4.07c-.01 2.13.19 3.84.63 5.14h8.2c-.42-1.33-.63-3.03-.65-5.12Zm-9.15-13.94c-.27.28-.86.42-1.78.42h-1.16v-5.3h1.16c.76 0 1.28.13 1.58.38.49.43.73 1.19.73 2.27s-.18 1.85-.53 2.23ZM25.98 0C11.65 0 0 11.65 0 25.98s11.65 25.98 25.98 25.98 25.98-11.65 25.98-25.98S40.3 0 25.98 0Zm0 50.55c-9.32 0-17.43-5.19-21.6-12.84h5.64v-3.45H5.96c-1.24 0-2.16-.15-2.76-.46-.8-.41-.93-1.31-1.12-2.09-.15-.62-.28-1.26-.38-1.89-.2-1.28-.31-2.57-.31-3.86 0-1.22.09-2.43.27-3.64.09-.6.2-1.19.34-1.79.13-.56.18-1.12.47-1.62.28-.49.71-.92 1.22-1.18.66-.34 1.91-.51 3.73-.51h10.27v6.31h-7.56v3.17h2.94c2.44-.03 4.05.5 4.85 1.61.39.65.61 1.75.66 3.32.02.41.03 1.23.03 2.45v3.73c0 .37-.04.91-.11 1.61-.08.7-.15 1.22-.22 1.56-.2.97-.79 1.76-1.76 2.38-.23.14-.53.25-.87.34h11.02V30.06h1.23c1.36.02 2.22.72 2.58 2.09.1.36.15 1.11.15 2.25v3.19c0 1.46.07 2.66.2 3.58.14.82.44 1.66.92 2.53h8.97c-.29-.94-.49-1.79-.59-2.55-.1-.83-.15-2.08-.15-3.73v-4.88c0-1.91-.34-3.35-1.02-4.32-.85-1.12-2.26-1.83-4.22-2.12-.17-.02-.54-.08-1.1-.18 1.21-.24 2.07-.43 2.58-.56 1.92-.61 3.11-1.84 3.55-3.68.14-.56.2-1.63.2-3.19v-4.11c.02-1.77.06-2.89.13-3.35.07-.58.27-1.31.61-2.2h-9.3c-.53 1.24-.79 2.77-.79 4.57v3.99c0 1.16-.03 1.92-.08 2.3-.1 1.12-.37 1.9-.82 2.32-.32.29-.89.44-1.69.46h-1.38V1.41c13.27.36 23.92 11.2 23.92 24.55S39.56 50.55 25.98 50.55Z"
        className="cls-1"
      />
    </g>
  </svg>
);}
export default MainLogo;