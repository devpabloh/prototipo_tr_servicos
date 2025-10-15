'use client'
import {useState} from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { numeroPorExtenso } from '@/lib/utils'; 
import { Modal } from '../components/Modal';
import { ConteudoDocumento } from '../components/ConteudoDocumento';

 export default function EditorPage(){
  const [ formData, setFormData] = useState({
    descricao: 'sim',
    numeroConsorciadas: '',
    justificativa: '',
    nao_havendo_complexidade_objeto: '',
    nao_havendo_grande_vulto_da_contratacao: ''
    
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleVisualizar(){
    setIsModalOpen(true)
  }

  return (
   <>
       <fieldset className='p-4 md:p-6'>
      <legend className="text-xl font-semibold px-2">2.5 Da previsão vedação ou participação de empresas sob a forma de consórcio</legend>
      <div className='my-4 space-y-2'>      
        <p className="orientacoes ">Nos termos do art. 15 da Lei 14.133, de 2021, a regra é a admissibilidade da participação de empresas reunidas em consórcio.A opção pela vedação, a depender da análise do caso concreto, deverá estar devidamente justificada, com base em elementos técnicos e econômicos, a partir das variáveis da complexidade do objeto e das circunstâncias do mercado, tais quais o risco à restrição da competitividade, as dificuldades de gestão da execução do contrato e a capacidade técnica e econômica dos participantes.</p>
        <p className="orientacoes">Em princípio, conforme orientação da PGE no edital padrão de serviços, a execução de serviços especiais, por envolverem objeto dotado de heterogeneidade e complexidade, pode demandar a conjugação de esforços de mais de uma empresa para viabilizar a participação no certame. Em outros casos concretos, a depender do vulto da contratação, mesmo a execução de serviços comuns pode recomendar a participação de consórcio.</p>
      </div>
      <div className='grid grid-cols-1 gap-x-6 gap-y-4 pt-4'>
        <div className='flex flex-col space-y-1'>
          <label htmlFor="Permite_consorcios" className="font-semibold">Permite consórcios ?</label>
          <div>
            <select name="permite_consorcios" id="Permite_consorcios" className="border rounded-sm p-2 flex-grow" value={formData.descricao} onChange={(e)=> setFormData({...formData, descricao: e.target.value })}>
              <option value="sim">Sim</option>
              <option value="sim_com_numero_limitado_de_fornecedores">Sim, com número limitado de fornecedores</option>
              <option value="nao">Não</option>
            </select>
            <button onClick={handleVisualizar} className='cursor-pointer ml-2 p-2 hover:text-blue-500'><IoEyeSharp size={20}/></button>
          </div>
        </div>
        {formData.descricao === 'sim_com_numero_limitado_de_fornecedores' && (
          <div className='flex flex-col space-y-1'>
            <label htmlFor="quantas_empresas_serao_admitidas_consorcio" className="font-semibold">Quantas empresas serão admitidas em cada consórcio ?</label>
            <input type="number" id='quantas_empresas_serao_admitidas_consorcio' className='border rounded-sm p-2 w-[345px]' value={formData.numeroConsorciadas} onChange={(e)=>setFormData({...formData, numeroConsorciadas: e.target.value})} />
             {formData.descricao === 'sim_com_numero_limitado_de_fornecedores' && (
              <p className="text-sm text-gray-500 italic">
                {numeroPorExtenso(formData.numeroConsorciadas)}
              </p>
            )}
          </div>
        ) }
        {formData.descricao === 'sim_com_numero_limitado_de_fornecedores' && (
          <div className='flex flex-col space-y-1'>
            <label htmlFor="justificativa" className="font-semibold">Justificativa</label>
            <div>
              <span className="orientacoes">(expor justificativa técnica aprovada pela autoridade competente que viabilize a limitação de participantes no consórcio)</span>
            </div>
            <input type="text" id='justificativa' className='border rounded-sm p-2' value={formData.justificativa} onChange={(e)=>setFormData({...formData, justificativa: e.target.value})} />
          </div>
        ) }
        {formData.descricao === 'nao' && (
          <div className='flex flex-col space-y-1'>
            <label htmlFor="nao_havendo_complexidade_objeto" className='font-semibold'>Além disso, no caso vertente, não se faz presente a premissa de complexidade do objeto, uma vez que?</label>
            <div>
              <span className="orientacoes">Adaptar a redação caso haja apenas um dos critérios – vulto ou complexidade</span>
            </div>
            <div>
              <input type="text" id='nao_havendo_complexidade_objeto' className='border rounded-sm p-2 w-full' value={formData.nao_havendo_complexidade_objeto} onChange={(e)=>setFormData({...formData, nao_havendo_complexidade_objeto: e.target.value})} />
            </div>
          </div>
        )}
        {formData.descricao === 'nao' && (
          <div className='flex flex-col space-y-1'>
            <label htmlFor="nao_havendo_grande_vulto_da_contratacao" className='font-semibold'>Também não está presente o grande vulto da contratação, pois?</label>
            <div>
              <input type="text" id='nao_havendo_grande_vulto_da_contratacao' className='border rounded-sm p-2 w-full' value={formData.nao_havendo_grande_vulto_da_contratacao} onChange={(e)=>setFormData({...formData, nao_havendo_grande_vulto_da_contratacao: e.target.value})} />
            </div>
            <div>
              <span className="orientacoes">Caso haja outra justificativa cabível, acrescentar, como exemplo: baixa complexidade técnica ou operacional ou ausência de riscos financeiros consideráveis</span>
            </div>
          </div>
        )}

      </div>
    </fieldset>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ConteudoDocumento formData={formData} />
      </Modal>
   </>
  )
}

