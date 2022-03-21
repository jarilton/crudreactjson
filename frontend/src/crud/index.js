
import React, {useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { getNames } from "./api";
import {EditOutlined, deleteOutlined} from '@ant-design/icons'

const Crud = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState([]);

  useEffect(() => {
    loadNames();
  }, []);

  const loadNames = () => getNames()
    .then((name) => setNames(name.data));

    return(
      <div className="container-fluid">
        <div className="row"> 
          <div className="col-md-8">
            {names && names.map((name) => (
              <div className="border row mx-2 align-items-center" key={name.id}>
                <ul className="list-group">
                  <li className="list-group-item">{t.name}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

