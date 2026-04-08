import D6dice from "./D6dice/D6dice.jsx"
export default function Layout({children}){
    return(
        <>       
        <header>
            Navn på spill...
           <nav>
               <ul>
                    <li><button>?</button></li> 
                    {/** ? - skal føre til Regler/hjelp */}
               </ul>
           </nav>
       </header>

       <main>
       {children}
       </main>
            <section className="dice-section">
                <D6dice />
            </section>

       <footer>
        <p>2026 &copy; Spillnavn... </p>
       </footer>
       </>
    )
}

