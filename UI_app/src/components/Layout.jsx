
export default function Layout({children}){
    return(
        <>       
        <header>
            Navn på spill...
           <nav>
               <ul>
               <li><button>?</button></li> {/** ? - skal føre til Regler/hjelp */}
               </ul>
           </nav>
       </header>

       <main>
       {children}
       </main>

       <footer>
        <p>2026 &copy; Spillnavn... </p>
       </footer>
       </>
    )
}

