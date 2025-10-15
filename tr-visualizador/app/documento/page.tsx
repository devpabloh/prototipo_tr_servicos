import { FolhaDocumento } from "../components/FolhaDocumento";

interface DocumentoPageProps{
  searchParams:{
    descricao?: string;
    numeroConsorciadas?: string;
    justificativa?: string;
    numeroPorExtenso?: string;
    nao_havendo_complexidade_objeto: string;
    nao_havendo_grande_vulto_da_contratacao: string;
  }
}

function GerarTextoDoConsorcio({searchParams}: DocumentoPageProps){
  const {descricao,justificativa,numeroConsorciadas,numeroPorExtenso,nao_havendo_complexidade_objeto,nao_havendo_grande_vulto_da_contratacao} = searchParams

  switch (descricao) {
    case 'sim':
      return <p>2.5.1 No caso vertente, é permitida a participação de empresas sob a forma de consórcio, na forma do art. 15, da Lei nº 14.133/2021.</p>;

    case 'sim_com_numero_limitado_de_fornecedores': 
      const numStr = numeroConsorciadas || "______";
      const extensoStr = numeroPorExtenso || "____________";
      const justStr = justificativa || "________________________________";

      return (
        <>
          <p>2.5.1 No caso vertente, é permitida a participação de empresas sob a forma de consórcio, na forma do art. 15, da Lei nº 14.133/2021.</p>
          <p>O número máximo de empresas admitidas em cada consórcio será de <strong>{numStr} ({extensoStr})</strong>, uma vez que <strong>{justStr}</strong>.</p>
        </>
      );

      case 'nao':
        const naoHavendoComplexidadeObjeto = nao_havendo_complexidade_objeto || "________________________________";
        const naoHavendoGrandeVultoDaContratacao = nao_havendo_grande_vulto_da_contratacao || "________________________________";
        return (
          <>
            <p>2.5.1.De acordo com o art. 15 da Lei nº 14.133/2021, a participação de empresas reunidas em consórcio poderá ser vedada, segundo discricionariedade da Administração, com base em justificativa técnica que leve em consideração as peculiaridades do caso concreto.</p>
            <p>2.5.2 Assim, não poderá participar desta licitação consórcio de empresa, qualquer que seja sua forma de constituição, visto que não se faz necessária a conjugação de esforços para a prestação do presenteserviço contínuo.</p>
            <p>2.5.3.Além disso, no caso vertente, não se faz presente a premissa da complexidade do objeto, uma vez que <strong>{naoHavendoComplexidadeObjeto}</strong>. Também não está presente o grande vulto da contratação, pois <strong>{naoHavendoGrandeVultoDaContratacao}</strong>.<span className="orientacoes">(Adaptar a redação caso haja apenas um dos critérios – vulto ou complexidade)</span>.</p>
          </>
        );
  }
}

export default function DocumentoPage({searchParams}:DocumentoPageProps){

  return(
    <FolhaDocumento>
      <div className="font-serif">
        <h2 className="text-xl font-bold border-b pb-4 text-center">2.5 DA PREVISÃO DA VEDAÇÃO OU PARTICIPAÇÃO DE EMPRESAS SOB A FORMA DE CONSÓRCIO</h2>
        <div className="mt-8 text-lg space-y-4">
          <GerarTextoDoConsorcio searchParams={searchParams} />
        </div>
      </div>
    </FolhaDocumento>
  )
}