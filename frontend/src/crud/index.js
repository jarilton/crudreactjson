
import React, {useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { getNames } from "./api";
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

    return(
      <div className="container-fluid">
        <div className="row"> 
          <div className="col-md-8">
            {loading ? (
              <Loading />
            ) : (
              <>
                  <h4>Cadastro de Clientes com Json Server</h4>
                {names && names.map((t) => (
                  <div className="border row mx-2 align-items-center" key={t.id}>
                    <ul className="list-group">
                      <li className="list-group-item">{t.name}</li>
                    </ul>
                    <span
                      onclick={() => console.log("")}
                      className="btn btn-sm float-right"
                    >
                      <DeleteOutlined className="text-danger" />
                    </span>
                    <Link to={`/updates/${t.id}`}>
                      <span
                        onclick={() => console.log("")}
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

