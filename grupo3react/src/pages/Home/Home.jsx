import "./home.css"

export function Home () {
    return (
        <>
        <body className="bodyHome">
            <main className="mainHome">
            <div className="tituloHome"><p><span>Abasteça sua<br/> conta<br/></span> e inicie suas<br/> operações</p></div>
            <div className="fraseHome"><p>COMO FAZER SEU BITCOIN<br/> TRABALHAR PARA VOCÊ<br/> COM A <span>CRIPTOSERRA</span></p></div>
            <div className="graficosHome">
                <img src="src/img/bitcoin.webp" alt="" />
                <img src="src/img/ethereum.webp" alt="" />
            </div>
        </main>
        </body>
        
        </>
    )
}