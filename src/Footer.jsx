import React from 'react'

export default function Footer() {
    return (
        <footer className="footer p-8 bg-neutral text-neutral-content place-items-center md:place-items-start">
            <aside className="align-items-center grid-flow-col">
                <img src="/SH_LOGO_FUCHSIA.png" alt="Logo" width="32" />
                <small>DALL-E 3 Generator © {new Date().getFullYear()} - All right reserved</small>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
           
            </nav>
        </footer>
    )
}
