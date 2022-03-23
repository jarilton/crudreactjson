
import React, {useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { getNames,createName, deleteName } from "./api";
import { Link } from 'react-router-dom'
import FormElement from './Form'
import Loading from './Loading'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'

const Crud = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState([]);

  useEffect(() => {
    loadNames();
  }, []);

  const loadNames = () => getNames().then((name) => setNames(name.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createName({name}).then((resp) => {
      setLoading(false);
      setName("");
      toast.success(`${resp.data.name} is created`);
      loadNames();
    })
    .catch((err) => {
      setLoading(false);
      if (err.response.status === 400) toast.error(err.response.data);
    })
  }

  const handleDelete = (id, name) => {
    if(window.confirm("Deseja realmente excluir?")) {
      setLoading(true);
      deleteName(id).then((resp) => {
        setLoading(false);
        toast.error(`${name} is deleted`);
        loadNames();
      })
      .catch((err) => {
        if (err.response.status === 400) 
        setLoading(false);
        toast.error(err.response.data);
      })
    }
  }

    return(
      <div className="container-fluid">
        <div className="row"> 
          <div className="col-md-8">
            {loading ? (
              <Loading />
            ) : (
              <>
                <h4 className="text-center">Cadastro de Clientes com Json Server</h4>
                <FormElement 
                  handleSubmit={handleSubmit}
                  name={name}
                  setName={setName}
                />

                {names && names.map((t) => (
                  <div className="border row mx-2 align-items-center" key={t.id}>
                    <ul className="list-group">
                      <li className="list-group-item">{t.name}</li>
                    </ul>
                    <span
                      onClick={() => handleDelete(t.id, t.name)}
                      className="btn btn-sm float-right"
                    >
                      <DeleteOutlined className="text-danger" />
                    </span>
                    <Link to={`/updates/${t.id}`}>
                      <span
                        onClick={() => console.log("")}
                        className="btn btn-sm float-right"
                      >
                        <EditOutlined className="text-warning" />
                      </span>
                    </Link>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    )
}

export default Crud;

