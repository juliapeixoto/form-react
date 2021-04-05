import React, {useState} from 'react';
import {TextField, Button, Switch, FormControlLabel} from '@material-ui/core';

function FormCadastro() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            }}>

            <TextField
            value={nome}
            onChange={(event) => {
                setNome(event.target.value);
            }}
            id="nome"
            label="Nome"
            variant="outlined"
            margin="normal"
            fullWidth/>


            <TextField
            value={sobrenome}
            onChange={(event) => {
                setSobrenome(event.target.value);
            }}
            id="sobrenome"
            label="Sobrenome"
            variant="outlined"
            margin="normal"
            fullWidth/>


            <TextField
            id="cpf"
            label="CPF"
            variant="outlined"
            margin="normal"
            fullWidth/>


            <FormControlLabel label="Promoções" control=
            {<Switch name="promocoes" Defaultchecked color="primary"/>}/>

            <FormControlLabel label="Novidades" control=
            {<Switch name="novidades" Defaultchecked color="primary"/>}/>

            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    )
    
}

export default FormCadastro;