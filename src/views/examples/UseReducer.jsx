import React,{useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

 // n x 7  -- div 25  -- parceint -- add numero N 

const initialState = {
    cart:[],
    products:[],
    user:null,
    //foco
    number: 0
}

function reducer(state,action){
    switch(action.type){
        case 'numberAdd2':
                return {...state,number:state.number +2}
        case 'login':
                return {...state, user:{name:action.payLoad}}
        case 'numberX7':
            return {...state, number: state.number > 0 ? state.number * 7 : 0}
        case 'numberDiv25':
            return {...state, number:state.number / 25}
        case 'numberParceInt':
            return {...state, number:parseInt(state.number)}
        case 'numberAddN':
            return {...state, number:action.payLoad}
        default:
            return state
    }
}

const UseReducer = (props) => {

    const [state,dispatch] = useReducer(reducer,initialState);


    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle
                title="Exercício #01"
            />
            <div className="center">
                {state.user ?
                    <span className="text">
                        {state.user.name}
                    </span>
                     :
                    <span className="text">
                        Sem Usuário
                    </span>
                }
                
                <span className="text">
                     {state.number}
                </span>
                <div>
                    <button 
                        className="btn"
                        onClick={()=>dispatch({type:'login', payLoad:'Maria'})}
                    >Logar</button>
                    <button className="btn"
                         onClick={()=>dispatch({type:'numberAdd2'})}
                    >
                        +2
                    </button>
                </div>
            </div>
            <SectionTitle
                title="Desafio useReducer #01"
            />
            <div className="center">
                <div style={
                    {marginTop: 40}
                }>
                    <button 
                        className="btn"
                        onClick={()=>dispatch({type:'numberX7'}) }
                    >N x 7</button>
                    <button 
                        className="btn"
                        onClick={()=>dispatch({type:'numberDiv25'}) }
                    >N / 25 </button>
                    <button 
                        className="btn"
                        onClick={()=>dispatch({type:'numberParceInt'}) }
                    > ParceInt(N) </button>


                    <button 
                        className="btn"
                        onClick={()=>dispatch({type:'numberAddN',payLoad:10}) }
                    > Set N </button>

                </div>
            </div>


        </div>
    )
}

export default UseReducer
