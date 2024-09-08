function pesquisar(){

    let section = document.getElementById("resultado-pesquisa")
    let pesqui = document.getElementById("barraPesquisa")

    console.log(pesqui)
    
    
    for (let dado of dados){
        dado.raca.includes(pesqui)
        section.innerHTML += `
        <div>
                        <h2>Raça: ${dado.raca}</h2>
                        <h2>Classe: ${dado.classe}</h2>
                        <p>SubClasse: ${dado.subClasse}</p>
                        <P>Armas: ${dado.armas}</P>
                        <p>Equipamentos: ${dado.equipamentos}</p>
                        <p>Pontos fortes :${dado.pontosDeHabilidades}</p>
                        <p> Habilidade especial :${dado.ataquesHabilidadesEspeciais}</p>
                        <p>Hp :${dado.hp}</p>
                </div>`
                
    };
}



