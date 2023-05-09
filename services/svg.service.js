const noteSvgs = {
    lightBolb: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>`,
    bell: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"></path></svg>`,
    tag: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></svg>`,
    pencil: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path></svg>`,
    archive: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path></svg>`,
    trash: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>`,
    bars: `<svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>`,
    dots: `<svg class="gb_Ve" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>`,
    settings: `<svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>`,
    colorPicker: '<svg class="hxXJme-LgbsSe-hxXJme-edvN0e" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path class="hxXJme-Jt5cK" d="m0 0h18v18h-18z"></path><path class="gk6SMd-Jt5cK" d="m6.61 11.89l-3.11-3.11-1.06 1.06 4.17 4.16 8.95-8.95-1.06-1.05z"></path></svg>',
    vColorPicker: '<svg width="18" height="18" viewBox="0 0 24 24" focusable="false" class="hxXJme-LgbsSe-gk6SMd-g6cJHd NMm5M"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>',
    location: '<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18"><path d="M10 9.625q.542 0 .917-.375t.375-.917q0-.541-.375-.916T10 7.042q-.542 0-.917.375t-.375.916q0 .542.375.917t.917.375Zm0 7.125q2.583-2.25 3.958-4.49 1.375-2.239 1.375-3.76 0-2.458-1.541-3.979Q12.25 3 10 3T6.208 4.521Q4.667 6.042 4.667 8.5q0 1.521 1.375 3.76Q7.417 14.5 10 16.75Zm0 1.271q-3.167-2.854-4.708-5.219Q3.75 10.438 3.75 8.5q0-2.958 1.875-4.687Q7.5 2.083 10 2.083t4.375 1.73Q16.25 5.542 16.25 8.5q0 1.938-1.542 4.302-1.541 2.365-4.708 5.219ZM10 8.5Z"/></svg>',
    colorPickerNone: '<svg width="18" height="18" viewBox="0 0 24 24" focusable="false" class="zTETae-hxXJme-LgbsSe-Bz112c NMm5M"><path d="M21.19 21.19l-3.06-3.06-1.43-1.43-8.3-8.3L7 7 2.81 2.81 1.39 4.22l4.25 4.25A8.056 8.056 0 0 0 4.01 13H4c0 4.42 3.58 8 8 8 1.74 0 3.35-.57 4.66-1.51l3.12 3.12 1.41-1.42zM12 19c-3.22 0-5.86-2.55-5.99-5.74l.01-.19c.04-1.14.42-2.25 1.06-3.18l8.16 8.16c-.95.6-2.05.95-3.24.95zm0-14.17l4.25 4.24a6.014 6.014 0 0 1 1.74 4.01l.01.17c-.02.56-.13 1.11-.3 1.62l1.53 1.53c.49-1.03.77-2.18.77-3.4h-.01a7.975 7.975 0 0 0-2.33-5.35L12 2 8.41 5.58 9.83 7 12 4.83z"></path></svg>',
    checkBox: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10.6 15.5 17 9.1l-.7-.7-5.7 5.7-2.85-2.85-.7.7ZM5.625 20q-.7 0-1.162-.462Q4 19.075 4 18.375V5.625q0-.7.463-1.162Q4.925 4 5.625 4h12.75q.7 0 1.163.463.462.462.462 1.162v12.75q0 .7-.462 1.163-.463.462-1.163.462Zm0-1h12.75q.25 0 .437-.188.188-.187.188-.437V5.625q0-.25-.188-.437Q18.625 5 18.375 5H5.625q-.25 0-.437.188Q5 5.375 5 5.625v12.75q0 .25.188.437.187.188.437.188ZM5 5v14V5Z"/></svg>',
    img: `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25Zm2.15-2.65h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM5 19V5 19Z"/></svg>`,
    pencil2: `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.5 19.2q-.425 0-.85-.1t-.8-.3q.45-.425.7-.988.25-.562.25-1.312 0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213 0 1.125-.787 1.913-.788.787-1.913.787Zm0-.7q.825 0 1.412-.587.588-.588.588-1.413 0-.425-.287-.713-.288-.287-.713-.287t-.713.287q-.287.288-.287.713 0 .575-.137 1.05-.138.475-.363.9.125.05.25.05h.25Zm4.6-4.15-1.4-1.4L17.65 5q.275-.275.687-.288.413-.012.713.288t.3.7q0 .4-.3.7ZM7.5 16.5Z"/></svg>`,
    paint: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11 20.95q-.3 0-.5-.2t-.2-.5v-5.8H7q-.65 0-1.075-.425Q5.5 13.6 5.5 12.95v-6.7q0-.9.65-1.55t1.55-.65h10.8v8.9q0 .65-.425 1.075-.425.425-1.075.425h-3.3v5.8q0 .3-.2.5t-.5.2Zm-4.8-10.4h11.6v-5.8h-1.75V8.5h-.7V4.75h-2v2h-.7v-2H7.7q-.65 0-1.075.425Q6.2 5.6 6.2 6.25Zm.8 3.2h10q.35 0 .575-.225.225-.225.225-.575v-1.7H6.2v1.7q0 .35.225.575.225.225.575.225Zm-.8-2.5v2.5V12.95Z"/></svg>',
    text1: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10.3 7.65h7.05v-.7H10.3Zm0 2.7h7.05v-.7H10.3Zm0 2.7h4.05v-.7H10.3ZM7.2 8q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.475 6.6 7.2 6.6t-.487.212Q6.5 7.025 6.5 7.3t.213.487Q6.925 8 7.2 8Zm0 2.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.475 9.3 7.2 9.3t-.487.212Q6.5 9.725 6.5 10t.213.487q.212.213.487.213Zm0 2.7q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q7.475 12 7.2 12t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Zm-3.9 6.1V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1Zm.7-1.7L5.8 16h13.4q.35 0 .575-.225Q20 15.55 20 15.2V4.8q0-.35-.225-.575Q19.55 4 19.2 4H4.8q-.35 0-.575.225Q4 4.45 4 4.8Zm0-13V4v13.8Z"/></svg>',
    text2: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.5 19.2q-.425 0-.85-.1t-.8-.3q.45-.425.7-.988.25-.562.25-1.312 0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213 0 1.125-.787 1.913-.788.787-1.913.787Zm0-.7q.825 0 1.412-.587.588-.588.588-1.413 0-.425-.287-.713-.288-.287-.713-.287t-.713.287q-.287.288-.287.713 0 .575-.137 1.05-.138.475-.363.9.125.05.25.05h.25Zm4.6-4.15-1.4-1.4L17.65 5q.275-.275.687-.288.413-.012.713.288t.3.7q0 .4-.3.7ZM7.5 16.5Z"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm7.2-6.85-8-5.3V17.2q0 .35.225.575Q4.45 18 4.8 18h14.4q.35 0 .575-.225Q20 17.55 20 17.2V6.55Zm0-.85 7.6-5H4.4ZM4 6.55V6 17.2q0 .35.225.575Q4.45 18 4.8 18H4V17.2Z"/></svg>',
    more: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE4IDE4IiAgZmlsbD0iIzAwMCI+CiAgPHBhdGggZD0ibTkgNS41YzEgMCAxLjgtMC44IDEuOC0xLjhzLTAuOC0xLjctMS44LTEuNy0xLjggMC44LTEuOCAxLjggMC44IDEuNyAxLjggMS43em0wIDEuN2MtMSAwLTEuOCAwLjgtMS44IDEuOHMwLjggMS44IDEuOCAxLjggMS44LTAuOCAxLjgtMS44LTAuOC0xLjgtMS44LTEuOHptMCA1LjNjLTEgMC0xLjggMC44LTEuOCAxLjhzMC44IDEuNyAxLjggMS43IDEuOC0wLjggMS44LTEuOC0wLjgtMS43LTEuOC0xLjd6Ii8+Cjwvc3ZnPgo=',
    deleteForever: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwMDAwMCI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz4KICAgIDxwYXRoIGQ9Ik02IDE5YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3SDZ2MTJ6bTIuNDYtNy4xMmwxLjQxLTEuNDFMMTIgMTIuNTlsMi4xMi0yLjEyIDEuNDEgMS40MUwxMy40MSAxNGwyLjEyIDIuMTItMS40MSAxLjQxTDEyIDE1LjQxbC0yLjEyIDIuMTItMS40MS0xLjQxTDEwLjU5IDE0bC0yLjEzLTIuMTJ6TTE1LjUgNGwtMS0xaC01bC0xIDFINXYyaDE0VjR6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+Cjwvc3ZnPgo=',
    add: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M454.001 805.999v-204h-204v-51.998h204v-204h51.998v204h204v51.998h-204v204h-51.998Z"/></svg>`,
    plusBell: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTMgOWgtMnYySDl2MmgydjJoMnYtMmgydi0yaC0yeiIvPgogIDxwYXRoIGQ9Ik0xOCAxN3YtNmMwLTMuMDctMS42My01LjY0LTQuNS02LjMyVjRjMC0uODMtLjY3LTEuNS0xLjUtMS41cy0xLjUuNjctMS41IDEuNXYuNjhDNy42NCA1LjM2IDYgNy45MiA2IDExdjZINHYyaDE2di0yaC0yem0tMiAwSDh2LTZjMC0yLjQ4IDEuNTEtNC41IDQtNC41czQgMi4wMiA0IDQuNXY2em0tNCA1YzEuMSAwIDItLjkgMi0yaC00YzAgMS4xLjkgMiAyIDJ6Ii8+Cjwvc3ZnPgo=`,
    colorPallet: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMjJDNi40OSAyMiAyIDE3LjUxIDIgMTJTNi40OSAyIDEyIDJzMTAgNC4wNCAxMCA5YzAgMy4zMS0yLjY5IDYtNiA2aC0xLjc3Yy0uMjggMC0uNS4yMi0uNS41IDAgLjEyLjA1LjIzLjEzLjMzLjQxLjQ3LjY0IDEuMDYuNjQgMS42N0EyLjUgMi41IDAgMCAxIDEyIDIyem0wLTE4Yy00LjQxIDAtOCAzLjU5LTggOHMzLjU5IDggOCA4Yy4yOCAwIC41LS4yMi41LS41YS41NC41NCAwIDAgMC0uMTQtLjM1Yy0uNDEtLjQ2LS42My0xLjA1LS42My0xLjY1YTIuNSAyLjUgMCAwIDEgMi41LTIuNUgxNmMyLjIxIDAgNC0xLjc5IDQtNCAwLTMuODYtMy41OS03LTgtN3oiLz48Y2lyY2xlIGN4PSI2LjUiIGN5PSIxMS41IiByPSIxLjUiLz4KICA8Y2lyY2xlIGN4PSI5LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE0LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxMS41IiByPSIxLjUiLz4KPC9zdmc+Cg==`,
    bookMark: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDRhMiAyIDAgMCAwLTItMkg5Yy0xLjEgMC0yIC45LTIgMnY3bC0yIDN2Mmg2djVsMSAxIDEtMXYtNWg2di0ybC0yLTNWNHoiLz4KPC9zdmc+Cg==`,
    bookMarkEmpty: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==`,
    listDisplay: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGlkPSJsaXN0X3ZpZXdfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBkPSJNMjAsOSBMNCw5IEw0LDUgTDIwLDUgTDIwLDkgWiBNMjAsMTkgTDQsMTkgTDQsMTUgTDIwLDE1IEwyMCwxOSBaIE0zLDMgQzIuNDUsMyAyLDMuNDUgMiw0IEwyLDEwIEMyLDEwLjU1IDIuNDUsMTEgMywxMSBMMjEsMTEgQzIxLjU1LDExIDIyLDEwLjU1IDIyLDEwIEwyMiw0IEMyMiwzLjQ1IDIxLjU1LDMgMjEsMyBMMywzIFogTTMsMTMgQzIuNDUsMTMgMiwxMy40NSAyLDE0IEwyLDIwIEMyLDIwLjU1IDIuNDUsMjEgMywyMSBMMjEsMjEgQzIxLjU1LDIxIDIyLDIwLjU1IDIyLDIwIEwyMiwxNCBDMjIsMTMuNDUgMjEuNTUsMTMgMjEsMTMgTDMsMTMgWiIgaWQ9Imljb24iIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K`,
    gridDisplay: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMywzIEwxMCwzIEMxMC41NSwzIDExLDMuNDUgMTEsNCBMMTEsMTAgQzExLDEwLjU1IDEwLjU1LDExIDEwLDExIEwzLDExIEMyLjQ1LDExIDIsMTAuNTUgMiwxMCBMMiw0IEMyLDMuNDUgMi40NSwzIDMsMyBaIE0zLDEzIEwxMCwxMyBDMTAuNTUsMTMgMTEsMTMuNDUgMTEsMTQgTDExLDIwIEMxMSwyMC41NSAxMC41NSwyMSAxMCwyMSBMMywyMSBDMi40NSwyMSAyLDIwLjU1IDIsMjAgTDIsMTQgQzIsMTMuNDUgMi40NSwxMyAzLDEzIFogTTE0LDMgTDIxLDMgQzIxLjU1LDMgMjIsMy40NSAyMiw0IEwyMiwxMCBDMjIsMTAuNTUgMjEuNTUsMTEgMjEsMTEgTDE0LDExIEMxMy40NSwxMSAxMywxMC41NSAxMywxMCBMMTMsNCBDMTMsMy40NSAxMy40NSwzIDE0LDMgWiBNMTQsMTMgTDIxLDEzIEMyMS41NSwxMyAyMiwxMy40NSAyMiwxNCBMMjIsMjAgQzIyLDIwLjU1IDIxLjU1LDIxIDIxLDIxIEwxNCwyMSBDMTMuNDUsMjEgMTMsMjAuNTUgMTMsMjAgTDEzLDE0IEMxMywxMy40NSAxMy40NSwxMyAxNCwxMyBaIE05LDkgTDksNSBMNCw1IEw0LDkgTDksOSBaIE05LDE5IEw5LDE1IEw0LDE1IEw0LDE5IEw5LDE5IFogTTIwLDkgTDIwLDUgTDE1LDUgTDE1LDkgTDIwLDkgWiBNMjAsMTkgTDIwLDE1IEwxNSwxNSBMMTUsMTkgTDIwLDE5IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJncmlkX3ZpZXdfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiPjwvcG9seWdvbj4KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDx1c2UgaWQ9Imljb24iIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICA8L2c+Cjwvc3ZnPgo=`,
    search: `<svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg>`,
    inbox: '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M197.694 915.999q-23.529 0-40.611-17.082-17.082-17.082-17.082-40.611V293.694q0-23.529 17.082-40.611 17.082-17.082 40.611-17.082h564.612q23.529 0 40.611 17.082 17.082 17.082 17.082 40.611v564.612q0 23.529-17.082 40.611-17.082 17.082-40.611 17.082H197.694Zm0-45.384h564.612q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847V731.153H623.999q-22.923 39.616-62.001 60.923-39.078 21.308-82.076 21.308-42.999 0-81.999-21.308-38.999-21.307-61.922-60.923H185.385v127.153q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462ZM480.219 768q40.012 0 72.435-23.115T605 685.77h169.615V293.694q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H197.694q-5.385 0-8.847 3.462-3.462 3.462-3.462 8.847V685.77H355q19.923 36 52.565 59.115Q440.206 768 480.219 768ZM197.694 870.615h-12.309 589.23H197.694Z"/></svg>',
    home: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M264 840h109.847V602.308h212.306V840H696V492L480 329.231 264 492v348Zm-51.999 51.999V466.001L480 264.233l267.999 201.768v425.998H534.154V654.306H425.846v237.693H212.001ZM480 584.615Z"/></svg>`,
    palette: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M479.231 939.999q-74.769 0-140.923-28.462-66.153-28.461-115.769-78.076-49.615-49.616-78.076-115.962Q116.001 651.154 116.001 576q0-76.154 28.77-141.999 28.769-65.846 79.576-115.654 50.808-49.807 119.038-78.076 68.231-28.27 145.384-28.27 73 0 137.653 25.077 64.654 25.077 112.962 68.808 48.307 43.73 76.461 102.499 28.154 58.769 28.154 126.538 0 84.845-58.731 148.96-58.73 64.116-151.268 64.116h-66.461q-16.078 0-28.809 11.154-12.731 11.154-12.731 28.386 0 21.539 15 29.038 15 7.5 15 47.423 0 26.615-21.423 51.307-21.423 24.692-55.345 24.692ZM480 576Zm-216 25.999q20.384 0 35.192-14.807 14.807-14.808 14.807-35.192t-14.807-35.192Q284.384 502.001 264 502.001t-35.192 14.807Q214.001 531.616 214.001 552t14.807 35.192q14.808 14.807 35.192 14.807Zm120-144q20.384 0 35.192-14.807 14.807-14.808 14.807-35.192t-14.807-35.192Q404.384 358.001 384 358.001t-35.192 14.807Q334.001 387.616 334.001 408t14.807 35.192q14.808 14.807 35.192 14.807Zm192 0q20.384 0 35.192-14.807 14.807-14.808 14.807-35.192t-14.807-35.192Q596.384 358.001 576 358.001t-35.192 14.807Q526.001 387.616 526.001 408t14.807 35.192q14.808 14.807 35.192 14.807Zm120 144q20.384 0 35.192-14.807 14.807-14.808 14.807-35.192t-14.807-35.192Q716.384 502.001 696 502.001t-35.192 14.807Q646.001 531.616 646.001 552t14.807 35.192q14.808 14.807 35.192 14.807ZM479.231 888q11.769 0 18.269-8.308Q504 871.385 504 864q0-16-15-26.461-15-10.462-15-47.693 0-38.769 26.5-66.307Q527 696 565 696h69q70.616 0 114.308-48.885Q792 598.23 792 534.923q0-115.385-89.077-193.154Q613.846 264 488.769 264q-135.154 0-227.961 91Q168 446 168 576t91 221q91 91 220.231 91Z"/></svg>`,
    text: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M449.694 846.306v-480h-192v-60.612h444.612v60.612h-192v480h-60.612Z"/></svg>`,
    todo: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M228.309 891.999q-27.008 0-45.658-18.65-18.65-18.65-18.65-45.658V324.309q0-27.008 18.65-45.658 18.65-18.65 45.658-18.65h503.382q27.008 0 45.658 18.65 18.65 18.65 18.65 45.658v503.382q0 27.008-18.65 45.658-18.65 18.65-45.658 18.65H228.309Zm0-51.999h503.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V324.309q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H228.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v503.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Z"/></svg>`,
    pin: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M603.999 584.462 691.536 672v51.999H505.999v207.998L480 957.996l-25.999-25.999V723.999H268.464V672l87.537-87.538V312h-48v-51.999h343.998V312h-48v272.462ZM342 672h276l-66-66V312H408v294l-66 66Zm138 0Z"/></svg>`,
    pinFull: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M603.999 584.462 691.536 672v51.999H505.999v207.998L480 957.996l-25.999-25.999V723.999H268.464V672l87.537-87.538V312h-48v-51.999h343.998V312h-48v272.462Z"/></svg>`,
    trash: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M324.309 891.999q-26.623 0-45.465-18.843-18.843-18.842-18.843-45.465V360h-48v-51.999H384v-43.384h192v43.384h171.999V360h-48v467.257q0 27.742-18.65 46.242-18.65 18.5-45.658 18.5H324.309ZM648 360H312v467.691q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462h311.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V360ZM400.155 768h51.999V432h-51.999v336Zm107.691 0h51.999V432h-51.999v336ZM312 360V840 360Z"/></svg>`,
    done: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m429 706.153 224.922-223.922-37.153-37.153L429 631.847l-85-84L306.847 585 429 706.153ZM228.309 891.999q-27.008 0-45.658-18.65-18.65-18.65-18.65-45.658V324.309q0-27.008 18.65-45.658 18.65-18.65 45.658-18.65h503.382q27.008 0 45.658 18.65 18.65 18.65 18.65 45.658v503.382q0 27.008-18.65 45.658-18.65 18.65-45.658 18.65H228.309Zm0-51.999h503.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V324.309q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H228.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v503.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846ZM216 312v528-528Z"/></svg>`,
    search: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M762.692 895.076 524.461 656.845q-30 22.769-65.792 35.269t-73.865 12.5q-93.585 0-159.117-65.514t-65.532-159.037q0-93.524 65.514-159.101 65.514-65.576 159.038-65.576 93.523 0 159.1 65.532t65.577 159.117q0 39.227-12.885 75.019-12.885 35.792-34.885 64.638l238.231 238.231-37.153 37.153Zm-377.923-242.46q72.308 0 122.462-50.154Q557.385 552.308 557.385 480q0-72.308-50.154-122.462-50.154-50.154-122.462-50.154-72.308 0-122.462 50.154Q212.154 407.692 212.154 480q0 72.308 50.153 122.462 50.154 50.154 122.462 50.154Z"/></svg>`,
    video: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M394.001 725.537 629.537 576 394.001 426.463v299.074Zm86.342 214.462q-75.112 0-141.48-28.42-66.369-28.42-116.182-78.21-49.814-49.791-78.247-116.087t-28.433-141.673q0-75.378 28.42-141.246 28.42-65.869 78.21-115.682 49.791-49.814 116.087-78.247t141.673-28.433q75.378 0 141.246 28.42 65.869 28.42 115.682 78.21 49.814 49.791 78.247 115.853t28.433 141.173q0 75.112-28.42 141.48-28.42 66.369-78.21 116.182-49.791 49.814-115.853 78.247t-141.173 28.433ZM480 888q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg>`,
    duplicate: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M246.002 932.306q-27.007 0-45.657-18.65-18.65-18.65-18.65-45.657V368.31h51.999v499.689q0 4.615 3.846 8.462 3.846 3.846 8.462 3.846h403.689v51.999H246.002Zm123.999-123.999q-27.008 0-45.658-18.65-18.649-18.649-18.649-45.657V288.617q0-27.007 18.649-45.657 18.65-18.65 45.658-18.65h359.383q27.007 0 45.657 18.65 18.65 18.65 18.65 45.657V744q0 27.008-18.65 45.657-18.65 18.65-45.657 18.65H370.001Zm0-51.998h359.383q4.615 0 8.462-3.847 3.846-3.846 3.846-8.462V288.617q0-4.616-3.846-8.462-3.847-3.846-8.462-3.846H370.001q-4.616 0-8.462 3.846-3.847 3.846-3.847 8.462V744q0 4.616 3.847 8.462 3.846 3.847 8.462 3.847Zm-12.309 0v-480V756.309Z"/></svg>`,
    send: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M180.309 843.999q-27.008 0-45.658-18.662-18.65-18.662-18.65-45.686V372.025q0-27.024 18.65-45.524t45.658-18.5h599.382q27.008 0 45.658 18.662 18.65 18.662 18.65 45.686v407.626q0 27.024-18.65 45.524t-45.658 18.5H180.309ZM480 606.306 168 422.691v357q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462h599.382q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847v-357L480 606.306ZM480 539l305.846-179H174.154L480 539ZM168 422.691V360 779.691q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462H168V422.691Z"/></svg>`,
    bulb: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M480 941.689q-24.077 0-44.577-12.692-20.499-12.692-26.884-35.308H384q-21.538 0-36.768-15.23-15.231-15.23-15.231-36.768v-139.23q-58.538-37.692-89.269-97.385Q212.001 545.384 212.001 480q0-111.922 78.038-189.961Q368.078 212.001 480 212.001q111.922 0 189.961 78.038Q747.999 368.078 747.999 480q0 64.615-30.731 124.692t-89.269 97.769v139.23q0 21.538-15.231 36.768-15.23 15.23-36.768 15.23h-25.539q-6.385 22.616-26.384 35.308-20 12.692-44.077 12.692Zm-96-99.998h192v-49.539H384v49.539Zm0-92.923h192v-48.769H384v48.769ZM346 648h116.154V529.538l-86.692-86.692L401 417.308l79 79 79-79 25.538 25.538-86.692 86.692V648H614q38-31 60-74.5t22-93.5q0-90-63-153t-153-63q-90 0-153 63t-63 153q0 49 22 93t60 75Zm134-151.692ZM480 456Z"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M291 802.153 253.847 765l189-189-189-189L291 349.847l189 189 189-189L706.153 387l-189 189 189 189L669 802.153l-189-189-189 189Z"/></svg>`,
    trash2: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M324.309 891.999q-27.008 0-45.658-18.65-18.65-18.65-18.65-45.658V360h-48v-51.999H384v-43.384h192v43.384h171.999V360h-48v467.257q0 27.742-18.65 46.242-18.65 18.5-45.658 18.5H324.309ZM400.155 768h51.999V432h-51.999v336Zm107.691 0h51.999V432h-51.999v336Z"/></svg>`



}

