import React,{useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function calcFatorial(num){
    const n = parseInt(num)
    if(n<0) return -1
    if(n===0) return 1
    return calcFatorial(n-1) * n
}
//const isPar = props.numero % 2 === 0;
function isPar(num){
    const n = parseInt(num)
    return n % 2 === 0 ? 'PAR' : 'IMPAR' ;
}

const UseEffect = (props) => {

const [number,setNumber] = useState(1);
const [fatorial,setFatorial] = useState(1);

const [valor,setValor] = useState(0) 
const [tipo,setTipo] = useState('')

useEffect(() => {
    setFatorial(calcFatorial(number))
}, [number])

useEffect(()=>{
    if(fatorial > 1000000){
        document.title = 'Eitaaaa preula!!'
    }else{
        document.title = 'React App'
    }

},[fatorial])


useEffect(()=>{
    setTipo(isPar(valor))

},[valor])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle
                title="Exercício #01"
            />
            <div className='center'>
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe': fatorial}</span>
                </div>
                <input type="number" className="input" 
                    value={number}
                    onChange={(e)=>{
                        setNumber(e.target.value)
                    }}
                />

            </div>

            <SectionTitle
                title="Exercício #02"
            />
            <div className="center">

                <div>
                    <span className="text">Impar/par: </span>
                    <span className="text red"> {tipo} </span>
                </div>
                <input type="number" className="input"
                    value={valor}
                    onChange={
                        (e)=>{
                            setValor(e.target.value)
                        }
                    }
                />

            </div>

        </div>


    )
}

export default UseEffect
