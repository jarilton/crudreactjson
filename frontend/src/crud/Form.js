import React from 'react';
import { Input } from 'antd';

const FormElement = ({ handleSubmit, name, setName }) => {
  <form onSubmit={handleSubmit}>
    <div className="form">
      <Input
        type="text"
        placeholder="Digite o nome"
        value={name}
        style={{width: "50%"}}
        autofocus
        required
      />
      <br />
      <button className="btn btn-primary mt-1">Salvar</button>
      <button className="btn btn-danger mt-1" onClick={() => setName("")}>
        Cancelar
      </button>
    </div>
  </form>
};

export default FormElement;