const mailSvgs = {
    apps: `<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M240 880.614q-26.653 0-45.634-18.98-18.98-18.981-18.98-45.634t18.98-45.634q18.981-18.98 45.634-18.98t45.634 18.98q18.98 18.981 18.98 45.634t-18.98 45.634q-18.981 18.98-45.634 18.98Zm240 0q-26.653 0-45.634-18.98-18.98-18.981-18.98-45.634t18.98-45.634q18.981-18.98 45.634-18.98t45.634 18.98q18.98 18.981 18.98 45.634t-18.98 45.634q-18.981 18.98-45.634 18.98Zm240 0q-26.653 0-45.634-18.98-18.98-18.981-18.98-45.634t18.98-45.634q18.981-18.98 45.634-18.98t45.634 18.98q18.98 18.981 18.98 45.634t-18.98 45.634q-18.981 18.98-45.634 18.98Zm-480-240q-26.653 0-45.634-18.98-18.98-18.981-18.98-45.634t18.98-45.634q18.981-18.98 45.634-18.98t45.634 18.98q18.98 18.981 18.98 45.634t-18.98 45.634q-18.981 18.98-45.634 18.98Zm240 0q-26.653 0-45.634-18.98-18.98-18.981-18.98-45.634t18.98-45.634q18.981-18.98 45.634-18.98t45.634 18.98q18.98 18.981 18.98 45.634t-18.98 45.634q-18.981 18.98-45.634 18.98Zm240 0q-26.653 0-45.634-18.98-18.98-18.981-18.98-45.634t18.98-45.634q18.981-18.98 45.634-18.98t45.634 18.98q18.98 18.981 18.98 45.634t-18.98 45.634q-18.981 18.98-45.634 18.98Zm-480-240q-26.653 0-45.634-18.98-18.98-18.981-18.98-45.634t18.98-45.634q18.981-18.98 45.634-18.98t45.634 18.98q18.98 18.981 18.98 45.634t-18.98 45.634q-18.981 18.98-45.634 18.98Zm240 0q-26.653 0-45.634-18.98-18.98-18.981-18.98-45.634t18.98-45.634q18.981-18.98 45.634-18.98t45.634 18.98q18.98 18.981 18.98 45.634t-18.98 45.634q-18.981 18.98-45.634 18.98Zm240 0q-26.653 0-45.634-18.98-18.98-18.981-18.98-45.634t18.98-45.634q18.981-18.98 45.634-18.98t45.634 18.98q18.98 18.981 18.98 45.634t-18.98 45.634q-18.981 18.98-45.634 18.98Z"/></svg>`,
    user: `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z"/></svg>`,
    search: `<svg role="img" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 gQUQL search-active-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"></path><path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path></svg>`,
    notes: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><path fill="#ffc107" d="M9,42h23l10-10V9c0-1.7-1.3-3-3-3H9C7.3,6,6,7.3,6,9v30C6,40.7,7.3,42,9,42z"/><path fill="#ffecb3" d="M32,42V32h10L32,42z"/><path fill="#fff" d="M28,36h-8v-7.9c-3.1-1.5-5-4.6-5-8.1c0-5,4-9,9-9c5,0,9,4,9,9c0,3.5-1.9,6.5-5,8.1V36z M22,34h4 v-7.3l0.6-0.3c2.7-1.1,4.4-3.6,4.4-6.5c0-3.9-3.1-7-7-7c-3.9,0-7,3.1-7,7c0,2.9,1.7,5.4,4.4,6.5l0.6,0.3V34z"/><path fill="#fff" d="M22 35h4v3h-4V35zM21 30H27V32H21z"/></svg>`,
    important: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M222.771 795.999 401.694 576 222.771 356.001h359.766q11.679 0 21.993 5.385 10.315 5.385 18.084 14.154L785.229 576 621.076 777.229q-7.385 8.385-17.315 13.577-9.93 5.193-21.224 5.193H222.771ZM335.846 744h234.691q5.77 0 10.77-2.693 5-2.692 8.462-7.308L717.846 576 589.769 418.001q-3.462-4.616-8.077-7.308Q577.076 408 570.537 408H335.846l134 168-134 168Zm134-168-134-168 134 168-134 168 134-168Z"/></svg>',
    importantFill: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M222.771 795.999 401.694 576 222.771 356.001h359.766q11.769 0 22.039 5.385 10.269 5.385 18.038 14.154L785.229 576 621.076 777.229q-7.385 8.385-17.27 13.577-9.884 5.193-21.269 5.193H222.771Z"/></svg>`,
    envelope:`<svg width="16px" height="16px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.336"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6ZM3.10658 5.55395C3.27196 5.22692 3.61204 5 4 5H20C20.388 5 20.728 5.22692 20.8934 5.55395L12 11.7793L3.10658 5.55395ZM3 7.92066L10.8531 13.4178C11.5417 13.8999 12.4583 13.8999 13.1469 13.4178L21 7.92066V18C21 18.5477 20.5477 19 20 19H4C3.45228 19 3 18.5477 3 18V7.92066Z" fill="#000000"></path> </g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6ZM3.10658 5.55395C3.27196 5.22692 3.61204 5 4 5H20C20.388 5 20.728 5.22692 20.8934 5.55395L12 11.7793L3.10658 5.55395ZM3 7.92066L10.8531 13.4178C11.5417 13.8999 12.4583 13.8999 13.1469 13.4178L21 7.92066V18C21 18.5477 20.5477 19 20 19H4C3.45228 19 3 18.5477 3 18V7.92066Z"></path> </g></svg>`,
    unreadEnvelope: `<svg fill="##5F6368" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.8640000000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <path d="M31.978 14.79c-0.043-0.354-0.175-0.679-0.378-0.952h0.005l-0.027-0.027c-0.102-0.135-0.223-0.254-0.357-0.36l-13.040-12.607c-1.132-1.132-3.11-1.134-4.243 0l-13.038 12.508c-0.282 0.262-0.903 0.972-0.903 1.667v14.985c0 1.099 0.9 2 2 2h28c1.099 0 2-0.901 2-2v-14.945c0.007-0.090-0.002-0.18-0.020-0.269zM8.431 22.698l-6.433 5.924v-11.599zM10.487 23.522c0.072-0.047 0.14-0.102 0.199-0.169 0.011-0.013 0.020-0.029 0.030-0.042l4.412-4.063c0.226-0.183 0.495-0.279 0.777-0.279 0.287 0 0.574 0.101 0.766 0.25l11.988 10.784h-25.21zM23.671 22.83l6.328-5.616v11.308zM3.243 13.838l12.109-11.579c0.19-0.188 0.441-0.293 0.707-0.293s0.518 0.105 0.708 0.293l11.293 10.761h-0.030l1.715 1.743-7.572 6.72-4.227-3.802c-1.177-0.923-2.868-0.963-4.115 0.043l-3.922 3.612-7.556-6.667 0.844-0.831h0.046z"></path> </g></svg>`,
    trash: `<svg xmlns="http://www.w3.org/2000/svg" width="20
    " height="20" viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>`,
    inbox: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M216 912q-29 0-50.5-21.5T144 840V312q0-29.7 21.5-50.85Q187 240 216 240h528q29.7 0 50.85 21.15Q816 282.3 816 312v528q0 29-21.15 50.5T744 912H216Zm0-72h528V696H632q-23 43-63.5 69.5T480 792q-49 0-89.5-26T328 696H216v144Zm264-120q40 0 68-28t28-68h168V312H216v312h168q0 40 28 68t68 28ZM216 840h528-528Z"/></svg>',
    inboxFill: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M216 912q-29 0-50.5-21.5T144 840V312q0-29.7 21.5-50.85Q187 240 216 240h528q29.7 0 50.85 21.15Q816 282.3 816 312v528q0 29-21.15 50.5T744 912H216Zm264-192q40 0 68-28t28-68h168V312H216v312h168q0 40 28 68t68 28Z"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m352 811 128-76 129 76-34-144 111-95-147-13-59-137-59 137-147 13 112 95-34 144ZM243 960l63-266L96 515l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Zm237-333Z"/></svg>',
    starFill: '<svg xmlns="http://www.w3.org/2000/svg" fill="#ffc107" height="20" viewBox="0 96 960 960" width="20"><path d="m243 960 63-266L96 515l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z"/></svg>',
    sent: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M144 864V288l720 288-720 288Zm72-107 454-181-454-181v109l216 72-216 72v109Zm0 0V395v362Z"/></svg>`,
    sentFill: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M144 864V672l288-96-288-96V288l720 288-720 288Z"/></svg>`,
    drafts: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M263.717 960Q234 960 213 938.85T192 888V264q0-29.7 21.15-50.85Q234.3 192 264 192h312l192 192v504q0 29.7-21.162 50.85Q725.676 960 695.96 960H263.717ZM528 432V264H264v624h432V432H528ZM264 264v189-189 624-624Z"/></svg>',
    draftsFill: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M263.717 960Q234 960 213 938.85T192 888V264q0-29.7 21.15-50.85Q234.3 192 264 192h312l192 192v504q0 29.7-21.162 50.85Q725.676 960 695.96 960H263.717ZM528 432h168L528 264v168Z"/></svg>',
    compose: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m291 816-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>`,
    checkBox: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M228.309 891.999q-27.008 0-45.658-18.65-18.65-18.65-18.65-45.658V324.309q0-27.008 18.65-45.658 18.65-18.65 45.658-18.65h503.382q27.008 0 45.658 18.65 18.65 18.65 18.65 45.658v503.382q0 27.008-18.65 45.658-18.65 18.65-45.658 18.65H228.309Zm0-51.999h503.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V324.309q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H228.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v503.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Z"/></svg>`,
    checkBoxFill: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m429 706.153 224.922-223.922-37.153-37.153L429 631.847l-85-84L306.847 585 429 706.153ZM228.309 891.999q-27.008 0-45.658-18.65-18.65-18.65-18.65-45.658V324.309q0-27.008 18.65-45.658 18.65-18.65 45.658-18.65h503.382q27.008 0 45.658 18.65 18.65 18.65 18.65 45.658v503.382q0 27.008-18.65 45.658-18.65 18.65-45.658 18.65H228.309Zm0-51.999h503.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V324.309q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H228.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v503.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846ZM216 312v528-528Z"/></svg>`,
    palette: `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-85 32-158t87.5-127q55.5-54 130-84.5T489 176q79 0 150 26.5T763.5 276q53.5 47 85 111.5T880 529q0 108-63 170.5T650 762h-75q-18 0-31 14t-13 31q0 27 14.5 46t14.5 44q0 38-21 58.5T480 976Zm0-400Zm-233 26q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm126-170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm214 0q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm131 170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15ZM480 916q11 0 15.5-4.5T500 897q0-14-14.5-26T471 818q0-46 30-81t76-35h73q76 0 123-44.5T820 529q0-132-100-212.5T489 236q-146 0-247.5 98.5T140 576q0 141 99.5 240.5T480 916Z"/></svg>`,
    x: `<svg role="img" height="16" width="16" aria-hidden="true" aria-label="Close" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M1.47 1.47a.75.75 0 0 1 1.06 0L8 6.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L9.06 8l5.47 5.47a.75.75 0 1 1-1.06 1.06L8 9.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L6.94 8 1.47 2.53a.75.75 0 0 1 0-1.06z"></path></svg>`,

}

function getNoteSvg(iconName) {
    return noteSvgs[iconName]
}

function getMailSvg(iconName) {
    return mailSvgs[iconName]
}
export const svgService = { getNoteSvg, getMailSvg }

// in template
// <div className="icon" v-html="getSvg('bars')"></div>
// <img style="width:24px; height:24px" :src="getSvg('add')" alt="" />

// in methodes
//      getSvg(iconName) {
//     return svgService.getMailSvg(iconName)
//   }
