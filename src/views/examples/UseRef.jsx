import React, {useState,useRef, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'



const merge = (s1, s2) =>{
    let valorFinal = ''
    const vl = s1 + s2;
    //console.log(vl)
    const tamanho = vl.length
    //console.log(tamanho)
    let id = 0;

    while (tamanho > id){
        valorFinal = valorFinal + ( s1[id] || '') + (s2[id] ||'')
        id++
    }
    return valorFinal
}
const UseRef = (props) => {


    const [value1,setValue1] = useState("");
    const [value2,setValue2] = useState("");

    const count = useRef(0);

    const myInput1 =useRef(null)
    const myInput2 =useRef(null)

    //console.log(myInput1.current.value)

    

    useEffect(()=>{
        count.current ++;
        myInput2.current.focus()
    },[value1]);

    useEffect(()=>{
        count.current ++;
        myInput1.current.focus()
    },[value2]);



    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle
                title="Exercício #01"
            />
            <div  className="center">

                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1,value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">] </span>
                </div>

                <input type="text" className="input"
                    ref={myInput1}
                    value={value1}
                    onChange={(e)=>{setValue1(e.target.value)}}

                />
            </div>
            <SectionTitle
                title="Exercício #02"
            />
            <div className='center'>
                <input type="text" className="input"
                    ref={myInput2}
                    value={value2}
                    onChange={(e)=>{setValue2(e.target.value)}}

                />  

            </div>
        </div>
    )
}

export default UseRef
