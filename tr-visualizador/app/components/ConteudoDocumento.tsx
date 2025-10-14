import { FolhaDocumento } from "./FolhaDocumento";
import { numeroPorExtenso } from "@/lib/utils";

interface ConteudoDocumentoProps {
  formData: {
    descricao?: string;
    numeroConsorciadas?: string;
    justificativa?: string;
  }
}

function GerarTextoDoConsorcio({ formData }: ConteudoDocumentoProps) {
  const { descricao, numeroConsorciadas, justificativa } = formData;

  const extensoStr = numeroPorExtenso(numeroConsorciadas || ''); 

  switch (descricao) {
    case 'sim':
      return <p>2.5.1 No caso vertente, é permitida a participação de empresas sob a forma de consórcio...</p>;
    
    case 'sim_com_numero_limitado_de_fornecedores': 
      const numStr = numeroConsorciadas || "______";
      const justStr = justificativa || "________________________________";
      return (
        <>
          <p>2.5.1 No caso vertente, é permitida a participação de empresas sob a forma de consórcio, na forma do art. 15, da Lei nº 14.133/2021.</p>
          <p>2.5.2 O número máximo de empresas admitidas em cada consórcio será de <strong>{numStr} ({extensoStr})</strong>, uma vez que {justStr}.</p>
        </>
      );

    case 'nao':
      return (
        <>
          <p>2.5.1. De acordo com o art. 15 da Lei nº 14.133/2021, a participação de empresas reunidas em consórcio poderá ser vedada, segundo discricionariedade da Administração, com base em justificativa técnica que leve em consideração as peculiaridades do caso concreto.</p>
          <p>2.5.2 Assim, não poderá participar desta licitação consórcio de empresa, qualquer que seja sua forma de constituição, visto que não se faz necessária a conjugação de esforços para a prestação do presenteserviço contínuo.</p>
          <p>2.5.3. Além disso, no caso vertente, não se faz presente a premissa da complexidade do objeto, uma vez que _____________________________________________________. Também não está presente o grande vulto da contratação, pois _________________________________________.</p>
        </>
      );

    default:
      return <p className="text-gray-400 italic">Opção de consórcio não selecionada.</p>;
  }
}

export function ConteudoDocumento({ formData }: ConteudoDocumentoProps) {
  return (
    <FolhaDocumento>
      <div className="font-serif">
        <h2 className="text-xl font-bold pb-2 text-justify">2.5 DA PREVISÃO DA VEDAÇÃO OU PARTICIPAÇÃO DE EMPRESAS SOB A FORMA DE CONSÓRCIO</h2>
        <div className="mt-2 text-lg space-y-4">
          <GerarTextoDoConsorcio formData={formData} />
        </div>
      </div>
    </FolhaDocumento>
  );
}