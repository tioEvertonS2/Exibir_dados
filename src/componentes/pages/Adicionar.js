import React, { useState } from 'react';
import './Adicionar.css';

const FormularioPaciente = () => {
    const [paciente, setPaciente] = useState({
        nome: '',
        cpf: '',
        dataNascimento: '',
        dataConsulta: '',
        relato: '',
        doencas: [],
        alergias: [],
        medicacoes: '',
        diagnostico: '',
        exames: '',
        anotacoes: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaciente((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setPaciente((prev) => ({
            ...prev,
            [name]: checked
                ? [...prev[name], e.target.value]
                : prev[name].filter((item) => item !== e.target.value),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(paciente);
    };

    return (
        <form className="formulario-paciente" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Paciente:</label>
                <input type="text" name="nome" value={paciente.nome} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>CPF:</label>
                <input type="text" name="cpf" value={paciente.cpf} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Data de nascimento:</label>
                <input type="date" name="dataNascimento" value={paciente.dataNascimento} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Data da consulta:</label>
                <input type="date" name="dataConsulta" value={paciente.dataConsulta} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Relato:</label>
                <textarea name="relato" value={paciente.relato} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Doenças preexistentes:</label>
                <div className="checkbox-group">
                    <label>
                        <input type="checkbox" name="doencas" value="Hipertensão" onChange={handleCheckboxChange} />
                        Hipertensão
                    </label>
                    <label>
                        <input type="checkbox" name="doencas" value="Diabetes tipo I" onChange={handleCheckboxChange} />
                        Diabetes tipo I
                    </label>
                    <label>
                        <input type="checkbox" name="doencas" value="Diabetes tipo II" onChange={handleCheckboxChange} />
                        Diabetes tipo II
                    </label>
                    <label>
                        <input type="checkbox" name="doencas" value="Hipotensão" onChange={handleCheckboxChange} />
                        Hipotensão
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label>Alergias:</label>
                <div className="checkbox-group">
                    <label>
                        <input type="checkbox" name="alergias" value="Glúten" onChange={handleCheckboxChange} />
                        Glúten
                    </label>
                    <label>
                        <input type="checkbox" name="alergias" value="Leite" onChange={handleCheckboxChange} />
                        Leite
                    </label>
                    <label>
                        <input type="checkbox" name="alergias" value="Ovo" onChange={handleCheckboxChange} />
                        Ovo
                    </label>
                    <label>
                        <input type="checkbox" name="alergias" value="Amendoim" onChange={handleCheckboxChange} />
                        Amendoim
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label>Medicações em uso:</label>
                <input type="text" name="medicacoes" value={paciente.medicacoes} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Diagnóstico:</label>
                <input type="text" name="diagnostico" value={paciente.diagnostico} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Exames Solicitados:</label>
                <input type="text" name="exames" value={paciente.exames} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Anotações de Retorno:</label>
                <textarea name="anotacoes" value={paciente.anotacoes} onChange={handleChange} />
            </div>
            <button type="submit" className="submit-button">Enviar</button>
        </form>
    );
};

export default FormularioPaciente;
