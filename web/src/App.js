import React, { useState } from 'react';

import './global.css';
import './app.css';
import './SideBar.css';
import './Main.css';

// Componente = funcao que retorna um HTML, CSS, JS | deve ser criado quando o 
//    codigo se repete ou quando precisamos isolar uma area da aplicacao como um footer;
//    Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicacao;

// Propriedades =  informacoes que um componente PAI passa para o componente FILHO

// Estado = informacoes mantidas pelo componente (lembrar: imutabilidade)


function App() {

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div class="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" id="github_username"required/>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs"required/>
          </div>

          <div className="input-group">

            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude"required/>
            </div>

            <div class="input-block">
              <label htmlFor="logitude">logitude</label>
              <input name="logitude" id="logitude"required/>
            </div>

            

          </div>

          <button type="submit">Salvar</button>

        </form>

      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/26824488?s=400&u=cdee9e7bf684a16165bb4cb98970423f15fab6f4&v=4" alt="Higor Hotz"/>
              <div className="user-info">
                <strong>Higor Hotz</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/highotz">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/26824488?s=400&u=cdee9e7bf684a16165bb4cb98970423f15fab6f4&v=4" alt="Higor Hotz"/>
              <div className="user-info">
                <strong>Higor Hotz</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/highotz">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/26824488?s=400&u=cdee9e7bf684a16165bb4cb98970423f15fab6f4&v=4" alt="Higor Hotz"/>
              <div className="user-info">
                <strong>Higor Hotz</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/highotz">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/26824488?s=400&u=cdee9e7bf684a16165bb4cb98970423f15fab6f4&v=4" alt="Higor Hotz"/>
              <div className="user-info">
                <strong>Higor Hotz</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/highotz">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
