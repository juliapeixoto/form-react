import { Typography } from '@material-ui/core';
import React, {useState} from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormCadastro({aoEnviar, validarCPF}) {
    const [etapaAtual, setEtapaAtual] = useState(1);

    function formAtual(etapa) {
        switch(etapa){
            case 0:
                return <DadosUsuario/>;
            
            case 1:
                return <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>;
    
            case 2:
                return <DadosEntrega/>;
            
            default: 
                return <Typography>Erro ao selecionar formulário</Typography>;
        }
    }

    return(
        <>
        {formAtual(etapaAtual)}
        </>
    )
    
}

export default FormCadastro;