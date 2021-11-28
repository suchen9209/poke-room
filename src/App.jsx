import React, {useEffect} from 'react';
import {BrowserRouter, Link, Route, Router,  useParams,useNavigate } from 'react-router-dom';

function App(){
    let navigate = useNavigate();
    useEffect(()=>{
        navigate("/login")
    })

  return (
      <div>
          <h1>Bookkeeper</h1>
          <nav
              style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem"
              }}
          >
              {/*<div ><button>123123</button>12380192830123</div>*/}
              <Link to="/invoices">Invoices</Link> |{" "}
              <Link to="/expenses">Expenses</Link>

          </nav>
      </div>
  )

}
export default App;